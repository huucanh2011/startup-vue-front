<template>
  <ValidationObserver ref="form" v-slot="{ passes }">
    <form @submit.prevent="passes(onSubmit)" class="form">
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
        placeholder="Mật khẩu mới"
      />
      <div class="text-center">
        <app-button type="submit" :loading="loading">Cập nhật mật khẩu</app-button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ValidationObserver } from 'vee-validate';
export default {
  components: {
    ValidationObserver
  },
  data() {
    return {
      authData: {
        email: '',
        password: '',
        resetToken: ''
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['loading'])
  },
  methods: {
    ...mapActions('auth', ['resetPassword']),
    async onSubmit() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        const token = this.$route.query.token;
        if (token) {
          this.authData.resetToken = token;
          this.resetPassword(this.authData);
        } else {
          this.$notify({
            text: 'Không có token',
            type: 'error'
          })
        }
      }
    }
  }
}
</script>