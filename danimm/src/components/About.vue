<template lang="pug">
  #aboutme.container.aboutME.scrollspy
    .section
      .row
        .col.s12.m6
          .image-container
            img.imagen.circle.responsive-img(src="../assets/images/daniel.jpg", alt="Imagen Daniel")
        .col.s12.m6
          h3
            i.mdi-content-send.brown-text
          h4 Acerca de mi
          p.left-align.light {{ data1 }}
          p.left-align.light {{ data2 }}
</template>

<script>
export default {
  data () {
    return {
      data1: 'Me encanta todo lo relacionado con la tecnología desde que tengo uso de memoria. Soy técnico Superior en Administracion de Sistemas, pero ultimamente estoy dirigiendo mi carrera al mundo del desarrollo Web. Me encanta crear contenido y aprender todas las nuevas tecnologías que van apareciendo en la industria.',
      data2: 'Decidí crear esta web donde poder plasmar todos mis conocimientos y poder tener mi propio Portafolio personal donde podrás ver tanto los proyectos personales que voy realizando, como ejercicios o prácticas de los nuevos Frameworks que voy descrubiendo.'
    }
  }
}
</script>

<style lang="css">
  p {
  line-height: 2rem;
  }
  .aboutME{
    margin-bottom: 20px;
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
