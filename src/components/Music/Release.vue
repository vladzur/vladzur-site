<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-square is-clickable">
        <img :src="release.image" alt="Arte de disco" @click="handleClick"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ release.title }}</p>
          <p class="subtitle is-6">@vladzur</p>
        </div>
      </div>

      <div class="content">
        <ul v-for="store in release.stores" :key="store.name">
        <li><a
          :href="store.url"
          rel="noopener"
          target="_blank"
        >
          {{ store.name }}
        </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['release'],
  setup(props) {
    const handleClick = () => {
      window.open(props.release.stores[0].url, '_blank')
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
