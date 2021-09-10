<template>
  <section class="hero is-danger is-halfheight header-image">
  <div class="hero-body">
    <div class="container has-text-right">
      <p class="subtitle">
        electronic - experimental - drone - dark ambient
      </p>
    </div>
  </div>
</section>
<section class="section">
  <div class="container is-dark">
    <div class="columns">
      <div class="column">
        <spotify />
      </div>
      <div class="column">
        <portaldisc />
      </div>
      <div class="column">
        <bandcamp />
      </div>
    </div>
  </div>
</section>
</template>
<script>
import Spotify from '@/components/Music/Spotify.vue';
import Portaldisc from '@/components/Music/Portaldisc.vue';
import Bandcamp from '@/components/Music/Bandcamp.vue';

export default {
  components: { Bandcamp, Spotify, Portaldisc },
};

</script>
<style scoped>
.header-image {
    background-image: url("/img/vladzur_banner.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #999;
}
</style>
