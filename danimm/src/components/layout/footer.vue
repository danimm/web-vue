<template lang="pug">
  footer#footer.page-footer.blue.darken-2
    .row
      .col.m5.s12.push-m2
        h5.white-text Thank you for your visit!
        p.grey-text.text-lighten-4 {{ msg }}
        p {{ msg2 }}
          a.yellow-text(:href="`mailto:${mail}`") {{ mail }}
      .col.m3.s12.push-m2
        h5.white-text
        ul.collection.links-footer
          li.collection-item.blue.darken-2
            router-link(to="/", class="white-text") Home
          li.collection-item.blue.darken-2
            router-link(to="about", class="white-text") About me
          li.collection-item.blue.darken-2
            router-link(to="portfolio", class="white-text") Portfolio
          li.collection-item.blue.darken-2
            router-link(to="skills", class="white-text") Skills
    .footer-copyright
      .container.center-align Created by {{ name }}

</template>

<script>
export default {
  data () {
    return {
      msg: 'The purpose of this website is to have all my personal projects and knowledge in one place.',
      msg2: 'If you have any questions write me to: ',
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
