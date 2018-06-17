import Vue from 'vue';
import VueFire from 'vuefire';
import App from './App.vue'

Vue.use(VueFire);

// Initialize Firebase

Vue.config.productionTip = false;



new Vue({
  render: h => h(App),
  data: {
    test: 'Hello!'
  },

}).$mount('#app');
