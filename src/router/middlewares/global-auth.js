import store from '@/store';

export default (router) => {
  router.beforeEach(async (to, from, next) => {
    const token = store.state.auth.token;
    const user = store.state.auth.user;
    try {
      !user && token && (await store.dispatch('auth/me'));
    } catch (error) {
      console.error(error);
    }
    next();
  })
}