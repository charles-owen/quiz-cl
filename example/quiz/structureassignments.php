<?php
/** @file
 * Example of a multiple choice question definition
 */

$question = new \CL\Quiz\QuizQuestionMulti();

$question->text = <<<QUESTION
<p>Of the assignments below, which will predominately focus on programming?</p>
QUESTION;

$question->comment = <<<COMMENT
<p>Design assignments focus on design and lecture material.</p>
COMMENT;

$question->bad = "Design Assignments";
$question->bad = "None";
$question->bad = "Exams";
$question->good = "Step Assignments";

return $question;
