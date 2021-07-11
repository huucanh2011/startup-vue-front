<template>
  <form @submit.prevent="onSubmit" class="form">
    <app-input v-model="authData.email" type="email" placeholder="Email" />
    <app-input
      v-model="authData.password"
      type="password"
      placeholder="Mật khẩu"
    />
    <div class="text-center">
      <app-button type="submit">Đăng nhập</app-button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      authData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["authenticateUser"]),
    onSubmit() {
      this.authenticateUser({ isLogin: true, ...this.authData });
    },
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
