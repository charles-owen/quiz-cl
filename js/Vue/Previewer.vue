<template>
  <div class="previewer">
    <h2>Staff Question Previews</h2>
    <p>These links allow you to preview quiz questions. If the question is randomly selected
      from multiple files, the files appear below the question. <span class="smallred">This part of the page appears for
staff members only.</span></p>

    <div class="small">
      <div v-for="question in previews" :key="question.num">
        <h3>Question {{question.num}}</h3>
        <ul v-if="question.files.length > 0">
          <li v-for="file in question.files"><a @click.prevent="preview(file)">{{file}}</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

    export default {
        props: [
            'quiz'
        ],
        data: function() {
            return {
                previews: []
            }
        },
        mounted() {
            for(let i=0; i<this.quiz.preview.length; i++) {
              this.previews.push({
                  num: i+1,
                  files: this.quiz.preview[i]
              })
            }
        },
        methods: {
          preview(file) {
              this.$emit('preview', file);
          }
        }
    }

</script>
