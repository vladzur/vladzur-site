<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-square is-clickable">
        <img :src="playlist.image" alt="Playlist picture" @click="handleClick"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ playlist.title }}</p>
          <p class="subtitle is-6">@Spotify</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['playlist'],
  setup(props) {
    const handleClick = () => {
      window.open(props.playlist.url, '_blank')
    }
    return {
      handleClick
    }
  },
}
</script>

<style lang="scss">
.is-clickable {
  cursor: pointer;
}
</style>
