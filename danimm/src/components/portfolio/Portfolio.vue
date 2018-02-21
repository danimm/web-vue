<template lang="pug">
  .container.portfolio
    h1.center-align {{ $t('portfolioComp.title')}}
    .row
      .col.s12.m10.push-m1.l8.push-l2.center-align
        p {{ $t('portfolioComp.msg1') }}
        p {{ $t('portfolioComp.msg2') }}
    .row
      .col.s12.m6.l6
        dm-project1
      .col.s12.m6.l6
        dm-project2
      .col.s12.m6.l6
        dm-project3
      .col.s12.m6.l6
        dm-project4
      .col.s12.m6.l6
        dm-project5


</template>

<script>
import dmProject1 from '@/components/portfolio/Project1.vue'
import dmProject2 from '@/components/portfolio/Project2.vue'
import dmProject3 from '@/components/portfolio/Project3.vue'
import dmProject4 from '@/components/portfolio/Project4.vue'
import dmProject5 from '@/components/portfolio/Project5.vue'
export default {
  name: 'portfolio',

  components: { dmProject1, dmProject2, dmProject3, dmProject4, dmProject5 }
}
</script>

<style lang="css">
</style>
