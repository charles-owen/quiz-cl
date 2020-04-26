<?php
/** @file
 * Table class for the quiztry table
 */
 
namespace CL\Quiz;

use CL\Tables\Config;
use CL\Users\User;
use CL\Course\Members;

/**
 * Table class for the quiztry table
 *
 * This class represents tries by a user at a quiz
 */
class QuizTries extends \CL\Tables\Table {

	/**
	 * Members constructor.
	 * @param Config $config Database configuration object
	 */
	public function __construct(Config $config) {
		parent::__construct($config, "quiztry");
	}

    /**
     * Indicate the start of a quiz try. This creates a single record for the try
     * @param User $user User we are checking for
     * @param QuizSession $session The quiz session we are starting
     * @param int $time Time or null for current time
     * @return boolean True if successful
     */
    public function start(User $user, QuizSession $session, $time=null) {
        $pdo = $this->pdo();
        if($time === null) {
            $time = time();
        }

        $sql = <<<SQL
INSERT INTO $this->tablename(token, memberid, assigntag, quiztag, start, points, maxpoints)
values(?, ?, ?, ?, ?, ?, ?)
SQL;

        $quiz = $session->quiz;

        $stmt = $pdo->prepare($sql);
        return $stmt->execute([$session->token, $user->member->id,
	        $quiz->assignTag, $quiz->tag, $this->timeStr($time),
	        0, $quiz->points]);
    }

    /**
     * Indicate the end of a quiz try
     * @param string $token The quiz session token
     * @param int $time Time stamp or null if none
     */
    public function end($token, $time=null) {
        $pdo = $this->pdo();
        if($time === null) {
            $time = time();
        }

        $sql = <<<SQL
UPDATE $this->tablename set end=? where token=?
SQL;

        $stmt = $pdo->prepare($sql);
        $stmt->execute([$this->timeStr($time), $token]);
    }

    /**
     * Set the number of points for this quiz try
     * @param string $token The quiz session token
     * @param int $points New point count
     */
    public function setPoints($token, $points) {
        $pdo = $this->pdo();

        $sql = <<<SQL
UPDATE $this->tablename set points=? where token=?
SQL;

        $stmt = $pdo->prepare($sql);
        $stmt->execute([$points, $token]);
    }

	/**
	 * Set the number of points for this quiz try
	 * @param string $token The quiz session token
	 * @param int $points New point count
	 * @param int $time End time for the quiz
	 */
	public function setPointsAndEnd($token, $points, $time) {
		$pdo = $this->pdo();

		$sql = <<<SQL
UPDATE $this->tablename set points=?, end=? where token=?
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$points, $this->timeStr($time), $token]);
	}


	/**
	 * Get all tries on a quiz by a User/Assignment/Quiz combination.
	 *
	 * Most recent is first returned value.
	 * @param User $user User we are checking for
	 * @param string $assignTag Assignment tag
	 * @param string $quizTag Quiz tag
	 * @return array of arrays with keys 'token', 'start', 'end', 'points'
	 */
    public function getTries(User $user, $assignTag, $quizTag) {
        $pdo = $this->pdo();

        $sql = <<<SQL
select token, start, end, points, maxpoints from $this->tablename
where memberid=? and assigntag=? and quiztag=?
order by start desc
SQL;

        $stmt = $pdo->prepare($sql);
        $stmt->execute([$user->member->id, $assignTag, $quizTag]);

        $ret = array();
        foreach($stmt as $row) {
            $ret[] = array('token' => $row['token'],
                'start' => strtotime($row['start']),
                'end' => $row['end'] === null ? null : strtotime($row['end']),
                'points' => $row['points'],
	            'maxpoints' => $row['maxpoints']);
        }

        return $ret;
    }

    /**
     * Get the best quiz performance for a user
     * @param User $user User we are checking for
     * @param string $assignTag Assignment tag
     * @param string $quizTag Quiz tag
     * @return array of arrays with keys 'token', 'start', 'end', 'points'
     */
	public function getBest(User $user, $assignTag, $quizTag) {
        $pdo = $this->pdo();

        $sql = <<<SQL
select token, start, end, points from $this->tablename
where memberid=? and assigntag=? and quiztag=?
order by points desc, end desc
limit 1
SQL;

        $stmt = $pdo->prepare($sql);
		$stmt->execute([$user->member->id, $assignTag, $quizTag]);
        if($stmt->rowCount() == 0) {
            return null;
        }

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);
        $ret = array('token' => $row['token'],
                'start' => strtotime($row['start']),
                'end' => $row['end'] === null ? null : strtotime($row['end']),
                'points' => $row['points']);
        return $ret;
    }

	/**
	 * Get the best quiz performance for a user for all tasks for an assignment
	 * @param User $user User we are checking for
	 * @param string $assignTag Assignment tag
	 * @return array of arrays with keys 'token', 'start', 'end', 'points'
	 */
	public function getAllBest(User $user, $assignTag) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select assigntag, quiztag, start, end, maxpoints, max(points) as points from $this->tablename
