/**
 * @file
 * The main Quiz entry point
 */

import {QuizConsole} from './QuizConsole';

if(Site.Console && !Site.Console.Quiz) {
    //
    // Install the console components
    //
    QuizConsole.setup(Site.Console);
    Site.Console.Quiz = true
}

