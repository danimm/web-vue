<template lang="pug">
  .container.description
    .section
      .row
        .col.s12.m6
          .icon-block
            h2.center.brown-text
              i.material-icons.blue-text code
            h5.center {{ $t('descriptionComp.item1.title')}}
            p.light {{ $t('descriptionComp.item1.msg') }}
        .col.s12.m6
          .icon-block
            h2.center.brown-text
              i.material-icons.blue-text devices
            h5.center {{ $t('descriptionComp.item2.title')}}
            p.light {{ $t('descriptionComp.item2.msg') }}
      .row
        .col.s12
          .icon-block
            h2.center.brown-text
              i.material-icons.blue-text laptop
            h5.center {{ $t('descriptionComp.item3.title')}}
            p.light {{ $t('descriptionComp.item3.msg') }}
              a(href="https://platzi.com/@Danimm/" target="_blank") {{ $t('descriptionComp.item3.profile') }}
</template>

<script>
export default {
  data () {
    return {
      msg: "I'm specializing in Frontend Web Development, with the current Web standards and always looking for new front-end frameworks to add to my development stack.",
      msg2: "Always looking for the best user experience using responsive designs, with frameworks like Bootstrap, Materialize-css (used in this website), Foundation... It doesn't matter the device or the resolution, you will always have a good user experience.",
      msg3: "In the world of web development, you have to learn constantly! That's why I study daily to be always updated with the new frameworks and libraries. One of my favorite places to study is in Platzi. It is an online education platform with more than 500,000 students. You can check my profile "
    }
  }
}
</script>

<style lang="css">
</style>
