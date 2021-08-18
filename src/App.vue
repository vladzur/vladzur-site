<template>
  <nav-menu/>
  <section>
    <router-view />
  </section>
</template>
<script>
import { defineComponent } from 'vue';
import NavMenu from '@/components/NavMenu.vue';

export default defineComponent({
  components: { NavMenu },

});
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
