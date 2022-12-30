/**
 * @file
 * The main Quiz entry point
 */

import {QuizFactory} from "./js/QuizFactory";
import {QuizConsole} from './js/Console/QuizConsole';

if(!Site.Quiz) {
    //
    // Create the Quiz components
    //
    Site.Quiz = QuizFactory.create(Site);

    //
    // Install the console components
    //
    if(Site.Console !== undefined) {
        QuizConsole.setup(Site.Console);
    }
}

