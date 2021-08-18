<template>
  <section class="hero is-danger is-halfheight header-image">
  <div class="hero-body">
    <div class="container has-text-right">
      <p class="title">
        vladzur
      </p>
      <p class="subtitle">
        music - software
      </p>
    </div>
  </div>
</section>
<section class="section">
  <div class="container is-dark">
    <div class="columns">
      <div class="column is-half">
        <spotify />
      </div>
      <div class="column is-half">
        <portaldisc />
      </div>
    </div>
  </div>
</section>
</template>
<script>
import Spotify from '@/components/Music/Spotify.vue';
import Portaldisc from '@/components/Music/Portaldisc.vue';

export default {
  components: { Spotify, Portaldisc },
};

</script>
<style scoped>
.header-image {
    background-image: url("/img/background1.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #999;
}
</style>
