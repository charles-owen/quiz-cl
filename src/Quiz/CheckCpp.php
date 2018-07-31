<?php
/** @file
 * Class for checking lines of code in C++
 */
 
namespace CL\Quiz;

/**
 * Check C++ lines of code for equality
 */
class CheckCpp {
	/** Check two C++ strings for equality
	 *
	 * This will remove any extra whitespace from
	 * both the expected and given strings and then
	 * test. 
	 * @param $expected Expected line of code
	 * @param $given Given line of code to test
	 * @return true if equal
	 */
	public function check($expected, $given) {
		// Strip all extra whitespace
		$given = $this->strip($given);
		$expected = $this->strip($expected);
		
		return $given === $expected;
	}
	
	private function strip($given) {
		// Remove all redundant white space
		$stripped = preg_replace(array('/\s{2,}/', '/[\t\n]/'), ' ', trim($given));
		
		// For each of these characters, remove any surrounding white space
		$clean = array(';', ',', '(', ')', '=', ':');
		foreach($clean as $c) {
			$stripped = preg_replace('/\s*\\' . $c . '\s*/', $c, $stripped);
		}

		return $stripped;
	}
	
}
