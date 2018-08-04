<?php
/** @file
 * @brief Example of a multiple choice question definition 
 */

$question = new CL\Quiz\QuizQuestionMulti();

$question->text = <<<QUESTION
<p>Of the assignments below, which will predominately focus on design?</p>
QUESTION;

$question->comment = <<<COMMENT
<p>Design assignments focus on design and lecture material.</p>
COMMENT;

$question->good = "Design Assignments";
$question->bad = "None";
$question->bad = "Exams";
$question->bad = "Step Assignments";

return $question;
