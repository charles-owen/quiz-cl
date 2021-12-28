<?php
/**
 * @file
 * Class that provides functions to create and delete all quiz subsystem tables
 */

namespace CL\Quiz;

use CL\Tables\Config;

/**
 * Class that provides functions to create and delete all quiz subsystem tables
 *
 * It is used by the management system to create the necessary tables as needed.
 */
class QuizTables extends \CL\Tables\TableMaker {
	/**
	 * QuizTables constructor.
	 * @param Config $config
	 */
	public function __construct(Config $config) {
		parent::__construct($config);

		$this->add(new QuizSessions($config));
		$this->add(new QuizTries($config));
		$this->add(new QuizAnswers($config));
    }
}