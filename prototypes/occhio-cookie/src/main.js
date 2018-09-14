import Vue from 'vue'
import App from './App.vue'
import wrap from '@vue/web-component-wrapper';
import CookieSettings from './components/cookie-settings';

const CustomElement = wrap(Vue, CookieSettings);

window.customElements.define('occhio-cookie-settings', CustomElement);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
