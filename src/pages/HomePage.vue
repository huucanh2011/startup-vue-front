<template>
  <div>
    <div v-if="loggedIn">
      Hi {{ user.name }}, 
      <a href="#" @click="logout">Logout</a>
    </div>
    <div v-else>
      <router-link :to="{ name: 'login' }">Login</router-link> |
      <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
    Home page 
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('auth', ['user', 'loggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logout'])
  }
};
</script>
