import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Api from './services/api';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import NProgress from 'nprogress' // nprogress插件
import 'nprogress/nprogress.css' // nprogress样式

Vue.use(ElementUI);

Vue.config.productionTip = false; //生产环境提示，这里设置成了false
Vue.prototype.$ajax = Api; // 将api挂载到vue的原型上

NProgress.configure({ showSpinner: false }) //只关闭进度环

router.beforeEach((to, from, next) =>{ //进度条开始
  NProgress.start();
  if (to.matched.some((r) => r.meta.requireAuth)) {
    let token = localStorage.getItem('token');
    if (token) {   //判断是否已经登录
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}   //登录成功后重定向到当前页面
      });
    }
  } else {
    next();
  }
  //如果本地 存在 token 则 不允许直接跳转到 登录页面
  if(to.fullPath === "/login"){
    if(localStorage.getItem('token')){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }
})

router.afterEach(()=>{
  NProgress.done();
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
