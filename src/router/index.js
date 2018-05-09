import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
// import Home from '../pages/home'
// import Item from '../pages/item'
// import Score from '../pages/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children:[
        {
          path:"/",
          component:r=>require.ensure([],r=>require("../pages/home"),"home")
        },{
          path:"/item",
          component:r=>require.ensure([],r=>require("../pages/item"),"item")
        },{
          path:"/score",
          component:r=>require.ensure([],r=>require("../pages/score"),"score")
        },
      ]
    }
  ]
})
