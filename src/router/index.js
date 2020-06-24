import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home'
import News from '@/Home/components/news.vue'
import gpublic from '@/Home/components/Gpublic.vue'
import spublic from '@/Home/components/Spublic.vue'
import lpublic from '@/Home/components/Lpublic.vue'
import hpublic from '@/Home/components/Hpublic.vue'
import detail from '@/Home/components/detail.vue'
import libiary from '@/Library/Library'
import read from '@/Library/components/read.vue'
import passport from '@/Passport/Passport'
import game from '@/Game/game'
import message from '@/Message/Message'
import user from '@/Login/User'
import login from '@/Login/components/login.vue'
import register from '@/Login/components/register.vue'
import housetest from '@/Test/house.vue'
import loading from '@/loading/loading.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'/news',
      children:[
        {path:'/news',name:'news',component:News},
        {path:'/gpublic',name:'gpublic',component:gpublic},
        {path:'/spublic',name:'spublic',component:spublic},
        {path:'/lpublic',name:'lpublic',component:lpublic},
        {path:'/hpublic',name:'hpublic',component:hpublic}
      ]
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:detail
    },
    {
      path:'/library',
      name:'library',
      component:libiary
    },
    {
      path:'/book/:id',
      name:'book',
      component:read
    },
    {
      path:'/passport',
      name:'passport',
      component:passport
    },
    {
      path:'/game',
      name:'game',
      component:game
    },
    {
      path:'/message',
      name:'message',
      component:message
    },
    {
      path:'/',
      name:'user',
      component:user,
      redirect:'/login',
      children:[
        {path:'/login',name:'login',component:login},
        {path:'/register',name:'register',component:register}
      ]
    },
    {
      path:'/test/house',
      name:'housetest',
      component:housetest
    },
    {
      path:'/loading',
      name:'loading',
      component:loading
    }
  ]
})
