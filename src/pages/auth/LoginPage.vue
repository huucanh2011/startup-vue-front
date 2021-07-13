<template>
  <ValidationObserver ref="form" v-slot="{ passes }">
    <form @submit.prevent="passes(login)" class="form">
      <AppInput2
        v-model="authData.email"
        rules="required"
        type="email"
        placeholder="Email"
        name="email"
      />
      <AppInput2
        v-model="authData.password"
        rules="required"
        type="password"
        placeholder="Mật khẩu"
        name="password"
      />
      <!-- <validation-provider v-slot="{ errors }" name="email" rules="required">
        <app-input v-model="authData.email" type="email" placeholder="Email" />
        <span>{{ errors[0] }}</span>
      </validation-provider>
      <app-input
        v-model="authData.password"
        type="password"
        placeholder="Mật khẩu"
      /> -->
      <div class="text-center">
        <app-button type="submit">Đăng nhập</app-button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapActions } from "vuex";
import { ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationObserver,
  },
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
    async login() {
      const isValid = this.$refs.form.validate();
      isValid &&
        (await this.authenticateUser({ isLogin: true, ...this.authData }));
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
