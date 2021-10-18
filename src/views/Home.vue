<template>
  <section class="hero is-danger is-halfheight header-image">
  <div class="hero-body">
    <div class="container has-text-right">
      <p class="subtitle">
        electronic - experimental - drone - dark ambient
      </p>
    </div>
  </div>
</section>
<section class="section">
  <div class="container is-dark">
    <div class="columns">
      <div class="column">
        <release :release="releases[0]"/>
      </div>
      <div class="column">
        <release :release="releases[1]"/>
      </div>
      <div class="column">
        <release :release="releases[2]"/>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import Release from '@/components/Music/Release.vue';
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { Release },
  setup() {
    const store = useStore();
    const releases = computed(() => store.getters.releases);

    return {
      releases,
    };
  }
};

</script>
<style scoped>
.header-image {
    background-image: url("/img/VladzurHeader.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #999;
}
</style>
