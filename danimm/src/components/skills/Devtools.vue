<template lang="pug">
  div
    .row.valign-wrapper(v-for="d in devtools")
      .col.s10.offset-s1
        span.black-text {{ d.name }}
        span.right.black-text {{ d.progress }}
        .progress.blue-grey.lighten-5
          .determinate.blue.darken-2(role="progressbar" :class="d.id")
</template>

<script>
export default {
  name: 'Skilldevtool',
  data () {
    return {
      devtools: [
        { id: 'devtol1', name: 'Git/Github', progress: 80 },
        { id: 'devtol2', name: 'Webpack', progress: 70 }
      ]
    }
  }
}
</script>

<style lang="css">

.devtol1 { width:80% }
.devtol2 { width:70% }

</style>
