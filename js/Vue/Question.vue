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
    import {States} from '../States';

    export default {
        data: function() {
            return {
                question: null,
                time: 0
            }
        },
        props: [
            'quiz'
        ],
        mounted() {
            Site.api.post(`/api/quiz/question/${this.quiz.token}/${this.quiz.question}`, {})
                .then((response) => {
                    if (!response.hasError()) {
                        let data = response.getData('quiz-question');
                        this.question = data.attributes.question;
                        this.time = data.attributes.time;
                    } else {
                        Site.toast(this, response);
                    }
                })
                .catch((error) => {
                    Site.toast(this, error);
                });
        },
        methods: {
            proceed() {

            },
            submit() {
                console.log('submit');
                console.log(this.$refs['form']);
                const form = this.$refs['form'];
                const formData = new FormData(form);
                const answer = formData.get('cl-answer');
                if(answer === null) {
                  Site.toast(this, 'You must choose an option');
                  return;
                }

                Site.api.post(`/api/quiz/answer/${this.quiz.token}/${this.quiz.question}`, formData)
                    .then((response) => {
                        if (!response.hasError()) {
                            console.log(response);
                            let data = response.getData('quiz-answer');
                            console.log(data);
                            this.$emit('answer', data);
                        } else {
                            Site.toast(this, response);
                        }
                    })
                    .catch((error) => {
                        Site.toast(this, error);
                    });

            }
        }
    }

</script>