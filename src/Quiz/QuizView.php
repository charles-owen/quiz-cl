<?php
/** @file
 * View class implementing a view of a Quiz
 */

namespace CL\Quiz;

use CL\Site\Site;
use CL\Site\View;
use CL\Course\Member;


/** View class implementing a view of a Quiz
 *
 * This class is a view for quizzes. It is used
 * for providing the initial quiz screen. This class
 * can be overridden for custom quizzes.
 */
class QuizView extends \CL\Site\ViewAux {
	/**
	 * QuizView constructor.
	 * @param Site $site Site object
	 * @param Quiz $quiz Quiz object
	 * @param null $time Current time
	 */
	public function __construct(Site $site, Quiz $quiz, $time=null) {
		$this->time = $time !== null ? $time : time();
		$this->site = $site;
		$this->course = $site->course;
		$this->user = $site->users->user;
		$this->quiz = $quiz;

		if(!$this->user->guest) {
			$section = $this->course->get_section_for($this->user);
			$this->assignment = $section->get_assignment($quiz->assignTag);
            $this->assignment->load();
		} else {
			$this->assignment = null;
		}

		if($quiz->tries === 0) {
		    $tries = " You can take a quiz as many times as you like up until the assignment closing date and time. The system will retain 
your highest score. Questions are often randomized in various ways and may not appear the same each time.";
        } else if($quiz->tries === 1) {
            $tries = " You can take this quiz one time and one time only.";
        } else {
            $tries = " You can take this quiz up to $quiz->tries times up until the assignment closing date and time. The system will retain 
your highest score. Questions are often randomized in various ways and may not appear the same each time.";
        }

		// Default splash
		$splash = <<<HTML
<p>This is an online quiz.$tries </p>

<p>Do not use the back or forward buttons or reload a page during the quiz. 
Doing so will exit the quiz without saving the score.</p>
HTML;


		$this->splash = $splash;

		$this->decorApply($this->site, 'quiz.decor.php');
	}

	/**
	 * Called when this auxiliary view is installed in a view
	 * @param View $view View we are installing into
	 */
	protected function install(View $view) {
		$view->addJS('quiz');
	}

	/**
	 * Property get magic method
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'splash':
				return $this->splash;

			case 'root':
				return $this->site->root;

			default:
				return parent::__get($property);
		}
	}

	/**
	 * Property set magic method
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'splash':
				$this->splash = $value;
				break;

			default:
				parent::__set($property, $value);
				break;
		}
	}

	/**
	 * Present the quiz HTML
	 * @return string HTML
	 */
	public function present() {
		if($this->assignment === null) {
			return <<<HTML
<p class="centerbox comp">Quizzes are only available to registered students in the course.</p>
HTML;
		}

		// Create a quiz session
		$session = new QuizSession($this->quiz);
		$session->persist($this->site, $this->time);

        $quizTries = new QuizTries($this->site->db);
        $tries = $quizTries->getTries($this->user, $this->quiz->assignTag, $this->quiz->tag);
        $finished = 0;
        foreach($tries as $try) {
            if($try['end'] !== null) {
                $finished++;
            }
        }

        $data = [
			'token'=>$session->token,
			'lightning'=>$this->quiz->lightning,
			'course'=>$this->course->name,
			'splash'=>$this->splash,
			'length'=>$this->quiz->length,
			'assigntag'=>$this->quiz->assignTag,
			'quiztag'=>$this->quiz->tag,
			'points'=>$this->quiz->points,
            'allowed-tries'=>$this->quiz->tries,
            'num-tries'=>count($tries),
            'num-finished'=>$finished
		];

		if($this->user->atLeast(Member::GRADER)) {
			// Staff get the files for each question in support of previewing
			$questions = [];
			$quiz = $this->quiz;
			for($num=0; $num<count($quiz->questions); $num++) {
				$question = $quiz->questions[$num];

				$files = $question->files;
				if($files != null) {
					// Are the files for this question identical to those for the
					// next question. If so, we can skip listing them until that
					// question.
					if($num < count($quiz->questions) - 1) {
						$nextQuestion = $quiz->questions[$num + 1];
						$nextFiles = $nextQuestion->files;
						if($files === $nextFiles) {
							$questions[] = [];
							continue;
						}
					}

					$questions[] = $files;
				}
			}

			$data['preview'] = $questions;
		}

		if(!$this->user->is_staff()) {
			// Is this quiz open for submission?
			if($this->assignment->after_due($this->user, $this->time)) {
				$data['expired'] = true;
			}

			// Is this quiz open for submission?
			if(!$this->assignment->is_open($this->user, $this->time)) {
				$data['closed'] = true;
			}
		}

		$json = htmlspecialchars(json_encode($data), ENT_NOQUOTES);

		$after = $this->presentAfter();

		$html = <<<HTML
<div class="cl-quiz-install">$json</div>$after
HTML;

		return $html;
	}

	/**
	 * Present content that goes after the quiz. This is overridden in custom
	 * views when extra content such as Cirsim belongs at the bottom of the page.
	 * @return string HTML
	 */
	public function presentAfter() {
		return '';
	}

	private $time;      // Time we instantiate this object
	private $site;      // Site object
	private $course;    // Course object
	private $user;      // Active user
	private $quiz;      // Quiz this is a view of
	private $assignment; // Assignment this quiz is for
	private $splash;    // The quiz splash screen
}
