/**
 * @file
 * The main Quiz entry point
 */

import {QuizFactory} from "./QuizFactory";

QuizFactory.create(Site.Site);

//
// Install the console components
//
import {QuizConsole} from './Console/QuizConsole';

if(Site.Console !== undefined) {
    QuizConsole.setup(Site.Console);
}
