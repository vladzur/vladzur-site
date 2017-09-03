<template>
  <nav class="navbar">
    <div class="navbar-burger" @click="toggleMenu" :class="{'is-active': navmenu}">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="navbar-menu" :class="{'is-active': navmenu}">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item" exact>Inicio</nuxt-link>
        <nuxt-link to="/articles" class="navbar-item" exact>Articulos</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navmenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.navmenu = !this.navmenu
    }
  }
}
</script>
