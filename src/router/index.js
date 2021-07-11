import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

import store from '../store';
import globalMiddleware from './middlewares/global-middleware';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

sync(store, router);
globalMiddleware(router);

export default router;