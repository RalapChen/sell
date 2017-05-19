// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
/*import router from './router'*/
import VueRouter from 'vue-router'
/*import goods from '/components/goods/goods.vue'*/

Vue.use(VueRouter)
Vue.config.productionTip = false

/*let app=Vue.extend(App)*/

/*let  router=new VueRouter()

router.map({
  '/goods':{
    componment:goods
  }
})

router.start(app,"#app")*/
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    /*{
    path: '/goods',
    component: goods
    }*/
    /* ,
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/ratings',
      component: ratings
    }*/
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
let app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
