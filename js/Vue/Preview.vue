<template>
  <div class="preview">
    <div v-if="question!==null">
      <p class="preview" v-if="quiz.length > 1">Preview of {{quiz.question}}. Available to staff only.</p>
      <form ref="form" method="post" @submit.prevent="submit">
        <input type="hidden" name="question-time" :value="time">
        <div v-html="question"></div>
        <p><button type="submit">Submit</button></p>
        <hr>

        <h3 v-if="answers.length > 0">Answers</h3>
        <div v-for="answer in answers">
          <div v-html="answer"></div>
        </div>
        <div v-if="comment !== null">
          <h3>Comment</h3>
          <div v-html="comment" class="centerbox primary"></div>
        </div>
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
                comment: null,
                time: 0,
                mustProvideMessage: undefined
            }
        },
        props: [
            'quiz',
            'file'
        ],
        watch: {
            file(newQuiz, oldQuiz) {
                this.fetch();
            }
        },
        mounted() {
          this.fetch();
        },
        methods: {
            fetch() {
                const query = {file: this.file};
                this.$site.api.get(`/api/quiz/preview/${this.quiz.token}`, query)
                    .then((response) => {
                        if (!response.hasError()) {
                          let data = response.getData('quiz-question');
                          this.question = data.attributes.question;
                          this.time = data.attributes.time;
                          this.comment = data.attributes.comment;
                          this.answers = data.attributes.answers;
                          this.mustProvideMessage = data.attributes.mustProvideMessage;

	                        const after = document.getElementById('cl-quiz-after');
	                        if(after !== null) {
		                        after.innerHTML = data.attributes.after;
	                        }

                          this.$site.Vue.nextTick(() => {
	                          this.$site.message('cl-quiz-after-installed', null);
                          });
                        } else {
	                        this.$site.toast(this, response);
                        }
                    })
                    .catch((error) => {
	                    this.$site.toast(this, error);
                    });
            },
            proceed() {

            },
            submit() {
            	const formData = QuizData.get(this, this.mustProvideMessage);
            }
        }
    }

</script>