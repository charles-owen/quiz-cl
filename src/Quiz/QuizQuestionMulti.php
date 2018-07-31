<?php
/** @file
 * Class that describes a single multiple choice step quiz question 
 */

namespace CL\Quiz;

use CL\Site\Site;
use CL\Users\User;

/**
 * Describes a single multiple choice quiz question
 */
class QuizQuestionMulti extends QuizQuestion {
	/** Constructor */
	public function __construct() {
		parent::__construct();
	}
	
	/** Magic method to set parameters for the question
	 *
	 * This version accepts good and bad. See also the base class
	 * (QuizQuestion::__set()) version.
	 *
	 * @param string $property Name of private member to set
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'good':
				$this->answers[] = array($value, true);
				break;
				
			case 'bad':
				$this->answers[] = array($value, false);
				break;
				
			default:
				parent::__set($property, $value);
				break;
		}
	}
	
	/** Add a good answer
	 * @param $good The good answer */
	public function good($good) { $this->answers[] = array($good, true); }
	
	/** Add a bad answer
	 * @param $bad The bad answer */
	public function bad($bad) { $this->answers[] = array($bad, false); }
	
	/** Convert an answer index into the letter for the answer 
	 * @param $index Answer index starting at 0
	 * @returns Associated letter answer */
	public static function to_option($index) {
		return chr(ord('A') + $index);
	}
	
	/**
	 * Present the question to the user
	 * @param Site $site Site object
	 * @param User $user User we are presenting the question for
	 * @param bool $preview TRUE if staff preview mode
	 * @returns string HTML for the quiz question
	 */
	public function present(Site $site, User $user, $preview=false) {
		$html = parent::present($site, $user, $preview);

		$root = $site->root;

		/*
		 * The question
		 */
		$html .= $this->text . '<div class="cl-multi">';

		/*
		 * Possible answers
		 */
		$num = 0;
		foreach($this->answers as $answer) {
			$option = QuizQuestionMulti::to_option($num);
			$html .= <<<OPTION
<p><label>$option: <input name="cl-answer" value="$num" type="radio"> $answer[0]
OPTION;

			if($preview && $answer[1]) {
				$html .= " <img src=\"$root/vendor/cl/site/img/checkmenu.png\" width=\"24\" height=\"25\" alt=\"Good Answer\"/>";
			}
			$html .= '</label></p>';
			$num++;
		}

		$html .= '</div>';

		// Comment preview
		if($preview && ($this->comment != null)) {
			$html .= "<hr /><p>Comment:</p>";
			$html .= $this->comment;
		}

		return $html;
	}

	/**
	 * Prepare question for presentation
	 */
	public function prepare() {
		parent::prepare();
		shuffle($this->answers);
	}




	/**
	 * Handle a submit of the question answer from the POST page
	 * @returns string HTML for the question
	 */
    public function submit(Site $site, User $user, $post) {
        $choice = $post['cl-answer'];
        $option = QuizQuestionMulti::to_option($choice);

    	$html = $this->text;

        $answergiven = $this->answers[$choice][0];
		$answercorrect = "";
        $good = $this->answers[$choice][1];
        $html .= "<p>You said: $option: $answergiven<br />";

		$this->correct = $good ? $this->points : 0;
        $this->studentanswer = $answergiven;

    	// Did they get it right?
        if($good) {
        	$html .= "That is correct!</p>";
        } else {
        	$html .= "That is incorrect!</p>";

            // Collect array of correct answers
            $correct = array();
            for($i=0;  $i<count($this->answers); $i++) {
            	$answer = $this->answers[$i];
                if($answer[1]) {
                	$correct[] = array($i, $answer[0]);
                }
            }

            if(count($correct) == 1) {
            	$option1 = QuizQuestionMulti::to_option($correct[0][0]);
                $answercorrect = $correct[0][1];
            	$html .= "<p>The correct answer is: $option1: $answercorrect</p>";
            } else {
            	$html .= "<p>The possible correct answers are:<br />";
                foreach($correct as $c) {
                	$option1 = QuizQuestionMulti::to_option($c[0]);
                	$answerright = $c[1];
					$answercorrect .= $answerright . '; ';
            		$html .= "$option1: $answerright<br />";
                }

                $html .= '</p>';
            }

           	if($this->comment != null) {
             	$html .= "<div class=\"centerbox primary\">$this->comment</div>";
            }
        }

		$this->rightanswer = $answercorrect;
		return $html;
   }


	/**
	 * Return answers for the question when viewed in preview mode.
	 * @return array of answer options
	 */
	public function previewerAnswers(Site $site) {
		$answers = [];
		$num = 0;
		foreach($this->answers as $answer) {
			if($answer[1]) {
				$option = QuizQuestionMulti::to_option($num);
				$root = $site->root;
				$answers[] = "<p>$option: " . $answer[0] . " <img src=\"$root/vendor/cl/site/img/checkmenu.png\"></p>";
			}

			$num++;
		}
		return $answers;
	}
	
	private $answers = array();	// Answers
}
