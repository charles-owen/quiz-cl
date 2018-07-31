<?php
/** @file
 * Table class for the quiz answers
 */
 
namespace CL\Quiz;

use CL\Tables\Config;
use CL\Users\User;

/** The quizanswer table
 *
 * This class represents user answers to a quiz
 */
class QuizAnswers extends \CL\Tables\Table {

	/**
	 * Members constructor.
	 * @param Config $config Database configuration object
	 */
	public function __construct(Config $config) {
		parent::__construct($config, "quizanswer");
	}

	/**
	 * Create an quiz answer record.
	 * @param string $token Token for this quiz session
	 * @param int $num Question number
	 * @param int $questionTime When question was asked
	 * @param string $questionText Question text
	 * @param int $answerTime When question was answered
	 * @param string $studentAnswer
	 * @param string $rightAnswer
	 * @param int $points
	 */
    public function answer($token, $num, $questionTime, $questionText, $answerTime, $studentAnswer, $rightAnswer, $points)
    {
        $pdo = $this->pdo();

        $sql = <<<SQL
insert into $this->tablename(token, num, questiontime, question, answertime, studentanswer, rightanswer, points)
values(?, ?, ?, ?, ?, ?, ?, ?)
SQL;

        try {
	        $stmt = $pdo->prepare($sql);
	        return $stmt->execute([$token, $num, $this->timeStr($questionTime), $questionText,
		        $this->timeStr($answerTime), $studentAnswer, $rightAnswer, $points]);
        } catch(\PDOException $ex) {
        	return false;
        }
    }


    /**
     * Get answers point total for a quiz try (all answers for this try)
     * @param string $token The quiz session token
     * @return int point total
     */
    public function getPoints($token) {
        $pdo = $this->pdo();

        $sql = <<<SQL
select sum(points) as total from $this->tablename
where token=?
SQL;

        $stmt = $pdo->prepare($sql);
        $stmt->execute([$token]);
        $row = $stmt->fetch(\PDO::FETCH_ASSOC);
        if($row) {
            return $row['total'];
        }

        return 0;
    }

	/**
	 * Get all answers for a given quiz try
	 * @param string $token The quiz session token
	 * @return array
	 */
    public function getAnswers($token) {
    	$sql = <<<SQL
select * from $this->tablename
where token=?
order by num
SQL;

	    $stmt = $this->pdo->prepare($sql);
	    $stmt->execute([$token]);
	    $result = [];
	    foreach($stmt->fetchAll(\PDO::FETCH_ASSOC) as $row) {
	    	$row['questiontime'] = strtotime($row['questiontime']);
	    	$row['answertime'] = strtotime($row['answertime']);
	    	$result[] = $row;
	    }

	    return $result;
    }


	/**
	 * Function to create an SQL create table command for the table
	 * @return string SQL
	 */
	public function createSQL() {
		$sql = <<<SQL
CREATE TABLE IF NOT EXISTS $this->tablename (
  token         char(32) NOT NULL, 
  num           int(11) NOT NULL, 
  questiontime  datetime NOT NULL, 
  question      mediumtext NOT NULL, 
  answertime    datetime NOT NULL, 
  studentanswer mediumtext NOT NULL, 
  rightanswer   mediumtext NOT NULL, 
  points        int(11) NOT NULL, 
  PRIMARY KEY (token, 
  num), 
  INDEX (token));
SQL;

		return $sql;
	}
	
}
