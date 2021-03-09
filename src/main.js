import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//===== Base.css =====//
import './assets/css/base.css';
//====================//

//===== icon =========//
import './assets/icon/iconfont.css';
import './assets/icon/iconfont.js';
//====================//

//===== components ===//
import './components/index.js'
//====================//

//===== Highlight  ===//
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
//====================//

//===== VueHighlight =//
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
//====================//

//===== KProgress ====//
import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);
//====================//

//===== ElementUI ====//
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//====================//

//===== Markdown ====//
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);
//====================//

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')