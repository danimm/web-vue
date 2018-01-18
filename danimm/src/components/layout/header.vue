<template lang="pug">
  nav.blue.darken-2(role="navigation")
    .nav-wrapper.container
      a(id="logo-container", class="brand-logo white-text scrollspy" href="#") DaniMM
      ul.right.hide-on-med-and-down
        li
          router-link(to="/", class="white-text") Inicio
        li
          router-link(to="about", class="white-text") Acerca de mi
        li
          router-link(to="description", class="white-text") Descripción
        li
          a.white-text(href="#") Portafolio

      ul(id="nav", class="side-nav blue darken-2")
        li
          router-link(to="/", class="white-text") Inicio
        li
          router-link(to="about", class="white-text") Acerca de mi
        li
          router-link(to="description", class="white-text") Descripción
        li
          a.white-text(href="#") Portafolio
      a(href="#", data-activates="nav-mobile", class="button-collapse white-text")
        i.material-icons menu

</template>

<script>
export default {

}
</script>

<style lang="css">
  img{
    max-width: 40px;
  }
</style>
