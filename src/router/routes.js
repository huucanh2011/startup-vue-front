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
        path: '/products',
        name: 'product-search',
        component: () => import('@/pages/product/ProductSearchPage')
      },
    ]
  },
];