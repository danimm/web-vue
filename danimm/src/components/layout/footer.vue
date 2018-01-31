<template lang="pug">
  footer#footer.page-footer.blue.darken-2
    .row
      .col.m5.s12.push-m2
        h5.white-text Acerca de..
        p.grey-text.text-lighten-4 {{ msg }}
        p {{ msg2 }}
          a.yellow-text(href="#") {{ mail }}
      .col.m3.s12.push-m2
        h5.white-text
        ul.collection.links-footer
          li.collection-item.blue.darken-2
            router-link(to="/", class="white-text") Inicio
          li.collection-item.blue.darken-2
            router-link(to="about", class="white-text") Acerca de mi
          li.collection-item.blue.darken-2
            router-link(to="portfolio", class="white-text") Portafolio
          li.collection-item.blue.darken-2
            a.white-text(href="#") Portafolio
    .footer-copyright
      .container.center-align Creada por {{ name }}

</template>

<script>
export default {
  data () {
    return {
      msg: 'El propósito de esta web es tener todos mis proyectos personales y conocimientos en un mismo lugar.',
      msg2: 'Cualquier pregunta no dudes en escribirme a ',
      mail: 'info@danimm.com',
      name: 'Daniel Muñoz Martín'
    }
  }
}
</script>

<style lang="css" scoped>
  ul{
    border:none;
  }
  li.collection{
    border-bottom: none;
  }
</style>
