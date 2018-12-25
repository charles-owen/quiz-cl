<?php
/** @file
 * Class that describes a quiz question
 */
 
namespace CL\Quiz;

use CL\Site\Site;
use CL\Users\User;
 
/** Describes a single quiz question 
 * 
 * This is a base class for quiz questions
 *
 * @cond
 * @property string correct
 * @property string text
 * @property string comment
 * @endcond
 */
abstract class QuizQuestion {
	/** Constructor */
	public function __construct() {
	}

	/**
	 * Property get magic method
	 * @param string $key Property name
	 * @return mixed
	 */
	public function __get($key) {
		switch($key) {
			case 'comment':
				return $this->comment;

			/* Total correct points for this question */
			case 'correct':
				return $this->correct;

			case 'display_correct':
				return $this->display_correct;

			case 'file':
				return $this->file;

			case 'files':
				return $this->files;

			case 'num':
				return $this->num;

			case 'text':
				return $this->text;

			case 'quiz':
				return $this->quiz;

			// Get the points this question is worth
			case 'points':
				return $this->points;

			/* The answer supplied by the student */
			case 'student_answer':
				return $this->studentanswer;

			/* The expected correct answer */
			case 'right_answer':
				return $this->rightanswer;

			case 'mustProvideMessage':
				return $this->mustProvideMessage;

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
	 * Property set magic method
	 * @param string $key Property name
	 * @param string $value Value to set
	 */
	public function __set($key, $value) {
		switch($key) {
			case 'text':
				$this->text = $value;
				break;

			/*
			 * Comment associated with question.
			 *
			 * Comments are only presented when the user gets the
			 * answer wrong.
			 */
			case 'comment':
				$this->comment = $value;
				break;

			case 'file':
				$this->file = $value;
				break;

			/** An array of the files this question came from
			 *
			 * This is used by the question preview system and will be
			 * set to a list of all of the files that may have provided
			 * this question, since it may have been selected at random
			 * from those files */
			case 'files':
				$this->files = $value;
				break;

			case 'num':
				$this->num = $value;
				break;

			case 'points':
				$this->points = $value;
				break;

			case 'quiz':
				$this->quiz = $value;
				break;

			case 'display_correct':
				$this->display_correct = $value;
				break;

			case 'mustProvideMessage':
				$this->mustProvideMessage = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	
	/** Present the question for a user.
	 * 
	 * Override to actually present a question
	 * @param Site $site Site object
	 * @param User $user User taking the quiz
	 * @return string HTML
	 */
	public function present(Site $site, User $user) {
		return "";
	}

	/**
	 * Present content after the Quiz box. This is used to
	 * add in things like the Cirsim IDE or the Playground
	 * @param Site $site
	 * @param User $user
	 * @return string
	 */
	public function presentAfter(Site $site, User $user) {
		return '';
	}

	/** Prepare a question for presentation
	 *
	 * This function is a good place to do things
	 * like shuffling answers. Override in a derived
	 * class for a specific question type.
	 */
	public function prepare() {
	}

	/**
	 * Return answers for the question when viewed in preview mode.
	 * @property Site $site The Site object
	 * @return array of answer options
	 */
	public function previewerAnswers(Site $site) {
		return [];
	}

    /** Handle a submit of the question answer from the POST page
     * @return string HTML for the question */
    public function submit(Site $site, User $user, $post) {
        return '';
    }

	/**
	 * Generate data to send to the client for this question
	 * @param Site $site Site object
	 * @param User $user Current user
	 * @param int $time Current time
	 * @param bool $preview If true, this is a preview view
	 * @return array
	 */
    public function data(Site $site, User $user, $time, $preview = false) {
    	$html = $this->present($site, $user);
    	$after = $this->presentAfter($site, $user);

	    $data = [
		    'question'=>$html,
		    'time'=>$time,
		    'after'=>$after];

	    if($preview) {
	    	$data['answers'] = $this->previewerAnswers($site);
	    	$data['comment'] = $this->comment;
	    }

	    if($this->mustProvideMessage !== null) {
	    	$data['mustProvideMessage'] = $this->mustProvideMessage;
	    }

	    return $data;
    }
	
	protected $text = null;		///< Text of the question
	protected $comment = null;	///< Optional comment to display when they get it wrong

	protected $quiz = null;		///< Quiz this question is a part of
	protected $num = 0;			///< Question number
	
	protected $correct = null;	        ///< Total number of correct points
	protected $studentanswer = null;	///< The student supplied answer
	protected $rightanswer = null;		///< The correct answer
	protected $points = 1;		        ///< Total points for a correct answer
	protected $file = null;		        ///< File for a loaded quiz question
	protected $display_correct = false;	///< Display correct answer?

	private $mustProvideMessage = null;

	private     $files = null;	///< Optional array of files this question could come from
}
