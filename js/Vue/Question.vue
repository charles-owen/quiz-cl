<template>
  <div>
    <div v-if="question!==null">
      <h2 v-if="quiz.length > 1">Question {{quiz.question}} of {{quiz.length}}</h2>
      <form ref="form" method="post" @submit.prevent="submit">
        <input type="hidden" name="question-time" :value="time">
        <div v-html="question"></div>
        <p><button type="submit">Submit</button></p>
      </form>
    </div>
  </div>
</template>

<script>
	import {QuizData} from '../QuizData';

	export default {
        data: function() {
            return {
                question: null,
                time: 0,
                mustProvideMessage: undefined
            }
        },
        props: [
            'quiz'
        ],
        mounted() {
            this.$site.api.post(`/api/quiz/question/${this.quiz.token}/${this.quiz.question}`, {})
                .then((response) => {
                    if (!response.hasError()) {
                        let data = response.getData('quiz-question');
                        this.question = data.attributes.question;
                        this.time = data.attributes.time;
	                      this.mustProvideMessage = data.attributes.mustProvideMessage;

                        const after = document.getElementById('cl-quiz-after');
                        if(after !== null) {
                        	after.innerHTML = data.attributes.after;
                        	this.$site.message('cl-quiz-after-installed', after);
                        }
                    } else {
	                    this.$site.toast(this, response);
                    }
                })
                .catch((error) => {
	                this.$site.toast(this, error);
                });
        },
        methods: {
            proceed() {

            },
            submit() {
	            const formData = QuizData.get(this, this.mustProvideMessage);
	            if(formData === null) {
	            	return;
              }

	            this.$site.api.post(`/api/quiz/answer/${this.quiz.token}/${this.quiz.question}`, formData)
                    .then((response) => {
                        if (!response.hasError()) {
                            let data = response.getData('quiz-answer');
                            this.$emit('answer', data);
                        } else {
	                        this.$site.toast(this, response);
                        }
                    })
                    .catch((error) => {
	                    this.$site.toast(this, error);
                    });

            }
        }
    }

</script>