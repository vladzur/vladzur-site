const state = {
  releases: [
    {
      title: "Primitivos",
      image: "/img/Primitivos.png",
      stores: [
        {
          name: "Spotify",
          url: "https://open.spotify.com/album/0uaEUf047X4ObQTQNnaFhs"
        },
        {
          name: "Apple Music",
          url: "https://music.apple.com/cl/album/primitivos-ep/1587819126"
        },
        {
          name: "Deezer",
          url: "https://www.deezer.com/es/album/260991272"
        }
      ]
    },
    {
      title: "Domerita Torilca",
      image: "/img/DomeritaTorilaca.jpg",
      stores: [
        {
          name: "Spotify",
          url: "https://open.spotify.com/album/0rwjpZx3zB2SygpRnHsVR8"
        },
        {
          name: "Apple Music",
          url: "https://music.apple.com/us/album/domerita-torilaca/1583701314"
        },
        {
          name: "Deezer",
          url: "https://www.deezer.com/es/album/255443772"
        }
      ]
    },
    {
      title: "Universum",
      image: "/img/Universum.jpg",
      stores: [
        {
          name: "Spotify",
          url: "https://open.spotify.com/album/0BN0xpxAHezGXl0pkpVlz3"
        },
        {
          name: "Apple Music",
          url: "https://music.apple.com/us/album/universum-ep/1578188575"
        },
        {
          name: "Deezer",
          url: "https://www.deezer.com/es/album/247118332"
        }
      ]
    },
  ]
};

const getters = {
  releases: state => state.releases,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
