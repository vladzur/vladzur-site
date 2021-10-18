import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueGtag from "vue-gtag";
import store from './store'

const app = createApp(App).use(store);

app.use(VueGtag, {
  config: { id: "G-WHP0LHHRTE" }
}, router);

app.use(router);
app.mount('#app');
