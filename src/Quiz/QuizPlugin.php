<?php
/**
 * @file
 * Plugin class for the quiz Subsystem
 */

namespace CL\Quiz;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Router;
use CL\Console\ConsoleView;
use CL\Site\Extendible;

/**
 * Plugin class for the quiz Subsystem
 */
class QuizPlugin extends \CL\Site\Plugin implements \CL\Site\IExtension {
	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	public function tag() {return 'quiz';}

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	public function depends() {return ['course'];}


	/**
	 * Amend existing object
	 * The Router is amended with routes for the login page
	 * and for the user API.
	 * @param $object Object to amend.
	 */
	public function amend($object) {
		if($object instanceof Router) {
			$router = $object;
			$router->addRoute(['api', 'quiz', '*'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$resource = new QuizApi();
				return $resource->apiDispatch($site, $server, $params, $properties, $time);
			});
		} else if($object instanceof \CL\Course\Assignment) {
			$object->addProperty('quiz', false, true);

			// Steps are also assignments
			if ($object instanceof \CL\Step\Step) {
				$object->extend('add_quiz', $this);
			}
		} else if($object instanceof \CL\Grades\AssignmentGrading) {
			$object->extend('add_quizzes', function(\CL\Grades\AssignmentGrading $grading, $args) {
				$grading->add(new GradeQuizzes($args[0], $args[1]));
			});

			$object->extend('add_step_quizzes', function(\CL\Grades\AssignmentGrading $grading, $args) {
				$assignment = $grading->assignment;
				if($assignment instanceof \CL\Step\Step) {
					$tags = [];
					foreach($assignment->sectionsInOrder as $section) {
						if($section instanceof QuizStepSection) {
							$tags[] = ['tag'=>$section->tag, 'points'=>$section->points];
						}
					}
					if(count($tags) > 0) {
						$grading->add(new GradeQuizzes($args[0], $tags));
					}
				}
			});

		} else if($object instanceof ConsoleView) {
			$object->addJS('quiz');
		} else if($object instanceof \CL\Course\AssignmentView) {
			// Add quiz results to this page
			$view = $object;

			$assignTag = $view->tag;
			$site = $view->site;
			$user = $site->users->user;
			if($user->guest) {
				return;
			}

			$quizTries = new QuizTries($site->db);
			$best = $quizTries->getAllBest($user, $assignTag);
			if(count($best) > 0) {
				$view->addJSON('cl-quiz-results', json_encode($best));
			}
		}
	}

	/**
	 * @param Extendible $extendible Extendible that is calling this function
	 * @param string $name Name of the function
	 * @param array $args Arguments to the function
	 * @return mixed
	 */
	public function extension(Extendible $extendible, $name, array $args) {
		if ($name !== 'add_quiz') {
			return null;
		}

		$step = $extendible;
		$tag = $step->section->substituteLC($args[0]);
		$name = $args[1];
		$points = $args[2];
		$section = new QuizStepSection($step, $tag, $name, $points);
		$step->add($section);
		$step->quiz = $step->quiz !== false ? $step->quiz + $points : $points;
		return $section;
	}

	/**
	 * Ensure tables exist for a given subsystem.
	 * @param Site $site The site configuration component
	 */
	public function ensureTables(Site $site) {
		$maker = new QuizTables($site->db);
		$maker->create(false);
	}

}