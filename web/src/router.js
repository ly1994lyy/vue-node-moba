import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Article from './views/Article.vue'
import Hero from './views/Hero.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children:[
        {path:'/',name:'home',component:Home},
        {path:'/articles/:id',name:'article',component:Article,props:true}
      ]
    },
    {
      path:'/heroes/:id',
      name:'hero',
      component:Hero,
      props:true,
    }
  ]
})
