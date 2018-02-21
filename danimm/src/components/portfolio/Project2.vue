<template lang="pug">
  .card.sticky-action.small
    .card-image.waves-effect.waves-block-waves-light
      img.activator(:src="src")
    .card-content
      span.card-title.center-align {{ $t('portfolioComp.goDescription')}}
    .card-action
      a.link(:href="url" target="_blank") {{ $t('portfolioComp.goProject') }}
    .card-reveal
      span.card-title.center-align {{ $t('portfolioComp.projects[1].title') }}
        i.material-icons.right close
      p.center-align {{ $t('portfolioComp.projects[1].description') }}

</template>

<script>
export default {
  name: 'project2',
  data () {
    return {
      src: 'src/assets/images/projects/vuebasic.png',
      url: 'http://vue-basic.surge.sh'
    }
  }
}
</script>

<style lang="css">
</style>
