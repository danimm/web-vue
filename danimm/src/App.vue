<template lang="pug">

    #App
      dm-header
      dm-parallax1
      dm-about-me
      dm-description
      dm-footer

</template>

<script>
import DmHeader from '@/components/layout/header.vue'
import DmFooter from '@/components/layout/footer.vue'
import DmParallax1 from '@/components/parallax1.vue'
import DmAboutMe from '@/components/aboutme.vue'
import DmDescription from '@/components/description.vue'

export default {

  name: 'app',

  components: { DmHeader, DmFooter, DmParallax1, DmAboutMe, DmDescription },

  data () {
    return {
      name: 'Daniel Muñoz Martín'
    }
  }
}
</script>

<style lang="scss">
  p {
  line-height: 2rem;
  }
  nav ul a nav .brand-logo {
    color: #444;
  }
</style>
