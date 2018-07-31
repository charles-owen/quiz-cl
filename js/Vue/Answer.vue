<template>
  <div>
    <h2 v-if="quiz.length > 1">Question {{quiz.question}} of {{quiz.length}}</h2>
      <form ref="form" method="post" @submit.prevent="submit">
        <div v-html="quiz.answer"></div>
        <p v-if="quiz.question < quiz.length"><button type="submit">Next Question</button></p>
      </form>
    <div v-if="quiz.question >= quiz.length">
      <p class="done">This Quiz is Complete</p>
      <p class="center">You may <a @click.prevent="retake">retake the quiz</a> if you wish</p>
      <results :quiz="quiz"></results>
    </div>
  </div>
</template>

<script>
    import {States} from '../States';
    import ResultsVue from './Results.vue';

    export default {
        data: function () {
            return {
            }
        },
        props: [
            'quiz'
        ],
        components: {
            'results': ResultsVue
        },
        methods: {
            submit() {
                if(this.quiz.question < this.quiz.length) {
                    this.$emit('new-state', States.QUESTION);
                }
            },
            retake() {
                window.location.reload(true);
            }
        }
    }
</script>
