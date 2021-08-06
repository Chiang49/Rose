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
        component: () => import('../views/About.vue'),
      },
      {
        path: 'userProducts',
        component: () => import('../views/UserProducts.vue'),
      },
      {
        path: 'userProduct/:id',
        component: () => import('../views/UserProduct.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/Cart.vue'),
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
});

export default router;
