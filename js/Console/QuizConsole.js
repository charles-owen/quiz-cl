
import QuizStatusComponent from './QuizStatusComponent.vue';
import QuizResultComponent from './QuizResultComponent.vue';

/**
 * @file
 * Quiz system console components
 * @constructor
 */
export let QuizConsole = function() {
}

QuizConsole.setup = function(Console) {
    Console.tables.add({
        title: 'Quiz',
        order: 15,
        api: '/api/quiz/tables'
    });

    Console.components.addRoute(
        {route: '/quiz/results/:assigntag', component: QuizStatusComponent, props: true}
    );

    Console.components.addRoute(
        {route: '/quiz/result/:memberid/:assigntag/:quiztag', component: QuizResultComponent, props: true}
    );

    Console.course.assignmentLink('quiz', 'quizzes', '/quiz/results/:assigntag');
}

