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
                <router-link :to="link(user, tag)" v-if="quizResult(user, tag)!==null"><img :src="eye"></router-link></td>
              <td v-if="results !== null">{{total(user)}}</td>
            </tr>
          </table>
        </template>
      </membersfetcher>

    </div>
  </div>
</template>

<script>
  import MembersFetcherComponent from 'course-cl/js/Console/Members/MembersFetcherComponent.vue';

    export default {
        props: ['assigntag'],
        data: function() {
            return {
                quizTags: [],
                results: null,
                assignment: null,
                eye: Site.root + '/vendor/cl/site/img/eye16.png'
            }
        },
        methods: {
            process(results) {
                this.results = results;

                // Collect up the quiz tags
                for(let member in results) {
                    for(let quizTag in results[member]) {
                        if(this.quizTags.indexOf(quizTag) < 0) {
                            this.quizTags.push(quizTag);
                        }
                    }
                }

            },
            status(user, tag) {
                const result = this.quizResult(user, tag);
                if(result === null) {
                    return '';
                }

                return '' + result.points + '/' + result.maxpoints;
            },
            total(user) {
                if(this.results === null || this.assignment === null) {
                    return '';
                }

                let sum = 0;
                for(let tag of this.quizTags) {
                    const result = this.quizResult(user, tag);
                    if(result !== null) {
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
                if(this.results === null) {
                    return null;
                }

                if(this.results[user.id] !== undefined &&
                    this.results[user.id][tag] !== undefined) {
                    const result = this.results[user.id][tag];
                    return result;
                }

                return null;
            },
            link(user, tag) {
                return `${Site.root}/cl/console/quiz/result/${user.member.id}/${this.assignment.tag}/${tag}`;
            }
        },
        components: {
            'membersfetcher': MembersFetcherComponent
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

            Site.api.get('/api/quiz/all/' + this.assigntag, query)
                .then((response) => {
                    if(!response.hasError()) {
                        let data = response.getData('quiz-results-all');
                        if(data !== null) {
                            this.process(data.attributes.results);
                        }
                    } else {
                        Site.toast(this, response);
                    }

                })
                .catch((error) => {
                    console.log(error);
                    Site.toast(this, error);
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