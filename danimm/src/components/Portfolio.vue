<template lang="pug">
  .container.portfolio
    h1.center-align Portafolio personal
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
            span.card-title.center-align {{ p.title }}
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
      msg: 'En este apartado se encuentra un listado de mis proyectos personales, utilizados para poner en práctica las nuevas tecnologías que voy aprendiendo.',
      msg2: 'Iré añadiendo todos los proyectos que vaya desarrollando en este apartado de la web.',
      proyectos: [
        {
          title: 'Vue Music',
          description: 'Proyecto final del curso de Vue.js en Platzi.com, en el cual utilizamos la API de Spotify para hacer un reproductor de música online.',
          src: 'src/assets/images/projects/vuemusic.png',
          url: 'http://vue-music.now.sh',
          go: 'Ir al proyecto'
        },
        {
          title: 'API Last.fm',
          description: 'En este proyecto mostramos un pequeño listado de artistas consumiendo la API de last fm.',
          src: 'src/assets/images/projects/vuebasic.png',
          url: 'http://vue-basic.surge.sh',
          go: 'Ir al proyecto'
        },
        {
          title: 'Manipulando el DOM',
          description: 'Este es un pequeño proyecto CRUD para manipular el DOM usando el Local Storage del navegador.',
          src: 'src/assets/images/projects/vuelocalstorage.png',
          url: 'http://vue-local-storage.surge.sh',
          go: 'Ir al proyecto'
        },
        {
          title: 'Vue memory',
          description: 'En este proyecto hacemos un juego de simon dice utilizando solamente Javascript.',
          src: 'src/assets/images/projects/vuememory.png',
          url: 'http://vue-memory.surge.sh',
          go: 'Ir al proyecto'
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
