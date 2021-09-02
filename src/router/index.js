import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   // component: Home
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../pages/index')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "about" */ '../components/layout.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "about" */ '../pages/category.vue'),
    props: true,
    children: [
      {
        path: 'phone',
        name: 'Phone',
        component: () => import(/* webpackChunkName: "about" */ '../pages/phone.vue'),
      },
      {
        path: 'computer',
        name: 'Computer',
        component: () => import(/* webpackChunkName: "about" */ '../pages/computer.vue'),
      }]
  },
  {
    path: '/shopCart',
    name: 'ShopCart',
    component: () => import(/* webpackChunkName: "about" */ '../pages/shopCart.vue')
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: () => import(/* webpackChunkName: "about" */ '../components/navigation.vue')
  },
  {
    path: '/indexContent',
    name: 'IndexContent',
    component: () => import(/* webpackChunkName: "about" */ '../views/indexContent.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/goods/index'),
    children: [
      {
        path: '/detail',
        redirect: '/detail/shopDetail'
      },
      {
        path: 'shopDetail',
        name: 'ShopDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/goods/detail.vue'),
      },
      {
        path: 'shopService',
        name: 'ShopService',
        component: () => import(/* webpackChunkName: "about" */ '../views/goods/service.vue'),
      },
      {
        path: 'shopSpec',
        name: 'ShopSpec',
        component: () => import(/* webpackChunkName: "about" */ '../views/goods/spec.vue'),
      },
      {
        path: 'shopComments',
        name: 'ShopComments',
        component: () => import(/* webpackChunkName: "about" */ '../views/goods/comments.vue'),
      }]
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
