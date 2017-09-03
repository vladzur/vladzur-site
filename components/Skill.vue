<template>
  <div class="box">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <i v-for="n in 10" class="fa fa-star" :class="{starred: n <= stars}"></i>
  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: Number
    },
    name: {
      type: String
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.starred {
  color: #ed6c63;
}
</style>
