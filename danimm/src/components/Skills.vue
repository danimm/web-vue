<template lang="pug">
  .container.skills
    .row
      .col.s10.push-s1.m12
        .card.hovereable
          .card-content.center-align
            h3.thin {{ $t('skillsComp.title')}}
            p {{ $t('skillsComp.msg')}}
          .card-tabs
            ul.tabs.tabs-fixed-width
              li.tab {{ $t('skillsComp.techs.dev') }}
          .card-content
            Skilldev
          .card-tabs
            ul.tabs.tabs-fixed-width
              li.tab {{ $t('skillsComp.techs.devtools') }}
          .card-content
            Skilldevtool
          .card-tabs
            ul.tabs.tabs-fixed-width
              li.tab {{ $t('skillsComp.techs.design') }}
          .card-content
            SkillDesign
          .card-tabs
            ul.tabs.tabs-fixed-width
              li.tab {{ $t('skillsComp.techs.js') }}
          .card-content
            Skilljs




</template>

<script>
import Skilldev from '@/components/skills/Dev.vue'
import Skilldevtool from '@/components/skills/Devtools.vue'
import Skilljs from '@/components/skills/Js.vue'
import SkillDesign from '@/components/skills/Design.vue'

export default {
  data () {
    return {
      techs: [
        { name: 'Development' },
        { name: 'DevTools' },
        { name: 'Design' },
        { name: 'Javascript' }
      ]
    }
  },
  components: { Skilldev, Skilldevtool, Skilljs, SkillDesign }
}
</script>

<style lang="css" scoped>

  .skills {
    margin-top: 30px;
  }

  .tabs .tab, .tabs .tab a:hover, .tabs .tab a.active, .tab a {
    background-color: #1976D2;
    color: white;
  }

  .tabs .indicator {
    background-color: white;
  }

  .determinate.blue.darken-2 {
    height: 23px;
  }

</style>
