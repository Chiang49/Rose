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
        path: 'shop',
        name: 'shop',
        component: () => import('../views/Shop.vue'),
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/Product.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'problems',
        name: 'problems',
        component: () => import('../views/Problems.vue'),
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
