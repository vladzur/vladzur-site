const state = {
  playlists: [
    {
      title: "Dark Ambient Collection",
      image: "/img/DARK.jpg",
      url: "https://open.spotify.com/playlist/39u1Zw8U7SFxQ58v9Etcbn"
    },
    {
      title: "Halloween Atmosphere",
      image: "/img/halloween.jpg",
      url: "https://open.spotify.com/playlist/6FSHtXpHCiqdU6RNir9EBl"
    },
    {
      title: "Sounds of Mistery",
      image: "/img/sounds_of_mistery.jpg",
      url: "https://open.spotify.com/playlist/089Cl6jXDr5MnrfGHMBSWp"
    },
  ]
};

const getters = {
  playlists: state => state.playlists,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
