<?php
/** @file
 * Class that describes a question expecting an single value answer
 */

namespace CL\Quiz;

use CL\Site\Site;
use CL\Users\User;

/**
 * Describes a question expecting an single value answer
 *
 * This works for integer, string, case-insensitive string, etc.
 */
class QuizQuestionValue extends QuizQuestion {
	const Integer = 0;			///< Questions with integer answer
	const String = 1;			///< Questions with string answer
	const StringCaseSensitive = 2;	///< Questions with case-sensitive string answer
	const Float = 3;			///< Questions with floating point answers
	const Cpp = 4;				///< Line of C++ code
	const UML = 5;				///< UML attributes and operations
	const StringNoSpaces = 6;	///< String with spaces removed
	const CanonicalSumOfProducts = 7;		///< Canonical SOP in A,B,C
	const RegExp = 8;			///< Regular Expression
	const Hex = 9;				///< Hexadecimal answers
	
	/** Constructor 
	 * @param int $type The answer type */
	public function __construct($type = QuizQuestionValue::Integer) {
		parent::__construct();
		
		$this->type = $type;
		$this->display_correct = true;
	}
	
	/** Magic method to set parameters for the question
	 *
	 * This version accepts answer. See also the base class
	 * (QuizQuestion::__set()) version.
	 *
	 * answer - An expected answer (multiple can be supplied)
	 * displayed_answer - Optional answers to display
	 * display_correct - If false, answers are not displayed.
	 *
	 * @param string $property Name of private member to set
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'answer':
				$this->answer[] = htmlentities($value);
				break;

			case 'displayed_answer':
				$this->displayed_answer[] = htmlentities($value);
				break;

			case 'tolerance':
				$this->tolerance = $value;
				break;

			default:
				parent::__set($property, $value);
				break;
		}
	}


	/**
	 * Present the question to the user
	 * @param Site $site Site object
	 * @param User $user User we are presenting the question for
	 * @return string HTML for the quiz question
	 */
	public function present(Site $site, User $user) {
		$html = parent::present($site, $user);

		/*
		 * The question
		 */
		$html .= $this->text;

		$html .= <<<END
<p><input type="text" class="cl-answer-required" name="cl-answer"></p>
END;

		if($this->type === self::Float) {
			$html .= <<<END
<p class="cl-quiz-answer-note">Your answer must be within $this->tolerance</p>
END;
		}

		return $html;
	}



	/**
	 * Handle a submit of the question answer from the POST page
	 * @param Site $site The Site object
	 * @param User $user The User object
	 * @param $post $_POST
	 * @return string HTML for the question
	 */
	public function submit(Site $site, User $user, $post) {
    	$answer = trim(htmlentities($post['cl-answer']));

    	$html = $this->text;
		$good = false;
		$extra = '';

		// We allow multiple good answers, check
		// them all until we find a right answer
		foreach($this->answer as $goodanswer) {
			switch($this->type) {
				case self::Integer:
					$good = $answer == $goodanswer;
					break;

				case self::Float:
					$good = (abs($answer - $goodanswer) < $this->tolerance);
					break;

				case self::Hex:
					$answer1 = hexdec(str_replace("0x", "", $answer));
					$good = $answer1 == $goodanswer;
					break;

				case self::StringCaseSensitive:
					$good = ($answer === $goodanswer);
					break;

				case self::String:
					$good = (strcasecmp($answer, $goodanswer) == 0);
					break;

				case self::StringNoSpaces:
					$good = (strcasecmp(str_replace(' ', '', $answer),
							str_replace(' ', '', $goodanswer)) == 0);
					break;

				case self::Cpp:
					$check = new CheckCpp();
					$good = $check->check($goodanswer, $answer);
					break;

				case self::UML:
					$check = new CheckUML();
					$good = $check->check($goodanswer, $answer);
					break;

				case self::CanonicalSumOfProducts:
					$check = new \CL\Logic\CheckSOP("A", "B", "C");
					$good = $check->check($goodanswer, $answer);
					if(!$good) {
						$extra = "<p>Checker indicated: " . $check->get_msg() . "</p>";
					}
					break;

				case self::RegExp:
					$good = preg_match($goodanswer, $answer) == 1;
					break;
			}

			if($good) {
				break;
			}
		}

        $html .= "<p>You said: $answer<br />";

		$this->correct = $good ? $this->points : 0;
        $this->studentanswer = $answer;

    	// Did they get it right?
        if($good) {
        	$html .= "That is correct!</p>";
			$goodanswer = "";
        } else {
			$html .= "That is incorrect!</p>";
			if($this->display_correct) {
				$answers = count($this->displayed_answer) > 0 ?
					$this->displayed_answer : $this->answer;

				$goodanswer = $answers[0];
				if(count($answers) > 1) {
					for($i=1; $i<count($this->answer); $i++) {
						$goodanswer .= " or " . $answers[$i];
					}
				}

				$html .= $extra;
				$html .= <<<ANS
<p>The correct answer is $goodanswer</p>
ANS;
			}

           	if($this->comment != null) {
             	$html .= "<div class=\"centerbox primary\">$this->comment</div>";
            }
        }

		$this->rightanswer = $goodanswer;
		return $html;
    }

	/**
	 * Return answers for the question when viewed in preview mode.
	 * @return array of answer options
	 */
	public function previewerAnswers(Site $site) {
		$answers = [];
		foreach($this->answer as $answer) {
			$answers[] = "<p class=\"center\">$answer</p>";
		}
		return $answers;
	}
	
	private $type;
	private $answer = [];
	private $displayed_answer = [];
	private $tolerance = 0.01;
}
