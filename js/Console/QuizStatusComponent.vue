<template>
  <div class="content">
    <div class="full">

      <membersfetcher :fetching="results === null">
        <template slot-scope="fetcher">
          <table class="small">
            <tr>
              <th>User</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th class="small" v-for="tag in quizTags">{{tag}}</th>
              <th v-if="results !== null">Total</th>
            </tr>
            <tr v-for="user in fetcher.users">
              <td >{{user.userId}}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.roleName()}}</td>
              <td v-for="tag in quizTags">{{status(user, tag)}}
                <router-link :to="link(user, tag)" v-if="quizResult(user, tag)!==null"><img :src="root + '/vendor/cl/site/img/eye16.png'"></router-link></td>
              <td v-if="results !== null">{{total(user)}}</td>
            </tr>
          </table>
        </template>
      </membersfetcher>

    </div>
  </div>
</template>

<script>
  const MembersFetcherComponentVue = Site.MembersFetcherComponentVue;
  const ConsoleComponentBase = Site.ConsoleComponentBase;

  export default {
    'extends': ConsoleComponentBase,
    props: ['assigntag'],
    data: function () {
      return {
        quizTags: [],
        results: null,
        assignment: null
      }
    },
    methods: {
      process(results) {
        this.results = results;

        // Collect up the quiz tags
        for (let member in results) {
          if(!results.hasOwnProperty(member)) {
            continue;
          }

          for (let quizTag in results[member]) {
            if(!results[member].hasOwnProperty(quizTag)) {
              continue;
            }

            if (this.quizTags.indexOf(quizTag) < 0) {
              this.quizTags.push(quizTag);
            }
          }
        }

      },
      status(user, tag) {
        const result = this.quizResult(user, tag);
        if (result === null) {
          return '';
        }

        return '' + result.points + '/' + result.maxpoints;
      },
      total(user) {
        if (this.results === null || this.assignment === null) {
          return '';
        }

        let sum = 0;
        for (let tag of this.quizTags) {
          const result = this.quizResult(user, tag);
          if (result !== null) {
            sum += +result.points;
          }
        }
        return '' + sum + '/' + this.assignment.quiz;
      },
      /**
       * GEt a quiz result for a user if one exists, otherwise return null.
       * @param user User object
       * @param tag quiz tag
       * @returns {*}
       */
      quizResult(user, tag) {
        if (this.results === null) {
          return null;
        }

        const memberId = user.member.id;

        if (this.results[memberId] !== undefined &&
                this.results[memberId][tag] !== undefined) {
          return this.results[memberId][tag];
        }

        return null;
      },
      link(user, tag) {
        return `${Site.root}/cl/console/quiz/result/${user.member.id}/${this.assignment.tag}/${tag}`;
      }
    },
    components: {
      'membersfetcher': MembersFetcherComponentVue
    },
    mounted() {
      const member = this.$store.state.user.user.member;
      let query = {
        semester: member.semester,
        section: member.section
      };

      this.section = this.$store.getters['course/section'](member.semester, member.section);
      this.assignment = this.section.getAssignment(this.assigntag);

      this.$parent.setTitle(': ' + this.assignment.shortname + ' Quiz Status');

      this.$site.api.get('/api/quiz/all/' + this.assigntag, query)
              .then((response) => {
                if (!response.hasError()) {
                  let data = response.getData('quiz-results-all');
                  if (data !== null) {
                    this.process(data.attributes.results);
                  }
                } else {
                  this.$site.toast(this, response);
                }

              })
              .catch((error) => {
                console.log(error);
                this.$site.toast(this, error);
              });
    }
  }
</script>

<style lang="scss" scoped>
table {
  td {
    text-align: center;
  }

  td:nth-child(1),  td:nth-child(2),  td:nth-child(3),  td:nth-child(4) {
    text-align: left;
  }
}
</style>