<template>
  <div class="cl-results">
    <div v-if="tries !== null && tries.length > 0">
      <p>Your current best score for this quiz is {{high}}/{{quiz.points}}. The system retains your best
        result as your grade for a quiz.</p>
      <table class="small center">
        <tr>
          <th class="center">When Taken</th>
          <th>Finished?</th>
          <th>Points</th>
        </tr>
        <tr v-for="tried in tries" :class="high > 0 && tried.points === high ? 'best' : ''">
          <td>{{time(tried.start)}}</td>
          <td>{{elapsed(tried.start, tried.end)}}</td>
          <td>{{tried.points}}</td>
        </tr>
        <caption>Results for Quiz</caption>
      </table>
      <p>If a value is indicated in the Finished? column, the quiz
      was completed in that amount of time (in minutes and seconds).</p>
    </div>
    <p class="centerbox primary center" v-if="tries !== null && tries.length === 0">You have not yet completed the quiz, yet, so you do not have a score.</p>
  </div>
</template>

<script>

	export default {
		props: [
			'quiz'
		],
		data: function () {
			return {
				tries: null,
				high: 0
			}
		},
		mounted() {
			this.$site.api.get(`/api/quiz/results/${this.quiz.assigntag}/${this.quiz.quiztag}`, {})
				.then((response) => {
					if (!response.hasError()) {
						let data = response.getData('quiz-results');
						this.tries = data.attributes.tries;
						this.high = 0;
						for (let tried of this.tries) {
							if (+tried.points > +this.high) {
								this.high = tried.points;
							}
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
			time(value) {
				return this.$site.TimeFormatter.relativeUNIX(value)
			},
			elapsed(start, end) {
				if (end === null) {
					return '';
				}
				const diff = end - start;
				const min = Math.floor(diff / 60);
				const sec = diff % 60;
				return '' + min + ':' + (sec < 10 ? '0' : '') + sec;
			}
		}
	}

</script>
