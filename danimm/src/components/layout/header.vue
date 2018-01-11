<template lang="pug">
  nav.blue.darken-2(role="navigation")
    .nav-wrapper.container
      a(id="logo-container", class="brand-logo white-text scrollspy" href="#") DaniMM
      ul.right.hide-on-med-and-down
        li
          a.white-text(href="#") Inicio
        li
          a.white-text(href="#") Acerca de mí
        li
          a.white-text(href="#") Habilidades
        li
          a.white-text(href="#") Portafolio

      ul(id="nav", class="side-nav blue darken-2")
        li
          a.white-text(href="#") Inicio
        li
          a.white-text(href="#") Acerca de mí
        li
          a.white-text(href="#") Habilidades
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
</style>
