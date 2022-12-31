/**
 * @file
 * The main Quiz entry point
 */

import {QuizFactory} from "./js/QuizFactory";

if(!Site.Quiz) {
    //
    // Create the Quiz components
    //
    Site.Quiz = QuizFactory.create(Site);
}

