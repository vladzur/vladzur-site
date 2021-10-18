<template>
  <div class="container">
    Lanzamientos
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
