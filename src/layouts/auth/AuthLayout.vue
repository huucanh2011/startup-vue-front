<template>
  <div class="container">
    <div class="breadcrumb">
      <router-link :to="{ name: 'home' }">Trang chủ</router-link> | {{ title }}
    </div>
    <div class="auth">
      <h4 class="auth__title">{{ title }}</h4>
      <p v-if="routeName === 'login'">Bạn có tài khoản thì đăng nhập nhé 👋!</p>
      <p v-if="routeName === 'register'">
        Bạn hãy đăng ký để dễ dàng mua sắm hơn nhé 🥰!
      </p>
      <p v-if="routeName === 'forgot-password'">
        Quên mật khẩu rồi à, nhập mail rồi nhấn gửi nha 😬!
      </p>
      <router-view />
      <div v-if="routeName !== 'reset-password'" class="auth__footer">
        <div>
          <router-link v-if="routeName === 'login'" :to="{ name: 'register' }">
            Đăng ký
          </router-link>
          <router-link v-else :to="{ name: 'login' }">Đăng nhập</router-link>
          nè!
        </div>
        <router-link
          v-if="routeName !== 'forgot-password'"
          :to="{ name: 'forgot-password' }"
        >
          Quên mật khẩu?
        </router-link>
        <div v-else>
          <router-link :to="{ name: 'register' }">
            Đăng ký
          </router-link>
          nè!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      const routeName = this.$route.name;
      let title;
      switch (routeName) {
        case "login":
          title = "Đăng nhập";
          break;
        case "register":
          title = "Đăng ký";
          break;
        case "forgot-password":
          title = "Quên mật khẩu";
          break;
        case "reset-password":
          title = "Khôi phục mật khẩu";
          break;

        default:
          title = "Đăng nhập";
          break;
      }
      return title;
    },
    routeName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 24px * 2);
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 0;
  background: #fff;
}
.breadcrumb {
  a {
    text-decoration: none;
    color: #666;
  }
}
.auth {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 32px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  &__title {
    margin: 0 0 12px 0;
    text-transform: uppercase;
    font-weight: 600;
  }
  p {
    margin: 0 0 12px 0;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    a {
      color: #666;
    }
  }
}
</style>
