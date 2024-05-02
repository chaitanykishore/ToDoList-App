import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router instance
import store from './store'; // Import the Vuex store instance

createApp(App)
  .use(router) // Use the Vue Router instance
  .use(store) // Use the Vuex store instance
  .mount('#app');
