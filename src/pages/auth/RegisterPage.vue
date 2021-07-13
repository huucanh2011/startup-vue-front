<template>
  <ValidationObserver ref="form" v-slot="{ passes }">
    <form @submit.prevent="passes(onSubmit)" class="form">
      <app-input
        v-model="authData.name"
        rules="required|max:40"
        name="name"
        placeholder="Họ tên"
      />
      <app-input
        v-model="authData.email"
        rules="required|email|max:60"
        type="email"
        name="email"
        placeholder="Email"
      />
      <app-input
        v-model="authData.password"
        rules="required|min:6|max:60"
        type="password"
        name="password"
        placeholder="Mật khẩu"
      />
      <div class="text-center">
        <app-button type="submit" :loading="loading">Đăng ký</app-button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationObserver,
  },
  data() {
    return {
      authData: {
        isLogin: false,
        name: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", ["loading"]),
  },
  methods: {
    ...mapActions("auth", ["authenticateUser"]),
    async onSubmit() {
      const isValid = this.$refs.form.validate();
      isValid && (await this.authenticateUser(this.authData));
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
