<template>
  <div class="content">
    <div class="full">
      <fetcher :fetching="fetching">
        <div v-if="!fetching">
          <div class="cl-about">
            <p><span>Course Member: </span><span>{{quizUser.name}}</span></p>
            <p><span>Assignment: </span><span>{{assignment.name}}</span></p>
            <p><span>Quiz: </span><span>{{quiztag}}</span></p>
          </div>
          <table v-if="tries.length > 0" class="small center">
            <tr>
              <th></th>
              <th class="center">When Taken</th>
              <th>Finished?</th>
              <th>Points</th>
              <th>Max</th>
            </tr>
            <tr v-for="tried in tries" :class="tried.token === token ? 'selected':''">
              <td><a v-if="tried.token === token" @click.default="deleteTry(tried)"><img :src="root + '/cl/img/x.png'"></a></td>
              <td @click.default="selectTry(tried.token)">{{time(tried.start)}}</td>
              <td @click.default="selectTry(tried.token)">{{elapsed(tried.start, tried.end)}}</td>
              <td @click.default="selectTry(tried.token)">{{tried.points}}</td>
              <td @click.default="selectTry(tried.token)">{{tried.maxpoints}}</td>
            </tr>
          </table>
          <p class="center" v-else>No quiz tries!</p>

          <table v-if="answers !== null && answers.length > 0" class="small center">
            <tr>
              <th>#</th>
              <th>Points</th>
              <th>Asked</th>
              <th>Answered</th>
            </tr>
            <tr v-for="ans in answers" :class="answer !== null && ans.num === answer.num ? 'selected':''"
                @click.default="selectAnswer(ans.num)">
              <td>{{ans.num}}</td>
              <td>{{ans.points}}</td>
              <td>{{time(ans.questiontime)}}</td>
              <td>{{time(ans.answertime)}}</td>
            </tr>
          </table>
          <div v-if="answers !== null && answers.length === 0">
            <p class="centerbox primary center">No answers provided for this quiz try.</p>
          </div>

          <div class="cl-quiz" v-if="answer !== null">
            <div>
              <h2>Question: {{answer.num}} of {{answers.length}}</h2>
              <div class="question" v-html="answer.question"></div>
              <h3>Student answer:</h3>
              <pre class="code">{{answer.studentanswer}}</pre>
              <div v-if="answer.rightanswer.length > 0">
                <h3>Correct answer:</h3>
                <pre class="code">{{answer.rightanswer}}</pre>
              </div>

            </div>
          </div>
        </div>

      </fetcher>
    </div>
  </div>
</template>

<script>
  const FetcherVue = Site.FetcherVue;
  const ConsoleComponentBase = Site.ConsoleComponentBase;

  /*
answertime
num
points
question
questiontime
rightanswer
studentanswer
token
 */
  export default {
    'extends': ConsoleComponentBase,
    props: [
      'memberid', 'assigntag', 'quiztag'
    ],
    data: function () {
      return {
        fetching: true,
        quizUser: null,
        section: null,
        assignment: null,
        tries: null,
        token: null,
        answers: null,
        answer: null
      }
    },
    components: {
      'fetcher': FetcherVue
    },
    mounted() {
      this.$parent.setTitle(': Quiz Result');
      this.addNav2Link('Exit', 2, '/cl/console/quiz/results/' + this.assigntag);

      this.$site.api.get(`/api/quiz/result/${this.memberid}/${this.assigntag}/${this.quiztag}`, {})
              .then((response) => {
                if (!response.hasError()) {
                  this.quizUser = new Users.User(response.getData('quiz-user').attributes);
                  const member = this.quizUser.member;

                  this.section = this.$store.getters['course/section'](member.semester, member.section);
                  this.assignment = this.section.getAssignment(this.assigntag);

                  this.tries = response.getData('quiz-tries').attributes;

                  const answers = response.getData('quiz-answers');
                  if (answers !== null) {
                    this.token = answers.id;
                    this.answers = answers.attributes;
                    this.answer = this.answers.length > 0 ? this.answers[0] : null;
                  } else {
                    this.token = null;
                    this.answers = null;
                    this.answer = null;
                  }

                  this.fetching = false;


                } else {
                  this.$site.toast(this, response);
                }

              })
              .catch((error) => {
                console.log(error);
                this.$site.toast(this, error);
              });
    },
    methods: {
      time(value) {
        return this.$site.TimeFormatter.relativeUNIX(value);
      },
      elapsed(start, end) {
        if (end === null) {
          return '';
        }
        const diff = end - start;
        const min = Math.floor(diff / 60);
        const sec = diff % 60;
        return '' + min + ':' + (sec < 10 ? '0' : '') + sec;
      },
      selectTry(token) {
        //this.fetching = true;

        this.$site.api.get(`/api/quiz/result/token/${token}`, {})
                .then((response) => {
                  if (!response.hasError()) {
                    this.token = token;

                    const answers = response.getData('quiz-answers');
                    if (answers !== null) {
                      this.answers = answers.attributes;
                      this.answer = this.answers.length > 0 ? this.answers[0] : null;
                    } else {
                      this.answers = null;
                      this.answer = null;
                    }

                    this.fetching = false;
                  } else {
                    this.$site.toast(this, response);
                  }

                })
                .catch((error) => {
                  console.log(error);
                  this.$site.toast(this, error);
                });

      },
      selectAnswer(num) {
        this.answer = this.answers[num - 1];
      },
      deleteTry(tried) {
        const token = tried.token;

        new this.$site.Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete this quiz try?',
                this.$site.Dialog.MessageBox.OKCANCEL, () => {
                  this.$site.api.post('/api/quiz/result/token/' + token + '/delete', {})
                          .then((response) => {
                            if (!response.hasError()) {
                              // Remove this try from all available tries.
                              this.tries = this.tries.filter((value, index, arr) => {
                                return value.token !== token;
                              });

                              this.answers = null;
                              this.answer = null;

                              if(this.tries.length > 0) {
                                this.selectTry(this.tries[0].token);
                              } else {
                                this.token = null;
                              }
                            } else {
                              this.$site.toast(this, response);
                            }

                          })
                          .catch((error) => {
                            this.$site.toast(this, error);
                          });
                });
      }
    }
  }
</script>

<style lang="scss" scoped>

  div.cl-about {
    margin: 1em auto;
    display: table;

    p {
      display: table-row;

      span {
        display: table-cell;
        text-align: left;
      }

      span:first-child {
        text-align: right;
        padding-right: 1em;
      }
    }
  }

  tr {
    cursor: pointer;
  }

  tr:first-child {
    cursor: default;
  }

  tr.selected {
    td {
      background: #88ffff;
    }
  }

</style>
