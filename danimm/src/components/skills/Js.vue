<template lang="pug">
  div(v-if="ready")
    .row.valign-wrapper(v-for="j in javascripts")
      .col.s10.offset-s1
        span.black-text {{ j.name }}
        span.right.black-text {{ j.progress }} %
        .progress.blue-grey.lighten-5
          .determinate.blue.darken-2(role="progressbar" :class="j.id")
</template>

<script>
export default {
  name: 'skilljs',
  data () {
    return {
      javascripts: [
        { id: 'js1', name: 'VueJS', progress: 60 },
        { id: 'js2', name: 'Javascript', progress: 55 }
      ],
      ready: false
    }
  },
  mounted () {
    this.ready = true
  }
}
</script>

<style lang="css">

  .js1 { width:60% }
  .js2 { width:55% }


</style>
