<template>
  <div>
    <div v-html="quiz.splash"></div>

    <p class="center" v-if="quiz.lightning === null">This quiz has no specified time limit.</p>
    <p v-if="quiz.lightning !== null" class="centerbox seconda center">This is a lightning quiz.
      You have {{quiz.lightning}} seconds to answer each question.</p>

    <p>When ready, <a v-on:click.prevent="proceed()">click to proceed to the quiz.</a> You can also
      <a v-on:click.prevent="results()">jump directly to your quiz results.</a></p>
  </div>
</template>

<script>
  import {States} from '../States';

  export default {
      props: [
          'quiz'
      ],
      methods: {
          proceed() {
              this.$emit('new-state', States.START);
          },
          results() {
              this.$emit('new-state', States.RESULTS);
          }
      }
  }

</script>
