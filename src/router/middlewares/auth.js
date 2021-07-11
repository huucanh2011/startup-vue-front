import store from '@/store';

export default (router) => {
  router.beforeEach((to, from, next) => {
    const meta = to.matched.some((record) => record.meta.auth);
    const user = store.state.auth.user;
    if (meta && !user) {
      next({ name: 'login' });
    }
    next();
  })
}