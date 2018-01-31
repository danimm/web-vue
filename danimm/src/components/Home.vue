<template lang="pug">
    main
      DmParallax

</template>

<script>
import DmParallax from '@/components/Parallax.vue'

export default {

  name: 'app',

  components: { DmParallax }
}
</script>

<style lang="stylus">
  main
    flex 1 0 auto
</style>
