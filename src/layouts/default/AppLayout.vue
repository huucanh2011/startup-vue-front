<template>
  <div>
    <app-header />
    <main>
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue'
export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>