<?php
/** @file
 * Class that describes a question expecting a response
 * in the form of a matrix.
 */

namespace CL\Quiz;

use CL\Site\Site;
use CL\Users\User;

/**
 * Describes a question expecting a response in the form of a matrix.
 *
 * @cond
 * @property array problem
 * @property array answer
 * @endcond
 */
class QuizQuestionMatrix extends QuizQuestion {
	const Float = 1;		///< Matrix with floating point values
	const TruthTable = 2;	///< Truth table (binary)
	const Binary = 2;	///< Truth table (binary)
	const Integer = 3;		///< Matrix with integer values

	/** Constructor 
	 * @param int $type The answer type */
	public function __construct($type = QuizQuestionMatrix::Float) {
		parent::__construct();
		
		$this->type = $type;
		$this->display_correct = false;
	}

	/** Magic method to set parameters for the question
	 *
	 * This version accepts answer. See also the base class
	 * (QuizQuestion::__set()) version.
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * answer | array | An expected answer (multiple can be supplied
	 *
	 * @param string $property Name of private member to set
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'problem':
				$this->problem = $value;
				break;

			case 'answer':
				$this->answer[] = $value;
				break;

			case 'class':
				$this->class = $value;
				break;

			case 'col_heads':
				$this->col_heads = $value;
				break;

			case 'row_heads':
				$this->row_heads = $value;
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
     * @param bool $preview TRUE if staff preview mode
     * @return string HTML for the quiz question
     */
	public function present(Site $site, User $user, $preview=false) {
		$html = parent::present($site, $user, $preview);

		/*
		 * The question
		 */
		$html .= $this->text;

		$html .= $this->present_problem($this->problem);

		if($this->type === self::Float) {
			$html .= <<<END
<p class="cl-quiz-answer-note">Your answer must be within $this->tolerance</p>
END;
		}

//			$extraCheck = '';
//			if($this->type == self::TruthTable) {
//				$extraCheck = <<<JS
//if(obj.value != 1 && obj.value != 0) {
//	$('#message').text("Must enter 1 or 0 in each location");
//	fail = true;
//	return false;
//}
//JS;
		
		return $html;
	}
	

	private function present_answer($a) {
		$html = '<table class="' . $this->class . '">';
		$r = 1;
		foreach($a as $row) {
			$html .= '<tr>';
			$c = 1;
			foreach($row as $cell) {
				if($this->row_heads && ($r == 1)) {
					$html .= "<th>$cell</th>";
				} else if($this->col_heads && ($c == 1)) {
					$html .= "<th>$cell</th>";
				} else {
					$html .= "<td>$cell</td>";
				}

				$c++;
			}
			$html .= '</tr>';
			$head = false;

			$r++;
		}

		$html .= '</table>';
		return $html;
	}

	private function present_problem($a) {
		$html = '<table class="' . $this->class . '">';
		$r = 1;
		foreach($a as $row) {
			$html .= '<tr>';
			$c = 1;
			foreach($row as $cell) {
				// Determine the cell content
				if($cell === '?') {
					$id = "cl-quiz-matrix-$r-$c";
					$content = <<<HTML
<input type="text" class="cl-answer-required" name="$id" id="$id">
HTML;
				} else {
					$content = $cell;
				}

				if($this->row_heads && ($r == 1)) {
					$html .= "<th>$content</th>";
				} else if($this->col_heads && ($c == 1)) {
					$html .= "<th>$content</th>";
				} else {
					$html .= "<td>$content</td>";
				}

				$c++;
			}
			$html .= '</tr>';
			$r++;
		}

		$html .= '</table>';
		return $html;
	}


	/**
	 * Return answers for the question when viewed in preview mode.
	 * @return array of answer options
	 */
	public function previewerAnswers(Site $site) {
		$answers = [];
		foreach($this->answer as $answer) {
			$answers[] = $this->present_answer($answer);
		}
		return $answers;
	}


	/**
	 * Handle a submit of the question answer from the POST page
	 * @param Site $site The Site object
	 * @param User $user The User object
	 * @param $post $_POST
	 * @return string HTML for the question
	 */
	public function submit(Site $site, User $user, $post) {
		$answer = $this->problem;

		// Get the data from the form
		for($r=1;  $r<=count($answer); $r++) {
			for($c=1; $c<=count($answer[$r-1]); $c++) {
				$id = "cl-quiz-matrix-$r-$c";
				if(isset($post[$id]) && $answer[$r-1][$c-1] === '?') {
					$answer[$r-1][$c-1] = trim(htmlentities($post[$id]));
				}
			}
		}

    	$html = $this->text;
		$good = false;
		
		// We allow multiple good answers, check
		// them all until we find a right answer
		foreach($this->answer as $goodAnswer) {
			if(count($answer) != count($goodAnswer)) {
				$good = false;
			} else {
				for($r=0; $r<count($answer); $r++) {
					$rowA = $answer[$r];
					$rowG = $goodAnswer[$r];
					if(count($rowA) != count($rowG)) {
						$good = false;
						break;
					} else {
						for($c=0; $c<count($rowA); $c++) {
							$dataA = $rowA[$c];
							$dataG = $rowG[$c];

							switch($this->type) {
								case self::TruthTable:
									$good = $dataA == $dataG;
									break;

								case self::Float:
									$good = (abs($dataA - $dataG) < $this->tolerance);
									break;
							}

							if(!$good) {
								break;
							}
						}
					}

					if(!$good) {
						break;
					}
				}
			}

			if($good) {
				break;
			}
		}
		
        $html .= "<p>You said: " . $this->present_answer($answer) . "</p>";

		$this->correct = $good ? $this->points : 0;
        $this->studentanswer = $this->present_answer($answer);
		$goodAnswer = '';
		
    	// Did they get it right?
        if($good) {
        	$html .= "<p>That is correct!</p>";
        } else {
			$html .= "<p>That is incorrect!</p>";

			if($this->display_correct) {
				$goodAnswer = $this->present_answer($this->answer[0]);
				if(count($this->answer) > 1) {
					for($i=1; $i<count($this->answer); $i++) {
						$goodAnswer .= " or " . $this->present_answer($this->answer[$i]);
					}
				}

				$html .= "<p>The correct answer is $goodAnswer</p>";
			}

           	if($this->comment != null) {
             	$html .= "<div class=\"centerbox primary\">$this->comment</div>";
            } 
        }
		
		$this->rightanswer = $goodAnswer;
		return $html;
    }

	/**
	 * Automatically create a problem that expects a truth table
	 * based on an expression.
	 * @param array $heads Heads of the truth table columns.
	 * @param callable $expression Expression to compute answer
	 */
    public function expression_table(array $heads, callable $expression) {
		$problem = array($heads);
		$answer = array($heads);
		$size = count($heads) - 1;
		for($i=0; $i<pow(2, $size); $i++) {
			$prob_row = array();
			$ans_row = array();
			for($c=0; $c<$size; $c++) {
				$a = ($i >> ($size-$c-1)) & 1;
				$prob_row[] = $a;
				$ans_row[] = $a;
			}

			$prob_row[] = '?';
			$ans_row[] = call_user_func_array($expression, $prob_row) ? 1 : 0;
			$problem[] = $prob_row;
			$answer[] = $ans_row;
		}

		$this->problem = $problem;
		$this->answer[] = $answer;
    }
	
	private $type;
	private $problem = null;
	private $answer = array();
	private $tolerance = 0.01;
	private $col_heads = false;
	private $row_heads = false;

	private $class = "truth-table-1";
}
