<?php
/** @file
 * Class that implements a quiz grade.
 */
 
namespace CL\Quiz;

use CL\Grades\Grade;
use CL\Grades\GradePart;
use CL\Users\User;
use CL\Site\Site;

/**
 * Grade for quizzes
 *
 * Multiple quizzes can exist in an assignment.
 *
 * @cond
 * @property array tags
 * @endcond
 */
class GradeQuizzes extends GradePart {

	/**
	 * Constructor
	 * \param int $points The maximum possible points for this category
	 * @param array $tags Tags for all quizzes in the assignment
	 */
	public function __construct($points, array $tags) {
		parent::__construct($points, '_quizzes');

		$this->tags = $tags;
		$this->__set("name", "Quizzes");
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
			case 'tags':
				return $this->tags;

			default:
				return parent::__get($property);
		}
	}

	/**
	 * Create the grading status for staff use
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return string
	 */
	public function createStatus($memberId, array $grades) {
		if(isset($grades[$this->tag])) {
			return $grades[$this->tag]->points;
		}

		return 0;
	}


	/**
	 * Create the grading form for staff use
	 * @param Site $site The Site object
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array describing a grader
	 */
	public function createGrader(Site $site, User $user, array $grades) {
		$data = parent::createGrader($site, $user, $grades);

		$grade = $grades[$this->tag];
		$data['status'] = $grade->points !== null ? $grade->points : 0;
		$data['html'] = $this->present($grade);

		return $data;
	}

	private function present(Grade $grade) {
		$gradePoints = $grade->points !== null ? $grade->points : 0;

		// Compute the current total points
		$total = 0;
		$points = 0;
		foreach($this->tags as $tag) {
			$points += $tag['points'];
			$total += $grade->meta->get('results', $tag['tag'], ['grade'=>0])['grade'];
		}

		$html = <<<TABLE
<table>
<tr><th>Correct</th><th>Points</th><th>Available</th></tr>
<tr class="center"><td>$total/$points</td><td>$gradePoints</td><td>$this->points</td></tr>
</table>
TABLE;

		return $html;
	}

	/**
	 * Create the grading presentation for students
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array of arrays, each describing a grader
	 */
	public function presentGrade($memberId, array $grades) {
		$data = parent::presentGrade($memberId, $grades);
		$grade = $grades[$this->tag];

		$data['html'] = $this->present($grade);
		return $data;
	}

	/**
	 * Post grades for a user
	 * @param Site $site Site object (for database access)
	 * @param User $grader User doing the grading
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @param array $post $_POST
	 * @param int $time Current time
	 */
	public function postGrader(Site $site, User $grader, User $user, array $grades, array $post, $time) {
		// We do nothing for a quiz, since it is posted when the quiz is taken...
	}


	/**
	 * Compute the grade for this assignment
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array with keys 'points' and optionally 'override'
	 */
	public function computeGrade($memberId, array $grades) {
		if(isset($grades[$this->tag])) {
			$grade = $grades[$this->tag];
			return ['points'=>$grade->points !== null ? $grade->points : 0];
		}

		return ['points'=>0];
	}

//	/** Present the grading from to staff */
//	public function grading_form(\User $user) {
//		$html = "<h2>Quizzes</h2>";
//
//		$this->compute_points($user);
//
//		$grade = $this->get_grade();
//
//		$html .= <<<TABLE
//<table class="quiz-grading">
//<tr><th>Correct</th><th>Points</th><th>Available</th></tr>
//<tr><td>$this->correct/$this->total</td><td>$grade</td><td>$this->points</td></tr>
//</table>
//TABLE;
//
//		return $html;
//	}


	
//	/** Compute the quiz points.
//	 *
//	 * This computes the member variables $comment and $total
//	 * and sets the grade in the base class */
//	public function compute_points(\User $user) {
//        /*
//         * Iterate over all quiz tags to find the
//         * quizes. Total the points and figure out the
//         * user best for the quiz
//         */
//        $total = 0;
//        $correct = 0;
//
//        $assignment = $this->get_assignment();
//        $course = $assignment->get_course();
//
//        $quizTries = new CL\Quiz\QuizTries($course);
//
//        foreach($this->tags as $tag => $num) {
//            $total += $num;
//
//            $best = $quizTries->get_best($user, $assignment, $tag);
//            if($best !== null) {
//                $correct += $best['correct'];
//            }
//        }
//
//		$points = $total === 0 ? 0 : round($correct / $total * $this->points);
//
//		$this->set_grade($points);
//		$this->correct = $correct;
//		$this->total = $total;
//	}

	private $tags;
}

