<template>
  <div class="container">
    Releases
    <div class="columns">
      <div class="column" v-for="release in releases" :key="release">
        <release :release="release"/>
      </div>
    </div>
    Playlists
    <div class="columns">
      <div class="column" v-for="playlist in playlists" :key="playlist">
        <playlist :playlist="playlist"/>
      </div>
    </div>
  </div>
</template>

<script>
import Release from '@/components/Music/Release.vue'
import Playlist from '@/components/Music/Playlist.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Release,
    Playlist
  },
  setup() {
    const store = useStore();
    const releases = computed(() => store.getters.releases);
    const playlists = computed(() => store.getters.playlists);

    return {
      releases,
      playlists
    };
  }
}
</script>
