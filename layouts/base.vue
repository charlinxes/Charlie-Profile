<template>
  <div>
    <TopNav/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    TopNav,
    Footer,
  },
};
</script>
