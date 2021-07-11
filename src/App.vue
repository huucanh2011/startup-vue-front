<template>
  <div id="app">
    <vue-progress-bar />
    <notifications position="bottom left" />
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    // eslint-disable-next-line no-unused-vars
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    // eslint-disable-next-line no-unused-vars
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
}
</script>

<style lang="css">
:root {
  font-size: 14px;
}
body {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: #666;
  line-height: 22px;
  letter-spacing: 1px;
}
a {
  text-decoration: none;
}
.text-center {
  text-align: center !important;
}
</style>
