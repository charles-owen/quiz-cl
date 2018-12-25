<?php
/** @file
 * View class implementing a view of a Quiz
 */

namespace CL\Quiz;

/** View class implementing a view of a Quiz
 *
 * This class is a view for quizzes. It is used
 * for displaying the splash screen and the quiz results
 */
class QuizView {
    /**
     * Constructor
     * @param \Course $course
     * @param \User $user
     * @param Quiz $quiz The actual loaded quiz
     * @param $session $_SESSION
     */
	public function __construct(\Course $course, \User $user, Quiz $quiz, &$session) {
        $this->user = $user;
        $this->course = $course;
		$this->quiz = $quiz;

        // Instantiate a controller to start up the quiz when we view it
        $controller = new QuizController($course, $user, $session);
        $this->sessionname = $controller->start($quiz);
	}
	

	
	/**
     * Display the quiz, starting usually with the splash page
     * @param $resultsLink A link for a results page
     * @param $time Time to use or null to use time()
     */
	public function present($resultsLink, $time = null) {
        if($time === null) {
            $time = time();
        }

        $libroot = $this->course->get_libroot();

		$html = <<<SPLASH
<script>
quiz = new Quiz.View('$this->sessionname');
var question = null;
var present_post = function() {}
</script>
SPLASH;

		$html .= <<<HTML
<figure class="right noshadow nomobile"><img src="$libroot/images/quizright.png" alt="Quiz right side icon"></figure>
<div id="quiz">
HTML;
	
		$due = $this->quiz->get_assignment()->get_due($this->user);

		if($this->user->is_guest()) {
			$html .= <<<HTML
<p class="centerbox comp">Quizzes are only available to registered students in the course.</p>
HTML;
		} else if(isset($_REQUEST['results'])) {
			$html .= $this->results();
		} else {
			if($due !== null && $time >= $due) {
				/*
				 * Quiz has expired
				 */
				$html .= $this->expired($resultsLink);
			} else {
				/*
				 * Active quiz: display the splash screen
				 */
				$html .= <<<SPLASH
<p>You can take a quiz as many times as you like up until the assignment closing date and 
time. The system will retain your highest score. Note that  questions are often randomized 
in various ways and may not appear the same each time.</p>

<p>Do not use the back or forward buttons or reload a page during the quiz. Doing so will 
exit the quiz without saving the score.</p>
SPLASH;

			if($this->quiz->lightning !== null) {
				$seconds = $this->quiz->lightning;

				$html .= <<<SPLASH
<p class="centerbox seconda center">This is a lightning quiz. You have $seconds seconds to answer each question.</p>
SPLASH;
			} else {
				$html .= <<<SPLASH
<p>There is no time limit, but I do not know how long PHP keeps a session open, 
so if the server times out, well so be it.</p>
SPLASH;
			}

			$html .= <<<SPLASH
<p class="centerbox comp">The Online Quizzes are an individual 
activity. Please do not work with or discuss them with other students. </p>
<p>Numerical questions will be tested to an indicated tolerance. If you are within that amount, the 
question will be counted as correct. </p>
SPLASH;
			}
		}

		$html .= <<<HTML
<p>When ready, <a id="proceed" href="#">click to proceed to the quiz.</a> You can also
<a href="$resultsLink">jump directly to your quiz results.</a></p>
HTML;

		$html .= '</div>';  // End of #quiz div

		$html .= $this->before_preview();
		
		if($this->user->is_staff() ) {
			$html .= <<<PREVIEW
<h2>Staff Question Previews</h2>
<p>These links allow you to preview quiz questions. If the question is randomly selected
from multiple files, the files appear below the question. <span class="smallred">This part of the page appears for
staff members only.</span></p>	
PREVIEW;
			$html .= $this->quiz->preview_links();
		}
		
		return $html;
	}

	/**
	 * Called after the quiz box and before the quiz previews.
	 *
	 * Override in derived class to support custom page content
	 * @return string HTML
	 */
	public function before_preview() {
		return '';
	}
	
	/** The expired quiz message */
	public function expired() {
		$assignment = $this->quiz->get_assignment();
		$due = $assignment->get_due(); //$this->user);
        $date = date("F j, Y", $due);
		$time = date("g:ia", $due);
		
		$html = <<<TIMEOUT
<p class="centerbox comp">The quiz has expired and can no longer be taken. Quizzes expire at the time
the assignment is due. In this case, that is $date at $time. </a></p>
<p>You can proceed through the quiz for practice purposes, but new grades and
submissions will not be possible.</p>
TIMEOUT;

        $html .= $this->results();
		return $html;
	}
	
	/** Indicate that the quiz is complete. */
	public function finish() {
        $html = '';
        if($this->quiz->get_complete_msg() !== null) {
            $html .= $this->quiz->get_complete_msg();
        }
		
		$html .= $this->results();
		return $html;
	}
	
	/** Display the quiz results
	 *
	 * This indicates if the user has taken the quiz. If so, it
	 * indicates the top score and lists all times they have taken
	 * the quiz in the past. 
	 * @returns string HTML */
    public function results() {
		$best = $this->quiz->get_best($this->user);
		$total = $this->quiz->get_numpoints();

        $tries = $this->quiz->get_tries($this->user);

        $html = "";
        if($best === null) {
			$html .= '<p>You have not completed the quiz, yet, so you do not yet have a score.</p>';
			if(count($tries) == 0) {
			    return $html;
            };
		} else {
			$html .=  <<<MSG
<p>Your current best score for this quiz is $best/$total. The system retains your best
result as your grade for a quiz. Only a finished quiz is counted.</p>
MSG;
		}

		$html .=  <<<TABLE
<table class="results">
<caption>Results for Quiz</caption>
<tr>
	<th>Date Taken</th>
	<th>Finished?</th>
	<th>Results</th>
</tr>
TABLE;
		$root = $this->course->get_root();
		

		foreach($tries as $row) {
			$correct = $row['correct'];
			$start = date('m-d-Y g:i:sa', $row['start']);
			
			$done = $row['end'] != null ? '<img alt="Check mark" height="25" src="' . $root . '/lib/images/checkmenu.png" width="24">' : '&nbsp;';
			
			$html .=  <<<ROW
<tr><td class="results">$start</td><td class="results">$done</td><td class="results">$correct/$total</td></tr>	
ROW;
		}

		$html .=  <<<FINISH
		</table>
<p>A quiz is counted as finished if the Finish Quiz button is pressed on the last question in the quiz.</p>
FINISH;
		return $html;
    }

	/**
	 * Get the quiz for this view
	 * @return Quiz quiz associated with this view
	 */
	public function get_quiz() {
		return $this->quiz;
	}

    private $course;
    private $user;  // User for this quiz
	private $quiz;	// Quiz this is a view of
    private $sessionname;   // The quiz session name
}
