import store from '@/store';

export default (router) => {
  router.beforeEach((to, from, next) => {
    const meta = to.matched.some((record) => record.meta.guest);
    const user = store.state.auth.user;
    if (meta && user) {
      if (from.fullPath) {
        next(false);
      }
      next({ name: 'home' });
      console.log('This page allow access when you is guest!');
      return;
    } else {
      next();
    }
  })
}