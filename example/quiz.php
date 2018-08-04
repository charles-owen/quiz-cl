<?php
require 'site.php';
$view = new CL\Course\AssignmentView($site, "design1");
$view->title = "Quiz Demo";
$quiz = new CL\Quiz\Quiz($view->assignment->tag, 'quiz1', 3);
$quizView = $quiz->createView($site);
$view->add_aux($quizView);
?>
<!DOCTYPE html>
<html lang="en">
<head><?php echo $view->head(); ?></head>
<body>
<?php
echo $view->header();

//$view->quiz = function($quiz) {
  $quiz->file_question('quiz/structurededuct.php');
	$quiz->file_question('quiz/structureassignments.php');
	$quiz->file_question('quiz/structureassignments2.php');
//}

echo $quizView->present();

echo $view->footer();
?>

</body>
</html>


