<?php
/** @file
 * Class that represents a quiz
 */

/// Classes in the Quiz subsystem
namespace CL\Quiz;

use CL\Site\Site;
use CL\Course\Assignment;
use CL\Users\User;


/**
 * Representation of a Quiz
 *
 * @cond
 * @property array questions
 * @endcond
 */
class Quiz {
	/**
	 * Constructor
	 * @param string $assignTag Assignment this quiz is for
	 * @param string $quizTag A tag unique to this quiz in this assignment
	 * @param int $points Number of points assigned to this quiz
	 */
    public function __construct($assignTag, $quizTag, $points) {
        $this->assignTag = $assignTag;
        $this->tag = $quizTag;
		$this->points = $points;
    }

	/**
	 * Property get magic function
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * assignTag | string | The assignment tag
	 * fileDir | Directory that contains the quiz file (file questions are relative to this)
	 * length | int | Number of questions in this quiz
	 * lightning | int or null | Lightning quiz time in seconds or null if not timed
	 * points | int | Number of points for this quiz
	 * questions | array | The QuizQuestion object for all questions
	 * tag | string | The Quiz tag
	 *
	 * @param string $properties Name of property to get
	 * @return mixed Property value
	 */
	public function __get($properties) {
		switch($properties) {
			case 'assignTag':
				return $this->assignTag;

			case 'length':
				return count($this->questions);

			case 'lightning':
				return $this->lightning;

			case 'tag':
				return $this->tag;

			case 'points':
				return $this->points;

			case 'fileDir':
				return $this->fileDir();

			case 'questions':
				return $this->questions;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $properties .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}


	/**
	 * Property set magic function
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * lightning | int|null | Lightning quiz time in seconds or null if not timed
	 *
	 * @param string $properties Name of property to set
	 * @param mixed $value Value to set property to
	 */
    public function __set($properties, $value) {
		switch($properties) {
			case 'lightning':
				$this->lightning = $value;
				break;

			case 'fileDir':
				$this->fileDir = $value;
				break;

			case 'afterWide':
				$this->afterWide = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $properties .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}


    /** 
     * Add a question to the quiz.
     * \param $question The question object to add 
     */
    public function add_question(QuizQuestion $question)
    {
        $this->questions[] = $question;
        $question->quiz = $this;
        $question->num = count($this->questions);
        $question->prepare(false);
    }

    /** 
     * Create a new multiple choice question in this quiz
     * @return QuizQuestionMulti The question object reference
     */
    public function new_question_multi() {
        $question = new CL\Quiz\QuizQuestionMulti();
        $this->add_question($question);
        return $question;
    }


	/**
	 * Get a question object.
	 * @param $questionNum Question number (starting at 1)
	 * @return QuizQuestion object.
	 */
    public function getQuestion($questionNum) {
	    return $this->questions[$questionNum-1];
    }

	/**
	 * Get a question object based on the filename.
	 * This is used for question previewing.
	 * @param string $file File we are getting
	 * @return QuizQuestion object.
	 */
    public function getFileQuestion($file) {
    	return !empty($this->fileQuestions[$file]) ? $this->fileQuestions[$file] : null;
    }



	/** Handle a question timeout.
	 *
	 * This function is called by the controller when the quiz question times out.
	 */
    public function timeout(User $user, $sessionName, $quizTryId, $questionNum, $post, $time = null) {
		$html = <<<HTML
<p class="centerbox comp center">Question has timed out.</p>
<p>This is a lightning quiz. You have $this->lightning seconds to answer each question. 
If you do not answer it in time, the question times out, as this has done.</p>
HTML;

		// Only update tables if the quiz is active
		if(!$this->is_expired($user, $time)) {
			$course = $this->assignment->get_course();
			$quizAnswers = new CL\Quiz\QuizAnswers($course);

			//
			// Update the quizanswer table with this answer
			//
			$quizAnswers->answer($quizTryId, $questionNum,
				"TIMEOUT",
				"",
				0,
				$time);
		}

		$html .= $this->answer_rest($sessionName, $quizTryId, $questionNum);
		return $html;
	}


    /**
     * Get all tris for this user/step quiz
     */
    public function get_tries(User $user) {
        $course = $this->assignment->get_course();
        $quizTries = new QuizTries($course);

        return $quizTries->get_tries($user, $this->assignment, $this->tag);
    }

    /**
     * Get the best quiz score.
     *
     * Obtains the best quiz score for this particular
     * step quiz.
     * @returns int Best score or null if no scores.
     */
    public function get_best(User $user) {
        $course = $this->assignment->get_course();
        $quizTries = new QuizTries($course);

        $best = $quizTries->get_best($user, $this->assignment, $this->tag);
        if($best === null) {
            return null;
        }

        return $best['correct'];
    }


	/**
	 * Factory function to create a view appropriate for this quiz
	 * @param Site $site the Site object
	 * @return QuizView object
	 */
	public function createView(Site $site) {
		return new QuizView($site, $this);
	}

	/**
	 * Add a single question from a file
	 * @param string $file File name
	 * @param string $dir Optional directory that file is relative to
	 * @return QuizQuestion
	 */
	public function file_question($file, $dir=null) {
		$question = $this->fileLoadQuestion($file, $dir);
		$this->add_question($question);
		return $question;
	}


	private function fileLoadQuestion($file, $dir=null) {
		$dir = $dir !== null ? $dir : $this->fileDir();

		$path = $dir . '/' . $file;
		$question = require($path);
		$question->file = $file;
		$question->files = [$file];
		$this->fileQuestions[$file] = $question;
		return $question;
	}

	/**
	 * Add one or more questions randomly selected from a list of files
	 * The first parameter is an integer that is how many questions to generate.
	 * This is followed by a list of file options.
	 */
	public function file_question_random() {
		// Must be at least 2 arguments (num questions and one file)
		if(func_num_args() < 2) {
			return;
		}

		$cnt = func_get_arg(0);
		$files = array();
		$files1 = array();	// Copy we will not shuffle
		for($i=1; $i<func_num_args(); $i++) {
			$files[] = func_get_arg($i);
			$files1[] = func_get_arg($i);
		}

		/*
		 * If we have fewer files specified than the
		 * number of questions, repeat what we have until
		 * we have enough.
		 */
		$ndx = 0;
		while(count($files) < $cnt) {
			$files[] = $files[$ndx];
			$files1[] = $files[$ndx];
			$ndx++;
		}

		shuffle($files);

		for($i=0; $i<$cnt; $i++) {
			$file = $files[$i];
			$question = $this->fileLoadQuestion($file);
			$question->files = $files1;
			$this->add_question($question);
		}

		// Ensure any remaining files exist in $fileQuestions array
		for( ; $i<count($files); $i++) {
			$file = $files[$i];
			if(!isset($this->fileQuestions[$file])) {
				$question = $this->fileLoadQuestion($file);
				$question->quiz = $this;
				$question->prepare(false);
			}
		}
	}


	/**
	 * Get the directory for the file that called the function that
	 * called this function. This is used to get the directory of
	 * the file where the quiz question is being created.
	 * @return string directory path
	 */
    public function fileDir() {
    	if($this->fileDir !== null) {
    		return $this->fileDir;
	    }

	    return dirname(debug_backtrace(1)[1]['file']);
    }

    protected $assignTag;           ///< Assignment this quiz is a part of
	protected $tag;	                ///< Tag for this quiz, can be the same as the assignment section
	protected $questions =[];	    ///< The quiz questions in order
    protected $completeMsg = null;  ///< Optional message to display on quiz completion
	protected $points;		        ///< Points for this quiz
	private   $lightning = null;	// If this is a lightning quiz, set to number of seconds
	private   $fileDir = null;      // File directory for loaded quiz files
	private   $fileQuestions = [];  // Mapping from a filename to a question
}
