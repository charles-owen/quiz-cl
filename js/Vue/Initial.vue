<template>
  <div>
    <div v-html="quiz.splash"></div>

    <p class="center" v-if="quiz.lightning === null">This quiz has no specified time limit.</p>
    <p v-if="quiz.lightning !== null" class="centerbox seconda center">This is a lightning quiz.
      You have {{quiz.lightning}} seconds to answer each question.</p>

    <template v-if="allowedTries === 0">
      <p>When ready, <a v-on:click.prevent="proceed()">click to proceed to the quiz.</a> You can also
      <a v-on:click.prevent="results()">jump directly to your quiz results.</a></p>
    </template>
    <template v-else>
      <template v-if="numTries < allowedTries">
        <p class="center" v-if="allowedTries > 0">You have {{allowedTries - numTries}} {{(allowedTries - numTries) > 1 ? 'tries' : 'try' }} left.</p>
        <p>When ready, <a v-on:click.prevent="proceed()">click to proceed to the quiz.</a> You can also
          <a v-on:click.prevent="results()">jump directly to your quiz results.</a></p>
      </template>
      <template v-else>
        <p>You have completed your maximum number of tries for this quiz and can no longer take it. You can
          <a v-on:click.prevent="results()">jump directly to your quiz results.</a></p>
      </template>
    </template>

  </div>
</template>

<script>
  import {States} from '../States';

  export default {
    props: [
      'quiz'
    ],
    data: function() {
      return {
        'numTries': 0,
        'allowedTries': 0,
        'numFinished': 0
      }
    },
    mounted() {
      this.allowedTries = +this.quiz['allowed-tries'];
      this.numTries = +this.quiz['num-tries'];
      this.numFinished = +this.quiz['num-finished'];
    },
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
