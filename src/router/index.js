import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/About.vue'),
      },
      {
        path: 'userProducts',
        name: 'products',
        component: () => import('../views/UserProducts.vue'),
      },
      {
        path: 'userProduct/:id',
        name: 'product',
        component: () => import('../views/UserProduct.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'problem',
        name: 'problem',
        component: () => import('../views/Problem.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/Products.vue'),
      }, {
        path: 'orders',
        component: () => import('../views/Dashboard/Orders.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
