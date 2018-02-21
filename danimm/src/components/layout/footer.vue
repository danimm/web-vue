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
          li.collection-item.blue.darken-2.language {{ $t('language')}}
            a.link(@click="selectLang('es')")
              .img-containerSp
                img.flag(:src="spain")
            a.link(@click="selectLang('en')")
              .img-containerEn
                img.flag(:src="england")
    .footer-copyright
      .container.center-align {{ $t('footer.created')}} {{ $t('name')}}

</template>

<script>
export default {
  data () {
    return {
      england: 'src/assets/images/england.svg',
      spain: 'src/assets/images/spain.svg',
      german: 'src/assets/images/german.svg'
    }
  },

  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
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
  .img-containerSp {
    position: absolute;
    left: 102px;
    top: 7px;
  }
  .img-containerEn {
    position: absolute;
    left: 142px;
    top: 7px;
  }
  .flag {
    width: 26px;
    height: 26px;
  }
  .language {
    position: relative;
  }
</style>
