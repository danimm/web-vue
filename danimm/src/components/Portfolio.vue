<template lang="pug">
  .container.portfolio
    h1.center-align {{ $t('portfolioComp.title')}}
    .row
      .col.s7.push-s3.center-align
        p {{ $t('portfolioComp.msg1') }}
        p {{ $t('portfolioComp.msg2') }}
    .row
      .col.s12.m6.l6(v-for="p in proyectos")
        .card.sticky-action.small
          .card-image.waves-effect.waves-block-waves-light
            img.activator(:src="p.src")
          .card-content
            span.card-title.center-align {{ $t('portfolioComp.goDescription')}}
          .card-action
            a.link(:href="p.url" target="_blank") {{ $t('portfolioComp.goProject') }}
          .card-reveal
            span.card-title.center-align {{ p.title }}
              i.material-icons.right close
            p.center-align {{ p.description }}

</template>

<script>
import i18n from '@/i18n'
export default {
  name: 'portfolio',
  data () {
    return {
      proyectos: []
    }
  },

  mounted () {
    this.proyectos = i18n.messages.en.portfolioComp.projects
  }
}
</script>

<style lang="css">
  .link {
    cursor: pointer;
  }
</style>
