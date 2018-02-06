<template lang="pug">
  .container.portfolio
    h1.center-align Personal Portfolio
    .row
      .col.s7.push-s3.center-align
        p {{ msg }}
        p {{ msg2 }}
    .row
      .col.s12.m6.l6(v-for="p in proyectos")
        .card.sticky-action.small
          .card-image.waves-effect.waves-block-waves-light
            img.activator(:src="p.src")
          .card-content
            span.card-title.center-align Description here!
          .card-action
            a.link(:href="p.url" target="_blank") {{ p.go }}
          .card-reveal
            span.card-title.center-align {{ p.title }}
              i.material-icons.right close
            p.center-align {{ p.description }}

</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      msg: 'In this section you will find a list of my personal projects, used to put into practice the new technologies that I am learning.',
      msg2: 'I add periodically in this section the personal projects that I am developing.',
      proyectos: [
        {
          title: 'Vue Music',
          description: 'Final project of the Vue.js course in Platzi.com, in which we use the Spotify API to make an online music player.',
          src: 'src/assets/images/projects/vuemusic.png',
          url: 'http://vue-music.now.sh',
          go: 'Go to de project!'
        },
        {
          title: 'API Last.fm',
          description: 'In this simple project to show a small list of artists using the last fm API.',
          src: 'src/assets/images/projects/vuebasic.png',
          url: 'http://vue-basic.surge.sh',
          go: 'Go to de project!'
        },
        {
          title: 'Manipulando el DOM',
          description: 'This is a project using the local storage to create a list of tasks.',
          src: 'src/assets/images/projects/vuelocalstorage.png',
          url: 'http://vue-local-storage.surge.sh',
          go: 'Go to de project!'
        },
        {
          title: 'Vue memory',
          description: 'This project is a game to memorize letters using only Javascript. Only for desktop.',
          src: 'src/assets/images/projects/vuememory.png',
          url: 'http://vue-memory.surge.sh',
          go: 'Go to de project!'
        },
        {
          title: 'Bootstrap-simple',
          description: 'A simple project only using the system of bootstrap columns and the most important classes.',
          src: 'src/assets/images/projects/bootstrap-simple.png',
          url: 'http://bootstrap-simple.surge.sh',
          go: 'Go to de project!'
        }
      ]
    }
  }
}
</script>

<style lang="css">
  .link {
    cursor: pointer;
  }
</style>
