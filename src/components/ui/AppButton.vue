<template>
  <button class="btn" :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <span v-if="loading">Chờ tí...</span>
    <slot v-else/>
  </button>
</template>

<script>
export default {
  props: {
    btnStyle: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
.btn {
  max-width: max-content;
  padding: 12px 16px;
  color: #000;
  background-color: white;
  border: 2px solid #000;
  border-radius: 6px;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease-out 0.4s;
  &:hover {
    background-color: #000;
    color: white;
  }
}
</style>
