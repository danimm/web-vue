<template lang="pug">
  footer#footer.page-footer.blue.darken-2
    .row
      .col.m5.s12.push-m2
        h5.white-text {{ $t('footer.title') }}
        p.grey-text.text-lighten-4 {{ $t('footer.msg1') }}
        p {{ $t('footer.msg2') }}
          a.yellow-text(:href="`mailto:${mail}`") {{ mail }}
      .col.m3.s12.push-m2
        h5.white-text
        ul.collection.links-footer
          li.collection-item.blue.darken-2
            router-link(to="/", class="white-text") {{ $t('home')}}
          li.collection-item.blue.darken-2
            router-link(to="about", class="white-text") {{ $t('about')}}
          li.collection-item.blue.darken-2
            router-link(to="portfolio", class="white-text") {{ $t('portfolio')}}
          li.collection-item.blue.darken-2
            router-link(to="skills", class="white-text") {{ $t('skills')}}
    .footer-copyright
      .container.center-align {{ $t('footer.created')}} Daniel Muñoz Martín

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