where memberid=? and assigntag=?
group by quiztag
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$user->member->id, $assignTag]);

		$ret = [];
		foreach($stmt->fetchAll(\PDO::FETCH_ASSOC) as $row) {
			$ret[$row['quiztag']] =
				[
				'start' => strtotime($row['start']),
				'end' => $row['end'] === null ? null : strtotime($row['end']),
				'points' => $row['points'],
				'maxpoints' => $row['maxpoints']
				];
		}
		return $ret;
	}

	/**
	 * Get the best score for all members of a section
	 * @param string $semester Semester id (like FS18)
	 * @param string $sectionId Section id (like 001)
	 * @param string $assignTag Assignment tag
	 * @return array of results
	 */
	public function getAllMembersBest($semester, $sectionId, $assignTag) {
		$pdo = $this->pdo;
		$members = new Members($this->config);

		$sql = <<<SQL
select member.id as memberid, quiztag, maxpoints, max(points) as points 
from $this->tablename quiztry
join $members->tablename member
on quiztry.memberid = member.id
where member.semester=? and member.section =? and assigntag=?
group by member.id, assigntag, quiztag
SQL;
		$stmt = $pdo->prepare($sql);
		$stmt->execute([$semester, $sectionId, $assignTag]);

		$ret = [];
		foreach($stmt->fetchAll(\PDO::FETCH_ASSOC) as $row) {
			if(!isset($ret[$row['memberid']])) {
				$ret[$row['memberid']] = [];
			}

			$ret[$row['memberid']][$row['quiztag']] =
				[
					'points' => $row['points'],
					'maxpoints' => $row['maxpoints']
				];
		}
		return $ret;
	}

    /**
     * Delete a quiz try by token.
     * @param string $token Token to delete
     * @return bool True if successful
     */
	public function delete($token) {
        $pdo = $this->pdo;

        $sql = <<<SQL
delete from $this->tablename
where token=?
SQL;

        $stmt = $pdo->prepare($sql);
        if($stmt->execute([$token]) !== TRUE) {
            return false;
        }

        return($stmt->rowCount() === 1);
    }


	/**
	 * Function to create an SQL create table command for the table
	 * @return string SQL
	 */
	public function createSQL() {
		$sql = <<<SQL
CREATE TABLE IF NOT EXISTS $this->tablename (
  token     char(32) NOT NULL, 
  memberid  int(11) NOT NULL, 
  assigntag varchar(30) NOT NULL, 
  quiztag   varchar(30) NOT NULL, 
  start     datetime NOT NULL, 
  `end`     datetime NULL, 
  points    int(11) NOT NULL, 
  maxpoints int(11) NOT NULL, 
  PRIMARY KEY (token), 
  INDEX (memberid), 
  INDEX (assigntag));

SQL;

		return $sql;
	}
	
}
