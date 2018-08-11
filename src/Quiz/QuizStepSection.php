<?php
/**
 * @file
 * Step sections that present a quiz.
 */

namespace CL\Quiz;

use CL\Step\Step;
use CL\Step\StepSection;

/**
 * Step sections that present a quiz.
 */
class QuizStepSection extends StepSection {
	const QUIZ = 'Q';		///< Indicates this section is a quiz

	/**
	 * QuizStepSection constructor.
	 * @param Step $step Step this is a part of
	 * @param string $tag Tag for the step section
	 * @param string $name Name for the step section
	 * @param string $points Total quiz points
	 */
	public function __construct(Step $step, $tag, $name, $points) {
		parent::__construct($step, $tag, $name, QuizStepSection::QUIZ);

		$this->quiz = new Quiz($this->step->tag, $this->tag, $points);
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'points':
				return $this->quiz->points;

			default:
				return parent::__get($property);
		}
	}

	/**
	 * @page appearance-options
	 *
	 * @section quiz-image-tags Quiz image tags
	 *
	 * tag | usage
	 * --- | -----
	 * quizicon | Icon for quiz pages on step main pages
	 */

	/**
	 * Get the icon used by this page
	 * @return array with keys 'tag', 'file', 'alt'
	 */
	public function icon() {
		return ['tag'=>'quizicon', 'file'=>'/vendor/cl/quiz/img/quizicon.png', 'alt'=>'Quiz'];
	}

	/**
	 * Create any custom auxiliary view object for this section
	 * @return ViewAux object or null if none required
	 */
	public function viewAux() {
		$this->quiz->fileDir = $this->step->dir;
		return $this->quiz->createView($this->step->site);
	}

	/**
	 * Custom properties for the step section that are
	 * added to the view to make it easier to config
	 *
	 * This implements the ability to define a
	 * quiz function this way:
	 * @code
	 * $view->quiz = function(StepQuiz $quiz) {}
	 * @endcode
	 *
	 * @param string $property Name of the custom property
	 * @param mixed $value Value to set
	 * @return bool true if this property exists.
	 */
	public function property($property, $value) {
		switch($property) {
			case 'quiz':
				$this->set_quiz($value);
				return true;
		}

		return false;
	}

	/** Set the quiz function for this page
	 * @param $function Quiz definition function */
	public function set_quiz($function) {
        if(is_callable($function)) {
			// We have a quiz, use the function to define it
			$function($this->quiz);
        }
	}

	/**
	 * Present page on the Step single-page view.
	 *
	 * @return string HTML
	 */
	public function singlePagePresent() {
		$name = $this->name;
		return <<<HTML
<h2>Quiz: $name</h2>
<p class="centerbox comp center">Quizzes are not available in single page view.</p>
HTML;
	}

	private $quiz = null;
}