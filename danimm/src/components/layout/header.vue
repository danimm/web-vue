<template lang="pug">
  nav.blue.darken-2(role="navigation")
    .nav-wrapper.container
      a(id="logo-container", class="brand-logo white-text scrollspy" href="#") DaniMM
      ul.right.hide-on-med-and-down
        li
          router-link(to="/" class="white-text") Inicio
        li
          router-link(to="about" class="white-text") Acerca de mi
        li
          router-link(to="portfolio" class="white-text") Portafolio
        li
          router-link(to="skills" class="white-text") Habilidades
        li
          a.dropdown-button(data-activates="dropdown1") Idioma
            i.material-icons.right arrow_drop_down
      ul#dropdown1.dropdown-content
        li
          a(href="#")
            .img-container: img.language(src="../../assets/images/england.svg")
          a(href="#")
            .img-container: img.language(src="../../assets/images/german.svg")
          a(href="#")
            .img-container: img.language(src="../../assets/images/spain.svg")

      ul#nav-mobile.side-nav.blue.darken-2
        li
          router-link.white-text(to="/") Inicio
        li
          router-link.white-text(to="about") Acerca de mi
        li
          router-link.white-text(to="description") Portafolio
        li
          router-link(to="skills" class="white-text") Habilidades
        li
          a.dropdown-button(data-activates="dropdown2") Idioma
            i.material-icons.right arrow_drop_down
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
