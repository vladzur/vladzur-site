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
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
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
          to="/about"
        >
          About
        </router-link>
      </div>
    </div>
  </nav>
</template>
