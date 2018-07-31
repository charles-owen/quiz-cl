<template>
  <div>
    <p class="centerbox comp">The quiz has expired and can no longer be taken. Quizzes expire at the time
      the assignment is due. </p>
    <p>You can proceed through the quiz for practice purposes, but new grades and
      submissions will not be possible.</p>

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
