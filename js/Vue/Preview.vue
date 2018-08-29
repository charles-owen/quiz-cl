<template>
  <div class="preview">
    <div v-if="question!==null">
      <p class="preview" v-if="quiz.length > 1">Preview of {{quiz.question}}. Available to staff only.</p>
      <form ref="form" method="post" @submit.prevent="submit">
        <input type="hidden" name="question-time" :value="time">
        <div v-html="question"></div>
        <p><button type="submit">Submit</button></p>
        <hr>

        <h3>Answers</h3>
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
    import {States} from '../States';

    export default {
        data: function() {
            return {
                question: null,
                comment: null,
                time: 0
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
                Site.api.get(`/api/quiz/preview/${this.quiz.token}`, query)
                    .then((response) => {
                        if (!response.hasError()) {
                            let data = response.getData('quiz-question');
                            this.question = data.attributes.question;
                            this.time = data.attributes.time;
                            this.comment = data.attributes.comment;
                            this.answers = data.attributes.answers;
                        } else {
                            Site.toast(this, response);
                        }
                    })
                    .catch((error) => {
                        Site.toast(this, error);
                    });
            },
            proceed() {

            },
            submit() {
                const form = this.$refs['form'];
                const formData = new FormData(form);
                const answer = formData.get('cl-answer');
                if(answer === null) {
                  Site.toast(this, 'You must choose an option');
                  return;
                }

            }
        }
    }

</script>