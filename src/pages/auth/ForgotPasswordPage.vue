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
      <div class="text-center">
        <app-button type="submit" :loading="loading">Gửi về mail</app-button>
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
        email: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", ["loading"]),
  },
  methods: {
    ...mapActions("auth", ["forgotPassword"]),
    async onSubmit() {
      const isValid = this.$refs.form.validate();
      isValid && (await this.forgotPassword(this.authData));
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
