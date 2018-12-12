<?php
/** @file
 * Unit tests for the class CheckUML
 * @cond 
 */
require_once __DIR__ . '/init.php';

use CL\Quiz\CheckUML;

class CheckUMLTest extends \PHPUnit_Framework_TestCase
{

	
	public function test_check() {
		$check = new CheckUML();
		$line = "x : int";
		$this->verify($check, $line, "x : int");
		$this->verify($check, $line, "x:int");
		$this->verify($check, $line, "\tx   :  int      ");
		
		$line = "Run(x:int, y:int) : double";
		$this->verify($check, $line, "Run(x:int, y:int) : double");
		$this->verify($check, $line, " Run ( x : int ,y : int):double");
		
		$line = ": Pool";
		$this->verify($check, $line, ": Pool");
		$this->verify($check, $line, " : Pool");
		$this->verify($check, $line, " :Pool   ");
		$this->verify($check, $line, "    :       Pool     ");
		
		$line = "event";
		$this->verify($check, $line, "event");
		$this->verify($check, $line, " event");
		$this->verify($check, $line, "event  ");
		
		$line = "event[condition]";
		$this->verify($check, $line, "event[condition]");
		$this->verify($check, $line, "event [condition]");
		$this->verify($check, $line, "event [ condition ]");
		$this->verify($check, $line, "event  [condition] ");
		$this->verify($check, $line, "   event    [   condition    ]    ");
		
		$line = "event[condition]/effect";
		$this->verify($check, $line, "event[condition]/effect");
		$this->verify($check, $line, "event[condition] /effect");
		$this->verify($check, $line, "event[condition] / effect");
		$this->verify($check, $line, "event [   condition    ]    /   effect");
		
		$line = "paperJam/errorLightEnable";
		$this->verify($check, $line, "paperJam/errorLightEnable");
		$this->verify($check, $line, "paperJam /errorLightEnable");
		$this->verify($check, $line, "paperJam / errorLightEnable");
		
		$line = "paperJam[!inputTrayEmpty]";
		$this->verify($check, $line, "paperJam[!inputTrayEmpty]");
		$this->verify($check, $line, "paperJam [ ! inputTrayEmpty ] ");
		
		$line = "when(temp > setTemp) / heatOff";
		$this->verify($check, $line, "when(temp > setTemp) / heatOff");
		$this->verify($check, $line, "when(temp>setTemp)/heatOff");
		$this->verify($check, $line, "when ( temp   >   setTemp ) /   heatOff");

		$line = "when(temp &gt; setTemp) / heatOff";
		$this->verify($check, $line, "when(temp &gt; setTemp) / heatOff");
		$this->verify($check, $line, "when(temp&gt;setTemp)/heatOff");
		$this->verify($check, $line, "when ( temp   &gt;   setTemp ) /   heatOff");

		$line = "coinIn[coinContainerFull]/returnCoin";
		$this->verify($check, $line, "coinIn[coinContainerFull]/returnCoin");
		$this->verify($check, $line, "coinIn[coinContainerFull]/returnCoin ");
		$this->verify($check, $line, "  coinIn [ coinContainerFull   ] / returnCoin  ");
		
		$line = "ashStreet : Pool";
		$this->verify($check, $line, "ashStreet:Pool");
		$this->verify($check, $line, "ashStreet :Pool");
		$this->verify($check, $line, "ashStreet: Pool");
		$this->verify($check, $line, "  ashStreet:Pool   ");
	}
	
	private function verify($check, $expected, $given) {
		$comment = "Expected '$expected', got '$given'";
		
		$this->assertTrue($check->check($expected, $given), $comment);
	}
	
	private function verify_bad($check, $expected, $given) {
		$comment = "Expected '$expected' not equal to '$given'";
		
		$this->assertFalse($check->check($expected, $given), $comment);
	}
	
}

/// @endcond
