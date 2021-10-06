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
</section>
</template>
<script>
import Release from '@/components/Music/Release.vue';

export default {
  components: { Release },
  setup() {
    const releases = [
      {
      title: 'Universum',
      image: '/img/Universum.jpg',
      stores: [
        {
          name: 'Spotify',
          url: 'https://open.spotify.com/album/0BN0xpxAHezGXl0pkpVlz3',
        },
        {
          name: 'Apple Music',
          url: 'https://music.apple.com/us/album/universum-ep/1578188575',
        },
        {
          name: 'Deezer',
          url: 'https://www.deezer.com/es/album/247118332',
        },
      ],
    },
    {
      title: 'Domerita Torilca',
      image: '/img/DomeritaTorilaca.jpg',
      stores: [
        {
          name: 'Spotify',
          url: 'https://open.spotify.com/album/0rwjpZx3zB2SygpRnHsVR8',
        },
        {
          name: 'Apple Music',
          url: 'https://music.apple.com/us/album/domerita-torilaca/1583701314',
        },
        {
          name: 'Deezer',
          url: 'https://www.deezer.com/es/album/255443772',
        },
      ],
    },
    {
      title: 'Primitivos',
      image: '/img/Primitivos.png',
      stores: [
        {
          name: 'Proximamente',
          url: 'https://onerpm.link/893925697370',

        },
      ],
    }
    ];
    return {
      releases,
    };
  }
};

</script>
<style scoped>
.header-image {
    background-image: url("/img/VladzurHeader.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #999;
}
</style>
