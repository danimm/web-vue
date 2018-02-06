<template lang="pug">
  div
    .row.valign-wrapper(v-for="d in designs")
      .col.s10.offset-s1
        span.black-text {{ d.name }}
        span.right.black-text {{ d.progress }} %
        .progress.blue-grey.lighten-5
          .determinate.blue.darken-2(role="progressbar" :class="d.id")
</template>

<script>
export default {
  name: 'skilljs',
  data () {
    return {
      designs: [
        { id: 'ds1', name: 'Bootstrap', progress: 70 },
        { id: 'ds2', name: 'Materialize-css', progress: 70 },
        { id: 'ds3', name: 'Foundation', progress: 60 },
        { id: 'ds4', name: 'Responsive Design', progress: 65 }
      ]
    }
  }
}
</script>

<style lang="css">

  .ds1 { width:70% }
  .ds2 { width:70% }
  .ds3 { width:60% }
  .ds4 { width:65% }


</style>
