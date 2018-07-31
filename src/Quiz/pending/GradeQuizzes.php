<?php
/** @file
 * Class that implements a quiz grade.
 */
 
namespace Quiz;

/** Grade for quizzes
 *
 * Multiple quizzes can exist in an assignment.
 */
class GradeQuizzes extends \Assignments\Grade {
	
	/**
     * Constructor
	 * @param $grading The Assignment Grading object this is a member of 
	 * @param $points How many points to categories to all quizzes
     * @param $tags Array of $tag => points that contains lists the quiz tags and their value
     */
	public function __construct(\Assignments\Grading $grading, $points, array $tags) {
		parent::__construct($grading, $points, "_quizzes");

        $this->tags = $tags;
	}
	
	/** Grading category name */
	public function get_name() { return "Quizzes";}
	
	/** Present the grades to a user 
	 * 
	 * The grades are computed automatically, so the grade presentation
	 * and the grading form as the same. */
	public function graded_form() {
		return $this->grading_form(get_user());
	}
	
	/** Present the grading from to staff */
	public function grading_form(\User $user) {
		$html = "<h2>Quizzes</h2>";
		
		$this->compute_points($user);
		
		$grade = $this->get_grade();

		$html .= <<<TABLE
<table class="quiz-grading">
<tr><th>Correct</th><th>Points</th><th>Available</th></tr>
<tr><td>$this->correct/$this->total</td><td>$grade</td><td>$this->points</td></tr>
</table>
TABLE;

		return $html;
	}
	
	/** \brief Handle POST from the part of a form for quiz grade entry 
	 *
	 * This doesn't do anything with the database, but does total the 
	 * quiz score, since we need that total. 
	 * \param $user User to post for */
	public function post_form(\User $user) {
		$this->compute_points($user);
	}
	
	/** Compute the quiz points.
	 *
	 * This computes the member variables $comment and $total
	 * and sets the grade in the base class */
	public function compute_points(\User $user) {
        /*
         * Iterate over all quiz tags to find the
         * quizes. Total the points and figure out the
         * user best for the quiz
         */
        $total = 0;
        $correct = 0;

        $assignment = $this->get_assignment();
        $course = $assignment->get_course();

        $quizTries = new \Quiz\QuizTries($course);

        foreach($this->tags as $tag => $num) {
            $total += $num;

            $best = $quizTries->get_best($user, $assignment, $tag);
            if($best !== null) {
                $correct += $best['correct'];
            }
        }

		$points = $total === 0 ? 0 : round($correct / $total * $this->points);
		
		$this->set_grade($points);
		$this->correct = $correct;
		$this->total = $total;
	}
	
		/** Clear the grade information */
	public function clear_grade() {
		parent::clear_grade();
		
		// Always have at least a zero grade
		$this->set_grade(0);
	}


	/** Load the grade information from the database row */
	public function load_grade($row) {
		parent::load_grade($row);
		
		$points = $row['grade'];

		if($points != "") {
			$this->set_grade($points);
		} else {
			$this->set_grade(null);
		}
	}

    private $tags;
	private $correct;
	private $total;
	
}

