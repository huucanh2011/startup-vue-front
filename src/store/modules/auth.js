import Vue from 'vue';
import Cookie from 'js-cookie';
import router from '@/router';
import { CLEAR_AUTH, SET_AUTH, SET_LOADING } from '../mutation-types';

const cookieStorageKeys = {
  authToken: 'auth.token',
  authTokenExpirationDate: 'auth.tokenExpirationDate'
}

const state = {
  user: null,
  token: Cookie.get(cookieStorageKeys.authToken),
  loading: false,
}

const getters = {
  user(state) {
    return state.user;
  },
  loggedIn(state) {
    return !!state.token;
  },
  loading(state) {
    return state.loading;
  }
}

const actions = {
  async authenticateUser({ commit, dispatch }, authData) {
    let authUrl = '/auth/login';
    if (!authData.isLogin) {
      authUrl = '/auth/register';
    }
    delete authData['isLogin'];
    try {
      commit(SET_LOADING, true);
      const { data, status } = await Vue.axios.post(authUrl, authData);
      if (data && status === 200) {
        commit(SET_AUTH, data);
        router.push({ name: 'home' })
      } else if (data && status === 201) {
        Vue.notify({
          text: data.message,
          type: 'success'
        })
        dispatch('authenticateUser', {
          email: authData.email,
          password: authData.password,
          isLogin: true
        })
      }
    } catch (error) {
      if (error.response) {
        Vue.notify({
          text: error.response.data.errors[0],
          type: 'error',
        })
      }
    } finally {
      commit(SET_LOADING, false)
    }
  },
  async me({ commit, dispatch }) {
    const token = Cookie.get(cookieStorageKeys.authToken);
    const expirationDate = Cookie.get(cookieStorageKeys.authTokenExpirationDate);
    if (new Date().getTime() > +expirationDate || !token) {
      console.log("No token or invalid token");
      dispatch('logout');
      return;
    }
    try {
      const { data, status } = await Vue.axios.post('/auth/me');
      if (data && status === 200) {
        commit(SET_AUTH, data)
      }
    } catch (error) {
      console.log(error);
      dispatch('logout');
    }
  },
  async forgotPassword({ commit }, authData) {
    try {
      commit(SET_LOADING, true);
      const { data, status } = await Vue.axios.post('/auth/forgot-password', authData);
      if (data && status === 200) {
        Vue.notify({
          text: data.message,
          type: 'success'
        })
        setTimeout(() => {
          router.push({ name: 'login' })
        }, 5000);
      }
    } catch (error) {
      if (error.response) {
        Vue.notify({
          text: error.response.data.errors[0],
          type: 'error'
        })
      }
    } finally {
      commit(SET_LOADING, false)
    }
  },
  logout({ commit }) {
    commit(CLEAR_AUTH);
    window.location.replace('/');
  }
}

const mutations = {
  [SET_AUTH](state, data) {
    state.user = data.user
    state.token = data.token
    Cookie.set(cookieStorageKeys.authToken, data.token)
    Cookie.set(cookieStorageKeys.authTokenExpirationDate, new Date().getTime() + Number.parseInt(86400000))
  },
  [CLEAR_AUTH](state) {
    state.user = null;
    state.token = null;
    Cookie.remove(cookieStorageKeys.authToken);
    Cookie.remove(cookieStorageKeys.authTokenExpirationDate);
  },
  [SET_LOADING](state, data) {
    state.loading = data;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}