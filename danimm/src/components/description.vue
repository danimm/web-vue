<template lang="pug">
  .container.description
    .section
      .row
        .col.s12.m6
          .icon-block
            h2.center.brown-text
              i.material-icons.blue-text code
            h5.center Frontend
            p.light {{ msg }}
        .col.s12.m6
          .icon-block
            h2.center.brown-text
              i.material-icons.blue-text devices
            h5.center Responsive Design
            p.light {{ msg2 }}
      .row
        .col.s12
          .icon-block
            h2.center.brown-text
              i.material-icons.blue-text laptop
            h5.center 100% Autodidacta
            p.light {{ msg3 }}
</template>

<script>
export default {
  data () {
    return {
      msg: 'Especializándome en el Desarrollo de Páginas Web utilizando los estándares Web actuales y siempre al tanto de nuevos frameworks front-end que se utilizan en el desarrollo web moderno.',
      msg2: 'Siempre buscando la mejor experiencia de usuario utilizando diseños adaptables. Los elementos se ajustan a la perfección sin importar el dispositivo o la resolución.',
      msg3: 'Estudio constante y de manera diaria para estar actualizado a las últimas tendencias que se están usando en el desarrollo Web moderno actual.'
    }
  }
}
</script>

<style lang="css">
</style>
