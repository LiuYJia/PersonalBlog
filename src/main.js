// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// import showdown from 'showdown';
// Vue.use(showdown);

Vue.config.productionTip = false

var vm = new Vue({
  data:{
    isShowTitle:false,
    titleText:'',
    activeTab:'',//记录列表页选中标签
    activeScrollTop:''//记录滚动条位置
  }
})
Vue.prototype.$headersObj = vm

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
