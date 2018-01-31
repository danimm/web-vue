<template lang="pug">
  #index-banner.parallax-container.valign-wrapper
    .section.no-pad-bot
      .container
        .row
          h1.header.center-align.white-text {{ name }}
        .row
          h5.header.center-align.col.s12.light {{ occupation }}
        .row.center-align
          router-link.btn-large.waves-effect.waves-light.blue.darken-2(to="about", class="white-text") Conóceme un poco más
</template>

<script>
export default {
  data () {
    return {
      name: 'Daniel Muñoz Martín',
      occupation: 'Frontend Web Developer'
    }
  }
}
</script>

<style lang="css">
  .parallax-container {
  line-height: 0;
  height: auto;
  color: rgba(255,255,255,.9);
  width: 100%;
  background-image: url(../assets/images/background.min.jpg);
  background-position: 50% 50%;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  }
</style>
