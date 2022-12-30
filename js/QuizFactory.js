import {Quiz} from "./Quiz";

/**
 * The Quiz system factory
 * @constructor
 */
export const QuizFactory = function() {
}

QuizFactory.create = function(site) {

    const quiz = new Quiz(site);

    site.start( () => {
        let element = document.querySelector('div.cl-quiz');
        if(element !== null) {
            quiz.initialize(element);
        }
    })

    return quiz
}
