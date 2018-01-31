<template lang="pug">

    #App
      dm-header

      router-view

      dm-footer

</template>

<script>
import DmHeader from '@/components/layout/header.vue'
import DmFooter from '@/components/layout/footer.vue'

export default {
  name: 'app',

  components: { DmHeader, DmFooter }
}
</script>

<style lang="stylus">
  @import "css/main.styl"
</style>
