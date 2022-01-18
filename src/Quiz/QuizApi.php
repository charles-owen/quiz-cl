<?php
/**
 * @file
 * API Resource for /api/quiz
 */
namespace CL\Quiz;

use CL\Grades\Grades;
use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;
use CL\Site\Api\APIException;
use CL\Users\User;
use CL\Course\Members;
use CL\Course\Member;
use CL\Course\Assignment;

/**
 * API Resource for /api/users
 */
class QuizApi extends \CL\Users\Api\Resource {

	/**
	 * QuizApi constructor.
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Dispatch API calls.
	 * @param Site $site Site object
	 * @param Server $server Server object
	 * @param array $params Parameters passed by the router (after /api/quiz)
	 * @param array $properties Properties passed by the router (:id values)
	 * @param int $time Current time
	 * @return JsonAPI with response filled in
	 * @throws APIException
	 */
	public function dispatch(Site $site, Server $server, array $params, array $properties, $time) {
		$user = $this->isUser($site, User::USER);

		switch($params[0]) {
			case 'question':
				return $this->question($site, $user, $server, $params, $time);

			case 'preview':
				return $this->preview($site, $user, $server, $params, $time);

			case 'answer':
				return $this->answer($site, $user, $server, $params, $time);

			case 'result':
				return $this->result($site, $user, $params);

			case 'results':
				return $this->results($site, $user, $params);

			case 'abort':
				return $this->abort($site, $user, $params);

			case 'all':
				return $this->resultsAll($site, $server, $user, $params);

            case 'recompute':
                return $this->recompute($site, $user, $server, $params, $time);

			case 'tables':
				return $this->tables($site, $server, new QuizTables($site->db));
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

	/**
	 * /api/quiz/result/:memberid/:assigntag/:quiztag
	 * /api/quiz/result/token/:token
	 *
	 * Get the best quiz result for a user.
	 *
	 * @param Site $site
	 * @param User $user
	 * @param array $params
	 * @return JsonAPI
	 * @throws APIException
	 */
	private function result(Site $site, User $user, array $params) {
		$this->atLeast($user,User::STAFF);

		if (count($params) < 2) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		// /api/quiz/result/:token variation
		if($params[1] === 'token') {
			$token = $params[2];

            $json = new JsonAPI();

			if(count($params) > 3 && $params[3] === 'delete') {
                $quizTries = new QuizTries($site->db);
                if(!$quizTries->delete($token)) {
                    throw new APIException("Invalid token", APIException::GENERAL_ERROR);
                }

            } else {
			    // Return the answers for this quiz token
                $quizAnswers = new QuizAnswers($site->db);
                $answers = $quizAnswers->getAnswers($token);
                $json->addData('quiz-answers', $token, $answers);
            }

			return $json;
		}

		// /api/quiz/result/:memberid/:assigntag/:quiztag variation
		if (count($params) < 4) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$memberId = $params[1];
		$assignTag = $params[2];
		$quizTag = $params[3];

		$members = new Members($site->db);
		$member = $members->getAsUser($memberId);
		if($member === null) {
			throw new APIException("Member does not exist");
		}

		$quizTries = new QuizTries($site->db);
		$results = $quizTries->getTries($member, $assignTag, $quizTag);
		$high = -1;
		$token = null;
		foreach($results as $result) {
			if($result['points'] > $high) {
				$token = $result['token'];
				$high = $result['points'];
			}
		}

		$json = new JsonAPI();

		$json->addData('quiz-user', $memberId, $member->data());
		$json->addData('quiz-tries', $memberId, $results);

		if($token !== null) {
			$quizAnswers = new QuizAnswers($site->db);
			$answers = $quizAnswers->getAnswers($token);
			$json->addData('quiz-answers', $token, $answers);
		}

		return $json;
	}


	private function abort(Site $site, User $user, array $params) {
		if (count($params) < 3) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$assignTag = $params[1];
		$quizTag = $params[2];
		$sessions = new QuizSessions($site->db);
		$sessions->clear($user, $assignTag, $quizTag);

		$json = new JsonAPI();
		return $json;
	}

	private function resultsAll(Site $site, Server $server, User $user, array $params) {
		$this->atLeast($user,User::STAFF);

		if (count($params) < 2) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$assignTag = $params[1];
		$get = $server->get;
		$semester = $get['semester'];
		$section = $get['section'];

		$quizTries = new QuizTries($site->db);
		$results = $quizTries->getAllMembersBest($semester, $section, $assignTag);

		$json = new JsonAPI();
		$json->addData('quiz-results-all', 0, ['results'=>$results]);
		return $json;
	}

	private function results(Site $site, User $user, array $params) {
		if (count($params) < 3) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$assignTag = $params[1];
		$quizTag = $params[2];
		$quizTries = new QuizTries($site->db);
		$tries = $quizTries->getTries($user, $assignTag, $quizTag);
		$json = new JsonAPI();
		$json->addData('quiz-results', 0, ['tries'=>$tries]);
		return $json;
	}

	private function answer(Site $site, User $user, Server $server, array $params, $time) {
		$session = $this->getSession($site, $user, $server, $params, $time);
		$quiz = $session->quiz;
		$assignment = $this->getAssignment($site, $user, $quiz);
		$open = $assignment->is_open($user, $time);

		$token = $session->token;
		$questionNum = +$params[2];

		$post = $server->post;

		if($session->state !== QuizSession::QUESTION || $session->question !== $questionNum) {
			throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
		}

		$question = $quiz->getQuestion($questionNum);
		$questionHTML = $question->present($site, $user);
		$answerHTML = $question->submit($site, $user, $post);

		// Only update tables if quiz is open
		if($open || $user->staff) {
			$quizAnswers = new QuizAnswers($site->db);
			$quizAnswers->answer($token, $questionNum, $post['question-time'],
				$questionHTML, $time, $question->student_answer, $question->right_answer,
				$question->correct);

			// How many points for this assignment so for?
			$points = $quizAnswers->getPoints($token);

			// Update the try
			$quizTries = new QuizTries($site->db);

			if($questionNum == $quiz->length) {
				$quizTries->setPointsAndEnd($token, $points, $time);
			} else {
				$quizTries->setPoints($token, $points);
			}

			$this->updateGrade($site, $user, $assignment, $quiz, $time);
		}

		$sessions = new QuizSessions($site->db);

		if($questionNum < $quiz->length) {
			// There are more questions
			// State is next an answer presentation
			$session->state = QuizSession::ANSWER;
			$sessions->update($session);
		} else {
			// We are done, so we no longer need to quiz session
			$sessions->clear($user, $quiz->assignTag, $quiz->tag);
		}

		$json = new JsonAPI();
		$json->addData('quiz-answer', $questionNum, ['answer'=>$answerHTML]);
		return $json;
	}

	private function updateGrade(Site $site, User $user, Assignment $assignment, Quiz $quiz, $time) {
		// Does the assignment have a grading component?
		if($assignment->grading === null) {
			return;
		}

		$gradeQuiz = null;
		foreach($assignment->grading->parts as $part) {
			if($part instanceof GradeQuizzes) {
				$gradeQuiz = $part;
				break;
			}
		}

		if($gradeQuiz === null) {
			return;
		}

		// What is the best score for this quiz?
		$quizTries = new QuizTries($site->db);
		$best = $quizTries->getBest($user, $assignment->tag, $quiz->tag);
		if($best !== null) {
			$bestPoints = $best['points'];

			// Get the grade for this assignment/quiz
			$grades = new Grades($site->db);
			$grade = $grades->get($user, $assignment->tag, $gradeQuiz->tag);

			// Set the grade for this quiz
			$grade->meta->set('results', $quiz->tag, [
				'grade'=>$bestPoints,
				'points'=>$quiz->points
			]);

			// Compute the current total points
			$total = 0;
			$points = 0;
			foreach($gradeQuiz->tags as $tag) {
				$points += $tag['points'];
				$total += $grade->meta->get('results', $tag['tag'], ['grade'=>0])['grade'];
			}

			// Make that into a grade
			if($total > 0) {
				$grade->points = round(($total / $points) * $gradeQuiz->points, 0);
				$grades->post($user, $grade);
			}
		}
	}


	private function question(Site $site, User $user, Server $server, array $params, $time) {
		$session = $this->getSession($site, $user, $server, $params, $time);
		$quiz = $session->quiz;

		$assignment = $this->getAssignment($site, $user, $quiz);
		$open = $assignment->is_open($user, $time);

		$questionNum = +$params[2];

		//
		// Session must be either in prestart or answer for previous question
		//
		if($session->state === QuizSession::PRESTART) {
			if($open || $user->staff) {
				// Create a new quiz try...
				$quizTries = new QuizTries($site->db);
				if(!$quizTries->start($user, $session, $time)) {
					throw APIException("Unable to create a quiz attempt");
				}
			}
		} else if($session->state === QuizSession::ANSWER && ($session->question + 1) === $questionNum) {
			// This is good...

		} else {
			// This is bad
			throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
		}

		// Make this the current question
		$session->question = $questionNum;
		$session->state = QuizSession::QUESTION;
		$sessions = new QuizSessions($site->db);
		$sessions->update($session);

		$question = $quiz->getQuestion($questionNum);
		$data = $question->data($site, $user, $time,false);

		$json = new JsonAPI();
		$json->addData('quiz-question', $questionNum, $data);
		return $json;
	}

	private function preview(Site $site, User $user, Server $server, array $params, $time) {
		$this->atLeast($user, Member::GRADER);

		if (count($params) < 2) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$token = $params[1];
		$get = $server->get;
		$this->ensure($get, ['file']);
		$file = $get['file'];

		$sessions = new QuizSessions($site->db);
		$session = $sessions->get($user, $token);
		if ($session === null) {
			throw new APIException('This quiz is no longer available');
		}

		$quiz = $session->quiz;

		$question = $quiz->getFileQuestion($file);
		$data = $question->data($site, $user, $time,true);

		$json = new JsonAPI();
		$json->addData('quiz-question', 0, $data);
		return $json;
	}

	private function recompute(Site $site, User $user, Server $server, $params, $time) {
        $this->atLeast($user, Member::INSTRUCTOR);

        if (count($params) < 2) {
            throw new APIException("Invalid API Path x", APIException::INVALID_API_PATH);
        }

        $assignTag = $params[1];
        $course = $site->course;
        $section = $course->get_section_for($user);
        $assignment = $section->get_assignment($assignTag);
        if($assignment === null) {
            throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
        }

        $assignment->load();

        // Does the assignment have a grading component?
        if($assignment->grading === null) {
            throw new APIException("Assignmment does not have a grading component", APIException::GENERAL_ERROR);
        }

        $gradeQuiz = null;
        foreach($assignment->grading->parts as $part) {
            if($part instanceof GradeQuizzes) {
                $gradeQuiz = $part;
                break;
            }
        }

        if($gradeQuiz === null) {
            throw new APIException("Assignmment does not have a quiz grading component", APIException::GENERAL_ERROR);
        }

        // What is the best score for this quiz?
        $quizTries = new QuizTries($site->db);

        $users = new Members($site->db);
        $students = $users->query([
            'semester'=>$section->semester,
            'section'=>$section->id
        ]);

        $grades = new Grades($site->db);

        foreach($students as $student) {
            // Get the grade for this assignment/quiz

            $grade = $grades->get($student, $assignment->tag, $gradeQuiz->tag);

            // Compute the current total points
            $total = 0;
            $points = 0;
            foreach($gradeQuiz->tags as $tag) {
                $points += $tag['points'];
                $total += $grade->meta->get('results', $tag['tag'], ['grade'=>0])['grade'];
            }

            // Make that into a grade
            if($total > 0) {
                $newPoints = round(($total / $points) * $gradeQuiz->points, 0);
                // echo $student->userId . ': ' . $grade->points . '/' . $newPoints . "\n";
                $grade->points = $newPoints;
                $grades->post($student, $grade);
            }
        }

        $json = new JsonAPI();
        return $json;
    }

	private function getSession(Site $site, User $user, Server $server, array $params, $time)
	{
		if ($server->server['REQUEST_METHOD'] !== 'POST') {
			throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
		}

		if (count($params) < 3) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$token = $params[1];
		$questionNum = +$params[2];

		$sessions = new QuizSessions($site->db);
		$session = $sessions->get($user, $token);
		if ($session === null) {
			throw new APIException('This quiz is no longer available');
		}

		return $session;
	}

	private function getAssignment(Site $site, User $user, Quiz $quiz) {
		// Determine the assignment and ensure it is open
		$course = $site->course;
		$section = $course->get_section_for($user);
		$assignment = $section->get_assignment($quiz->assignTag);
		if($assignment === null) {
			throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
		}

        $assignment->load();
		return $assignment;
	}
}