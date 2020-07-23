import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [{
    path: '/', //根路径
    redirect: '/booklist'
  },
  {
    path: '/popular',
    component: () => import('@/views/Popular/Popular.vue')
  },
  {
    path: '/booklist',
    component: () => import('@/views/Booklist/Booklist.vue'),
    children: [{
        path: '/',
        component: () => import('@/views/Booklist/BooklistChild/BooklistChild.vue'),
      },
      {
        path: 'search',
        component: () => import('@/views/Booklist/BookSearch/BookSearch.vue'),
      },
      {
        path: 'searching',
        component: () => import('@/views/Booklist/Searching/Searching.vue'),
      },
      {
        path: 'message',
        component: () => import('@/views/Booklist/BookMessage/BookMessage.vue'),
      }
    ]
  },
  {
    path: '/love',
    component: () => import('@/views/Love/Love.vue'),
    children: [{
        path: '/',
        component: () => import('@/views/Love/LoveChild/LoveChild.vue'),
      },
      {
        path: 'mybook',
        component: () => import('@/views/Love/MyBook/MyBook.vue'),
      },
      {
        path: 'bookcontent',
        component: () => import('@/views/Love/BookContent/BookContent.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

export default router