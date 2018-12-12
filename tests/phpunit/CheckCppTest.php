<?php
/** @file
 * Unit tests for the class CheckCpp
 * @cond 
 */
require_once __DIR__ . '/init.php';

use CL\Quiz\CheckCPP;

class CheckCppTest extends \PHPUnit_Framework_TestCase
{

	
	public function test_check() {
		$check = new CheckCpp();
		$line = "int mX;";
		$this->verify($check, $line, "int mX;");
		$this->verify($check, $line, "\t\tint mX;");
		$this->verify($check, $line, " int mX;");
		$this->verify($check, $line, " int  mX;");
		$this->verify($check, $line, " int mX  ;   ");
		$this->verify_bad($check, $line, "int x;");
		
		$line = "void Run(int x, int y);";
		$this->verify($check, $line, "void Run(int x,int y);");
		$this->verify($check, $line, "void Run(int x, int y);");
		$this->verify($check, $line, "\tvoid  Run(int x, int y) ;   ");
		$this->verify($check, $line, "\tvoid  Run (int x, int y) ;   ");
		$this->verify($check, $line, "\tvoid  Run( int x, int y) ;   ");
		$this->verify($check, $line, "\tvoid  Run ( int x, int y) ;   ");
		$this->verify($check, $line, "\tvoid  Run ( int x, int y ) ;   ");
		$this->verify($check, $line, "\t     void  Run ( int x, int y ) ;   ");
		$this->verify_bad($check, $line, "\t     void  Run ( int mX, int mY ) ;   ");

		$line = "int mX=7;";
		$this->verify($check, $line, "int mX=7;");
		$this->verify($check, $line, "int mX =7;");
		$this->verify($check, $line, "int mX= 7;");
		$this->verify($check, $line, "int mX  =   7;");
		
		$line = "CCandy::ComputePrice();";
		$this->verify($check, $line, "CCandy::ComputePrice();");
		$this->verify($check, $line, "CCandy ::ComputePrice();");
		$this->verify($check, $line, "CCandy:: ComputePrice();");
		$this->verify($check, $line, "CCandy::ComputePrice( );");
		$this->verify($check, $line, "    CCandy::ComputePrice() ;   ");


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
