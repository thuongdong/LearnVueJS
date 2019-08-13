import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)
import HelloWorld from '@/components/HelloWorld'
import UserList from '@/components/UserList'
import UserDetail from '@/components/UserDetail'
import UserEdit from '@/components/UserEdit'
import CreateUser from '@/components/CreateUser'
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/users',
      name: 'user-list',
      component: UserList
    },
    {
      path: '/users/:id',
      name: 'user-detail',
      component: UserDetail
    },
    {
      path: '/users/:id/edit',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/users-create',
      name: 'user-create',
      component: CreateUser
    },
  ]
})
