<?php
/**
 * @file
 * Table class for quiz sessions
 */

namespace CL\Quiz;

use CL\Users\User;
use CL\Users\Users;
use CL\Course\Members;

/**
 * Table class for quiz sessions
 *
 * This table keeps track of a quiz created when a user
 * opens the quiz page.
 */
class QuizSessions extends \CL\Tables\Table {

	/**
	 * Members constructor.
	 * @param \CL\Tables\Config $config Database configuration object
	 */
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, "quizsession");
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
  created   datetime NOT NULL, 
  state     char(1) NOT NULL, 
  question  int(11) NOT NULL, 
  `session` mediumtext NOT NULL, 
  PRIMARY KEY (token), 
  INDEX (memberid), 
  INDEX (assigntag));

SQL;

        return $sql;
    }

	/**
	 * Create a Quiz session for an assignment/quiz.
	 * @param User $user User we are creating for
	 * @param string $assignTag
	 * @param string $quizTag
	 * @param Quiz $session
	 * @param int $time
	 */
    public function create(User $user, $assignTag, $quizTag, QuizSession $session, $time) {
		$sql = <<<SQL
insert into $this->tablename(token, memberid, assigntag, quiztag, created, state, question, session)
values(?, ?, ?, ?, ?, ?, ?, ?)
SQL;

		$serialized = serialize($session->quiz);

	    $stmt = $this->pdo->prepare($sql);
	    $stmt->execute([$session->token, $user->member->id, $assignTag, $quizTag,
		    $this->timeStr($time), $session->state, $session->question, $serialized]);
    }

	/**
	 * Get a Quiz by ID
	 *
	 * The addition of the User parameter helps prevent someone spoofing
	 * a quiz try for someone other than themselves.
	 *
	 * @param User $user User we are getting this for
	 * @param string $token Quiz try token
	 * @return QuizSession|null
	 */
    public function get(User $user, $token) {
    	$sql = <<<SQL
select token, session, state, question from $this->tablename
where token=? and memberid=?
SQL;

	    $stmt = $this->pdo->prepare($sql);
	    $stmt->execute([$token, $user->member->id]);

	    if($stmt === false || $stmt->rowCount() < 1) {
	    	return null;
	    }

	    $row = $stmt->fetch(\PDO::FETCH_ASSOC);
	    $quiz = unserialize($row['session']);
	    return new QuizSession($quiz, $row['token'], $row['state'], $row['question']);
    }

	/**
	 * Update a session.
	 *
	 * This only updates the state and question number.
	 *
	 * @param QuizSession $session Session to update
	 * @return bool true if successful
	 */
    public function update(QuizSession $session) {
    	$sql = <<<SQL
update $this->tablename
set state=?, question=?
where token=?
SQL;

    	// echo $this->sub_sql($sql,[$session->state, $session->question, $session->token] );

	    $stmt = $this->pdo->prepare($sql);
	    $stmt->execute([$session->state, $session->question, $session->token]);

	    if($stmt === false || $stmt->rowCount() < 1) {
		    return false;
	    }

	    return true;
    }

	/**
	 * Clear any quiz sessions for a given user/assignment/quiz.
	 * @param User $user User we are clearing for
	 * @param string $assignTag
	 * @param string $quizTag
	 */
    public function clear(User $user, $assignTag, $quizTag) {
	    $sql = <<<SQL
delete from $this->tablename
where memberid=? and assigntag=? and quiztag=?
SQL;

	    $stmt = $this->pdo->prepare($sql);
	    $stmt->execute([$user->member->id, $assignTag, $quizTag]);
    }


}