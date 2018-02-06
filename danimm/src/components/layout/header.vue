<template lang="pug">
  nav.blue.darken-2(role="navigation")
    .nav-wrapper.container
      a(id="logo-container", class="brand-logo white-text scrollspy" href="#") DaniMM
      ul.right.hide-on-med-and-down
        li
          router-link(to="/" class="white-text") Home
        li
          router-link(to="about" class="white-text") About me
        li
          router-link(to="portfolio" class="white-text") Portfolio
        li
          router-link(to="skills" class="white-text") Skills

      ul#nav-mobile.side-nav.blue.darken-2
        li
          router-link.white-text(to="/") Home
        li
          router-link.white-text(to="about") About me
        li
          router-link.white-text(to="portfolio") Portfolio
        li
          router-link(to="skills" class="white-text") Skills
      a.button-collapse.white-text(data-activates="nav-mobile")
        i.material-icons menu

</template>

<script>
export default {
  data () {
    return {
      url: 'src/assets/images/england.svg'
    }
  }

}
</script>

<style lang="css" scoped>
  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
  .language {
    width: 30px;
    height: 30px;
  }
</style>
