<template>
  <nav
    class="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <div class="navbar-item">
        <img
          src="/img/Vladzur.png"
          alt="Vladzur logo"
        >
      </div>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="isMobile = !isMobile"
        :class="{'is-active': isMobile}"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{'is-active': isMobile}"
    >
      <div class="navbar-start">
        <router-link
          class="navbar-item"
          active-class="is-active"
          to="/"
        >
          Home
        </router-link>

        <router-link
          class="navbar-item"
          active-class="is-active"
          to="/music"
        >
          Music
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isMobile = ref(false);

    return {
      isMobile
    }
  },
}
</script>
