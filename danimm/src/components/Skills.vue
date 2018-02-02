<template lang="pug">
  .container.skills
    .row
      .col.s10.push-s1
        .card.hovereable
          .card-content
            h3.thin Habilidades Frontend
            p Conoce en un rápido vistazo cuales son mis conocimientos en las principales tecnologías del desarrollo web moderno.
          .card-tabs
            ul.tabs.tabs-fixed-width
              li.tab(v-for="tech in techs")
                a(:href="tech.test") {{ tech.name }}
          .card-content
            #test1
              Skilldev
            #test2
              Skilldevtool
            #test3
              Skilljs



</template>

<script>
import Skilldev from '@/components/skills/Dev.vue'
import Skilldevtool from '@/components/skills/Devtools.vue'
import Skilljs from '@/components/skills/Js.vue'

export default {
  data () {
    return {
      techs: [
        { name: 'Desarrollo', test: '#test1' },
        { name: 'DevTools', test: '#test2' },
        { name: 'Javascript', test: '#test3' }
      ]
    }
  },
  components: { Skilldev, Skilldevtool, Skilljs }
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
