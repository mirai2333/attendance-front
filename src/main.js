import Vue from 'vue';
import router from './router';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import 'lib-flexible';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);

//过滤器
import Moment from 'moment';
Vue.filter('moment', function (value, formatString) {
  if (!value) {
    return value;
  }
  formatString = formatString || 'HH:mm';
  // return moment(value).format(formatString); // value可以是普通日期 20170723
  return Moment.unix(value).format(formatString); // 这是时间戳转时间
});

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

import App from './App.vue';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
