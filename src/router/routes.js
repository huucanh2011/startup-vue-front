export default [
  {
    path: '/',
    component: () => import('@/layouts/default/AppLayout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/HomePage')
      },
      {
        path: 'team',
        name: 'team',
        component: () => import('@/pages/TeamPage')
      },
      {
        path: 'products',
        name: 'product-search',
        component: () => import('@/pages/product/ProductSearchPage')
      },
      {
        path: 'products/:slug',
        name: 'product-detail',
        component: () => import('@/pages/product/ProductDetailPage')
      },
    ]
  },
  {
    path: '/auth',
    meta: { guest: true },
    component: () => import('@/layouts/auth/AuthLayout'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/auth/LoginPage')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/pages/auth/RegisterPage')
      },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: () => import('@/pages/auth/ForgotPasswordPage')
      },
      {
        path: 'reset-password',
        name: 'reset-password',
        component: () => import('@/pages/auth/ResetPasswordPage')
      },
    ]
  },
  {
    path: '/user',
    meta: { auth: true },
    component: () => import('@/layouts/default/AppLayout'),
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/pages/user/ProfilePage')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/pages/user/CartPage')
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/pages/user/CheckoutPage')
      }
    ]
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: () => import('@/pages/exception/403')
  },
  {
    path: '/server-error',
    name: 'server-error',
    component: () => import('@/pages/exception/500')
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('@/pages/exception/404')
  },
];