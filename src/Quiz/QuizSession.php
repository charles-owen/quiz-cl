<?php
/**
 * @file
 * Object stored in the quizsession table. Represents an active quiz session for a user.
 */

namespace CL\Quiz;

use CL\Site\Util\TokenMaker;
use CL\Site\Site;

/**
 * Object stored in the quizsession table. Represents an active quiz session for a user.
 */
class QuizSession {
	/// State: Before we start the quiz
	const PRESTART = 'P';

	/// State: Viewing a question
	const QUESTION = 'Q';

	/// State: Viewing a question answer
	const ANSWER = 'A';

	/// State: Quiz is done!
	const DONE = 'D';

	/**
	 * QuizSession constructor.
	 * @param Quiz $quiz The quiz to add to the session
	 * @param string $token The token to use
	 * @param string $state Current quiz state
	 * @param int $question Current question (0 for none)
	 */
	public function __construct(Quiz $quiz, $token=null, $state=QuizSession::PRESTART, $question=0) {
		$this->token = $token !== null ? $token : TokenMaker::make(32);
		$this->quiz = $quiz;
		$this->state = $state;
		$this->question = +$question;
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * question | int | Current question (0 if none)
	 * state | char | Quiz current state
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value)
	{
		switch ($property) {
			case 'question':
				$this->question = +$value;
				break;

			case 'state':
				$this->state = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	/**
	 * Get standard properties for a quiz session.
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * question | int | Current question (0 if none)
	 * quiz | Quiz | The Quiz object.
	 * state | char | Quiz current state
	 * token | string | Token representing the quiz session
	 *
	 * @param string $key Property name
	 * @return mixed Property value
	 */
	public function __get($key) {
		switch($key) {
			case 'token':
				return $this->token;

			case 'quiz':
				return $this->quiz;

			case 'question':
				return $this->question;

			case 'state':
				return $this->state;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}


	/**
	 * Persist the quiz by serializing it to a row in the quizsession table.
	 *
	 * Ensures no other session exists for this particular quiz!
	 *
	 * @param Site $site Site object
	 * @param int $time Current time
	 */
	public function persist(Site $site, $time) {
		$sessions = new QuizSessions($site->db);
		$user = $site->users->user;
		$quiz = $this->quiz;

		// Ensure no other active session for this quiz
		$sessions->clear($user, $quiz->assignTag, $quiz->tag);

		// Persist
		$sessions->create($user, $quiz->assignTag, $quiz->tag, $this, $time);
	}

	private $state;
	private $question;
	private $quiz;
	private $token;
}