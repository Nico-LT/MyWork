import Vue from 'vue'
import Router from 'vue-router'
import MyWork from "../view/MyWork";
import LeftAside from "../components/LeftAside";
import Header from '../components/Header'


Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'MyWork',
      component: MyWork
    },
    {
      path: '/leftaside',
      name: 'LeftAside',
      component: LeftAside
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },


  ]
})
