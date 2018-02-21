<template lang="pug">
  div
    .row.valign-wrapper(v-for="dev in develops")
      .col.s10.offset-s1
        span.black-text {{ dev.name }}
        span.right.black-text {{ dev.progress }} %
        .progress.blue-grey.lighten-5
          .determinate.blue.darken-2(role="progressbar" :class="dev.id")
</template>

<script>
export default {
  name: 'skilldev',
  data () {
    return {
      develops: [
        { id: 'develop1', name: 'HTML5', progress: 80 },
        { id: 'develop2', name: 'CSS3', progress: 75 },
        { id: 'develop3', name: 'Javascript', progress: 55 },
        { id: 'develop4', name: 'Pug/Jade', progress: 90 }
      ]
    }
  }
}
</script>

<style lang="css">

  .develop1 { width:80% }
  .develop2 { width:75% }
  .develop3 { width:55% }
  .develop4 { width:90% }

</style>
