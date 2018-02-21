<template lang="pug">
  .description
    .row
      .col.s12.l4.m6
        .icon-block
          h2.center.brown-text
            i.material-icons.blue-text code
          h5.center {{ $t('descriptionComp.item1.title')}}
          p.light {{ $t('descriptionComp.item1.msg') }}
      .col.s12.l4.m6
        .icon-block
          h2.center.brown-text
            i.material-icons.blue-text devices
          h5.center {{ $t('descriptionComp.item2.title')}}
          p.light {{ $t('descriptionComp.item2.msg') }}
      .col.s12.l4.m6.push-m3
        .icon-block
          h2.center.brown-text
            i.material-icons.blue-text laptop
          h5.center {{ $t('descriptionComp.item3.title')}}
          p.light {{ $t('descriptionComp.item3.msg') }}
            a(href="https://platzi.com/@Danimm/" target="_blank") {{ $t('descriptionComp.item3.profile') }}
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
