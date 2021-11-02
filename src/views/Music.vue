<template>
  <div class="container">
    Releases
    <div class="columns">
      <div class="column" v-for="release in releases" :key="release">
        <release :release="release"/>
      </div>
    </div>
  </div>
</template>

<script>
import Release from '@/components/Music/Release.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Release
  },
  setup() {
    const store = useStore();
    const releases = computed(() => store.getters.releases);

    return {
      releases,
    };
  }
}
</script>
