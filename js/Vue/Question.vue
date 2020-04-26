<template>
  <div>
    <div v-if="question!==null">
      <h2 v-if="quiz.length > 1">Question {{quiz.question}} of {{quiz.length}}</h2>
      <p class="center" v-if="remainingSeconds !== null">{{remainingMinutes}}:{{remainingSecondsStr}} remaining!</p>
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
  import {States} from '../States';

  export default {
    data: function () {
      return {
        active: null,
        question: null,
        time: 0,
        mustProvideMessage: undefined,
        remainingMinutes: null,
        remainingSeconds: null,
        remainingSecondsStr: null
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
                  this.take(data.attributes);

                } else {
                  this.$site.toast(this, response);
                }
              })
              .catch((error) => {
                this.$site.toast(this, error);
              });
    },
    methods: {
      take(data) {
        this.active = true;
        this.question = data.question;
        this.time = data.time;
        this.mustProvideMessage = data.mustProvideMessage;

        const after = document.getElementById('cl-quiz-after');
        if (after !== null) {
          after.innerHTML = data.attributes.after;
        }

        // Support indicating to external Javascript that a quiz
        // question has been installed.
        this.$site.Vue.nextTick(() => {
          this.$site.message('cl-quiz-after-installed', null);
        });

        if (this.quiz.lightning !== null) {
          this.remainingMinutes = Math.floor(this.quiz.lightning / 60);
          this.remainingSeconds = this.quiz.lightning % 60;
          this.remainingSecondsStr = this.remainingSeconds < 10 ? '0' + this.remainingSeconds : this.remainingSeconds;
          this.timer();
        }
      },
      timer() {
        setTimeout(() => {
          if(!this.active) {
            return;
          }

          this.remainingSeconds--;
          this.remainingSecondsStr = this.remainingSeconds < 10 ? '0' + this.remainingSeconds : this.remainingSeconds;
          if (this.remainingSeconds === 0 && this.remainingMinutes === 0) {
            // Question has timed out
            this.$emit('new-state', States.QUESTION);
            return;
          }

          if (this.remainingSeconds < 0) {
            this.remainingMinutes--;
            this.remainingSeconds = 59;
            this.remainingSecondsStr = '59';
          }

          this.timer();
        }, 1000)
      },
      proceed() {

      },
      submit() {
        const formData = QuizData.get(this, this.mustProvideMessage);
        if (formData === null) {
          return;
        }

        this.$site.api.post(`/api/quiz/answer/${this.quiz.token}/${this.quiz.question}`, formData)
                .then((response) => {
                  if (!response.hasError()) {
                    let data = response.getData('quiz-answer');
                    this.active = false;
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