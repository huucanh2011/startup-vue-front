<template>
  <form @submit.prevent="onSubmit" class="form">
    <app-input v-model="authData.email" type="email" placeholder="Email" />
    <div class="text-center">
      <app-button type="submit">Gửi về mail</app-button>
    </div>
  </form>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      authData: {
        email: "",
      },
    };
  },
  methods: {
    // ...mapActions("auth", ["login"]),
    // async onSubmit() {
    //   this.login(this.authData);
    // },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
</style>
