<template lang="pug">
  nav.blue.darken-2(role="navigation")
    .nav-wrapper.container
      a(id="logo-container", class="brand-logo white-text scrollspy" href="#") DaniMM
      ul.dropdown-content#dropdown1
        li
          a(@click="selectLang('es')")
            .img-container
              img.language(:src="spain")
        li
          a(@click="selectLang('en')")
            .img-container
              img.language(:src="england")
        li
          a(@click="selectLang('de')")
            .img-container
              img.language(:src="german")

      ul.right.hide-on-med-and-down
        li
          router-link(to="/" class="white-text") {{ $t('home')}}
        li
          router-link(to="about" class="white-text") {{ $t('about')}}
        li
          router-link(to="portfolio" class="white-text") {{ $t('portfolio')}}
        li.language
          router-link(to="skills" class="white-text") {{ $t('skills')}}
        li.collection-item.blue.darken-2 {{ $t('language')}}
          a.link(@click="selectLang('es')")
            .img-containerSp
              img.flag(:src="spain")
          a.link(@click="selectLang('en')")
            .img-containerEn
              img.flag(:src="england")

      ul#nav-mobile.side-nav.blue.darken-2.center-align
        li
          router-link.white-text(to="/") {{ $t('home')}}
        li
          router-link.white-text(to="about") {{ $t('about')}}
        li
          router-link.white-text(to="portfolio") {{ $t('portfolio')}}
        li.language
          router-link(to="skills" class="white-text") {{ $t('skills')}}
        li {{ $t('language')}}
          a.link(@click="selectLang('es')")
            .img-containerSpMobile
              img.flag(:src="spain")
        li
          a.link(@click="selectLang('en')")
            .img-containerEnMobile
              img.flag(:src="england")

      a.button-collapse.white-text(data-activates="nav-mobile")
        i.material-icons menu

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
  .img-containerSp {
    position: absolute;
    right: -40px;
    top: 7px;
  }
  .img-containerEn {
    position: absolute;
    right: -80px;
    top: 7px;
  }
  .flag {
    width: 26px;
    height: 26px;
  }
  .language {
    position: relative;
  }

  ul.dropdown-content a {
    color: white;
    background-color: #d9e8f4;
  }
</style>
