import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Cookie from 'js-cookie';

const authToken = Cookie.get('auth.token');

axios.defaults.baseURL = process.env.API_URL || 'https://startup-spring-boot-api.herokuapp.com/api/v1/';
if (authToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

Vue.use(VueAxios, axios);