<template>
  <form @submit.prevent="onSubmit" class="form">
    <app-input v-model="authData.name" type="text" placeholder="Họ tên" />
    <app-input v-model="authData.email" type="email" placeholder="Email" />
    <app-input
      v-model="authData.password"
      type="password"
      placeholder="Mật khẩu"
    />
    <div class="text-center">
      <app-button type="submit">Đăng ký</app-button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      authData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["authenticateUser"]),
    async onSubmit() {
      this.authenticateUser({ isLogin: false, ...this.authData });
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
