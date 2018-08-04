<?php
/** @file
 * @brief Question: If I fail to submit a reasonable effort 
 */

$question = new CL\Quiz\QuizQuestionValue();

$question->text = <<<QUESTION
<p>If I fail to submit a reasonable effort for a step or design assignment,
what grade will that assignment earn?</p>
QUESTION;

$question->comment = <<<COMMENT
<p>Failing to submit a reasonable effort for a step or design assignment
earns a grade of -100. </p>
COMMENT;

$question->answer = -100;

return $question;
