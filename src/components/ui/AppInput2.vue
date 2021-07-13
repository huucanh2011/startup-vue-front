<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="updateSelf($event.target.value)"
    />
    <textarea
      v-if="controlType === 'textarea'"
      v-bind="$attrs"
      :value="value"
      @input="updateSelf($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    controlType: {
      type: String,
      default: "input",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateSelf(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  label {
    font-weight: 600;
    margin-bottom: 6px;
  }
  input, textarea {
    padding: 12px 16px;;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    outline-width: 0;
    resize: vertical;
    &:focus {
      border-color: #666;
    }
  }
}
</style>
