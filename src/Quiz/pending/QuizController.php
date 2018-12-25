<?php
/**
 * @file
 * Controller for quiz execution
 */

namespace CL\Quiz;

/**
 * Controller for quiz execution
 */
class QuizController {
    /**
     * Constructor
     * @param \Course $course Course object
     * @param \User $user User object
     * @param $session $_SESSION
     */
    public function __construct(\Course $course, \User $user, &$session) {
        $this->course = $course;
        $this->user = $user;
        $this->session = &$session;
    }

    /**
     * Start up a quiz
     *
     * Creates the session object that keeps track of quiz progress.
     * @param Quiz $quiz The quiz we are administering
     */
    public function start(Quiz $quiz) {
        // Ensure no quiz is active. I don't allow any
        // user to do two quizzes at the same time on the
        // same browser.
        foreach(array_keys($this->session) as $key) {
            if(substr($key, 0, 5) === "quiz-") {
                unset($this->session[$key]);
            }
        }

        // Construct the quiz session name
        $sessionName = 'quiz-' .
            $quiz->get_assignment()->get_tag() . '-' .
            $quiz->get_tag();

        // Save a QuizSession object in the session
        $this->session[$sessionName] = new QuizSession($quiz, $sessionName);
        return $sessionName;
    }

    /**
     * Handle a POST
     * @param $post $_POST
	 * @param $time Time of the activity
     * @return string HTML
     */
    public function post($post, $time=null) {
        if($time === null) {
            $time = time();
        }

        // Ensure a quiz is active
        if( !isset($post['cmd']) || !isset($post['session']) ) {
            return "<p>Quiz access has failed. It is possible the PHP session has timed out.</p>";
        }

        $sessionname = strip_tags($post['session']);
        $cmd = strip_tags($post['cmd']);

        /*
         * Get the quiz
         */
        if( !isset($this->session[$sessionname]) ) {
            return "<p>Quiz access has failed. It is possible the PHP session has timed out.</p>";
        }

        $quizSession = $this->session[$sessionname];
        $quiz = $quizSession->get_quiz();

        $html = '';

        switch($cmd) {
            case 'start':
                $quizSession->start($this->user, $time);

                if($quiz->get_numquestions() == 0) {
                    $html .= $this->quiz_end($quizSession);
                } else {
                    $html .= $quizSession->present($this->user,$time);
                }
                break;

            case 'submit':
                $html .= $quizSession->submit($this->user, $post, $time);
                break;

			case 'timeout':
				$html .= $quizSession->timeout($this->user, $post);
				break;

            case 'next':
                $quizSession->next();

                if($quizSession->is_ended()) {
                    $html .= $this->quiz_end($quizSession, $time);
                } else {
                    $html .= $quizSession->present($this->user, $time);
                }
                break;

            case 'preview':
                if(!$this->user->is_staff()) {
                    break;
                }

                if(isset($post['num'])) {
                    $html .= $quiz->preview($this->user, $sessionname, $post['num']);
                } else if(isset($post['file'])) {
                    $html .= $quiz->preview_file($this->user, $sessionname, $post['file']);
                }
                break;

            case 'results':
				$quiz = $quizSession->get_quiz();
				$view = $quiz->create_view($this->user, $this->session);
                $html .= $view->results();
                break;
        }

        return $html;
    }

    private function quiz_end(QuizSession $quizSession, $time = null) {
		$quiz = $quizSession->get_quiz();
		$quizSession->end($this->user, $time);
		$view = $quiz->create_view($this->user, $this->session);
        return $view->finish();
    }

    private function quiz_expired(QuizSession $quizSession) {
        $view = new QuizView($this->course, $this->user, $quizSession->get_quiz(), $this->session);
        return $view->expired();
    }

    private $course;
    private $user;
    private $session;
}