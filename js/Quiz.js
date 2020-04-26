import '../_quiz.scss';
import QuizVue from './Vue/Initial.vue';
import QuestionVue from './Vue/Question.vue';
import AnswerVue from './Vue/Answer.vue';
import ExpiredVue from './Vue/Expired.vue';
import ClosedVue from './Vue/Closed.vue';
import ResultsVue from './Vue/Results.vue';
import PreviewerVue from './Vue/Previewer.vue';
import PreviewVue from './Vue/Preview.vue';

import {States} from './States';

/**
 * Quiz presentation Vue
 * @param site Site object
 * @constructor
 */
export let Quiz = function(site) {

    this.initialize = function(element) {
        let quiz = JSON.parse(element.textContent);

        const template = `
<div class="cl-quiz">
  <component :is="page" :quiz="quiz" :file="file" v-on:answer="answer($event)" v-on:new-state="newState($event)"></component>
  <previewer v-if="quiz.preview !== undefined" :quiz="quiz" v-on:preview="preview($event)"></previewer>
</div>`;

        new site.Vue({
            el: element,
            template: template,
            site,
            data: function() {
                return {
                    quiz: quiz,
                    state: States.INITIAL,
                    page: 'initial',
                    file: null,
	                after: null
                };
            },
            components: {
                'initial': QuizVue,
                'question': QuestionVue,
                'answer': AnswerVue,
                'expired': ExpiredVue,
                'closed': ClosedVue,
                'results': ResultsVue,
                'previewer': PreviewerVue,
                'preview': PreviewVue
            },
            mounted() {
                if(this.quiz.expired === true) {
                    this.page = 'expired';
                } else if(this.quiz.closed === true) {
                    this.page = 'closed';
                }

                this.after = document.getElementById('cl-quiz-after');
                if(this.after !== null) {
                	this.after.innerHTML = '';
                }
            },
            methods: {
                newState(state) {
                    switch(state) {
                        case States.START:
                            this.start();
                            break;

                        case States.QUESTION:
                            if(this.quiz.question < this.quiz.length) {
                                this.quiz.question++;
                                this.page = 'question';
                            } else {
                                this.page = 'results';
                                this.state = state;

                                if(this.after !== null) {
                                    this.after.innerHTML = '';
                                }
                            }
                            break;

                        case States.RESULTS:
                            this.page = 'results';
                            this.state = state;

	                        if(this.after !== null) {
		                        this.after.innerHTML = '';
	                        }
                            break;
                    }

                },
                start() {
                    this.state = States.QUESTION;
                    this.quiz.question = 1;
                    this.page = 'question';
                },
                answer(data) {
                    this.state = States.ANSWER;
                    this.page = 'answer';
                    this.quiz.answer = data.attributes.answer;
                },
                preview(file) {
                    this.file = file;
                    this.quiz.question = file;
                    this.state = States.PREVIEW;
                    this.page = 'preview';
                }
            }
        })

    }
}


