<?php
/** @file
 * Class that describes a question expecting a response
 * in the form of a matrix.
 */

namespace Quiz;

/** Describes a question expecting a response
 * in the form of a matrix.
 *
 */
class QuizQuestionMatrix extends QuizQuestion {
	const Float = 1;		///< Matrix with floating point values
	const TruthTable = 2;	///< Truth table (binary)
	const Binary = 2;	///< Truth table (binary)
	const Integer = 3;		///< Matrix with integer values

	/** Constructor 
	 * @param $type The answer type */
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
	 * @param $name Name of private member to set
	 * @param $value Value to set */
	public function __set($name, $value) {
		switch($name) {
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
				parent::__set($name, $value);
				break;
		}
	}


    /** Present the question to the user
     * @param string $sessionName The name of the session variable for the QuizSession object
     * @param $preview TRUE if staff preview mode
     * @returns string HTML for the quiz question */
	public function present(\User $user, $sessionName, $preview=false) {
		$html = parent::present($user, $sessionName, $preview);
		
		/*
		 * The question
		 */
		$html .= $this->text;
        $libroot = $this->quiz->get_assignment()->get_course()->get_libroot();

		if($preview) {
			$answer0 = $this->present_answer($this->answer[0]);
			$html .= <<<ANS
<hr /><p class="answer">Answer: <span>$answer0</span>
ANS;
			if(count($this->answer) > 1) {
				for($i=1; $i<count($this->answer); $i++) {
					$answer = $this->present_answer($this->answer[i]);
					$html .= " or <span>$answer</span>";
				}
			}
			
			$html .= "</p>";
			
			// Comment preview
			if($this->comment !== null) {
				$html .= "<p>Comment:</p>";
				$html .= $this->comment;
			}
		} else {
			$html .= <<<HTML
<form id="question" action="" method="post">
HTML;

			$html .= $this->present_problem($this->problem);

			$html .= <<<HTML
<p class="center">
<input name="Submit" type="submit" value="submit" /> <span id="message" class="smallred">&nbsp;</span>
</p>
HTML;

			if($this->type === self::Float) {
				$html .= <<<END
 <span class="answernote">Your answer must be within $this->tolerance</span>
END;
			}

			$extraCheck = '';
			if($this->type == self::TruthTable) {
				$extraCheck = <<<JS
if(obj.value != 1 && obj.value != 0) {
	$('#message').text("Must enter 1 or 0 in each location");
	fail = true;
	return false;
}
JS;

			}

			$html .= <<<HTML
</form><script>
var present_post = function() {
	$('#question').submit(function(event) {
	    event.preventDefault();
	    var answer = $('#question').serializeArray();
	    var fail = false;
	    
	    answer.forEach(function(obj) {
	    	if(obj.value === "") {
	    		$('#message').text("Must enter a value in each location");
	    		fail = true;
	    		return false;
	    	}
	    	
	    	$extraCheck
	    });
	    
	    if(fail) {
	    	return false;
	    }

		var data = {session: '$sessionName', cmd: 'submit', answer: answer};
		$.ajax({
			type: "POST",  
			url: "$libroot/quiz/quiz-post.php",
			data: data,
			success: function(data) {
				$("#quiz").html(data);
				present_post();
			}  
		}); 

		return false; // prevent default
	});	
}
</script>
HTML;
		}
		
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
					$id = "m-$r-$c";
					$content = <<<HTML
<input type="text" name="$id" id="$id">
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



	/** Handle a submit of the question answer from the POST page
	 * @returns string HTML for the question */
    public function submit($post) {
		$answer = $this->problem;

		foreach($post['answer'] as $item) {
			$name = explode('-', trim(htmlentities($item['name'])));
			if($name[0] !== 'm') {
				continue;
			}

			$r = $name[1];
			$c = $name[2];

			$answer[$r-1][$c-1] = trim(htmlentities($item['value']));
		}

    	$html = $this->text;
		$good = false;
		
		// We allow multiple good answers, check
		// them all until we find a right answer
		foreach($this->answer as $goodanswer) {
			if(count($answer) != count($goodanswer)) {
				$good = false;
			} else {
				for($r=0; $r<count($answer); $r++) {
					$rowA = $answer[$r];
					$rowG = $goodanswer[$r];
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

		$this->correct = $good ? $this->get_points() : 0;
        $this->studentanswer = $this->present_answer($answer);
		$goodanswer = '';
		
    	// Did they get it right?
        if($good) {
        	$html .= "<p>That is correct!</p>";
        } else {
			$html .= "<p>That is incorrect!</p>";

			if($this->display_correct) {
				$goodanswer = $this->present_answer($this->answer[0]);
				if(count($this->answer) > 1) {
					for($i=1; $i<count($this->answer); $i++) {
						$goodanswer .= " or " . $this->present_answer($this->answer[$i]);
					}
				}

				$html .= "<p>The correct answer is $goodanswer</p>";
			}

           	if($this->comment != null) {
             	$html .= "<div class=\"centerbox primary\">$this->comment</div>";
            } 
        }
		
		$this->rightanswer = $goodanswer;
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
