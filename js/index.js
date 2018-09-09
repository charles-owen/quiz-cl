/**
 * @file
 * The main Quiz entry point
 */

import {QuizFactory} from "./QuizFactory";
import {QuizConsole} from './Console/QuizConsole';

//
// Create the Quiz components
//
QuizFactory.create(Site.Site);

//
// Install the console components
//

if(Site.Site.console !== undefined) {
    QuizConsole.setup(Site.Site.console);
}
