<template lang="pug">
  .card.sticky-action.small
    .card-image.waves-effect.waves-block-waves-light
      img.activator(:src="src")
    .card-content
      span.card-title.center-align {{ $t('portfolioComp.goDescription')}}
    .card-action
      a.link(:href="url" target="_blank") {{ $t('portfolioComp.goProject') }}
    .card-reveal
      span.card-title.center-align {{ $t('portfolioComp.projects[3].title') }}
        i.material-icons.right close
      p.center-align {{ $t('portfolioComp.projects[3].description') }}

</template>

<script>
export default {
  name: 'project4',
  data () {
    return {
      src: 'src/assets/images/projects/vuememory.png',
      url: 'http://vue-memory.surge.sh'
    }
  }
}
</script>

<style lang="css">
</style>
