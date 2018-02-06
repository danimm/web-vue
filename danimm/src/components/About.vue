<template lang="pug">
  .container.aboutME.scrollspy
    .section
      h4.center-align About me
      .row
        .col.s12.m6
          .image-container
            img.imagen.circle.responsive-img(src="../assets/images/daniel.jpg", alt="Imagen Daniel")
        .col.s12.m6
          p.left-align.light {{ msg1 }}
          p.left-align.light {{ msg2 }}
          p.left-align.light {{ msg3 }}
            router-link(to="portfolio") personal Portfolio
      dm-description
</template>

<script>

import DmDescription from './Description.vue'
export default {
  data () {
    return {
      msg1: 'I am passionate about technology. I am a technician in Systems Administration, but the last years I am directing my career to the Web development.',
      msg2: 'I love learning the new technologies of modern web development and creating personal projects to put my knowledge into practice.',
      msg3: 'You can find all my personal projects in '
    }
  },

  components: { DmDescription }
}
</script>

<style lang="css">
  .aboutME{
    margin-top: 60px;
  }
  .image-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imagen {
    border: 5px solid #1976D2;
    max-height: 280px;
  }
</style>
