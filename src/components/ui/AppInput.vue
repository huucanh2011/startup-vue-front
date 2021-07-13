<template>
  <ValidationProvider
    class="input-control"
    tag="div"
    :vid="vid"
    :rules="rules"
    :name="name || label"
    v-slot="{ errors, required, ariaInput, ariaMsg }"
  >
    <label v-if="label">{{ label }}<span>{{ required ? '*' : '' }}</span></label>
    <input
      v-if="controlType === 'input'"
      :class="{ 'has-errors': errors[0] }"
      :id="name"
      :type="type"
      :placeholder="placeholder"
      v-model="innerValue"
      v-bind="ariaInput"
    />
    <textarea
      v-if="controlType === 'textarea'"
      :class="{ 'has-errors': errors[0] }"
      :id="name"
      :type="type"
      :placeholder="placeholder"
      v-model="innerValue"
      v-bind="ariaInput"
    />
    <span class="error-msg" v-bind="ariaMsg" v-if="errors[0]">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
export default {
  components: {
    ValidationProvider
  },
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    vid: {
      type: String,
      default: undefined
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return [
          'url',
          'text',
          'password',
          'tel',
          'search',
          'number',
          'email'
        ].includes(value)
      }
    },
    value: {
      type: null,
      default: ''
    }
  },
  data() {
    return {
      innerValue: ''
    }
  },
  watch: {
    innerValue(value) {
      this.$emit('input', value);
    },
    value(val) {
      if (val !== this.innerValue) {
        this.innerValue = val;
      }
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  }
}
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
.has-errors {
  border-color: #EF4444 !important;
}
.error-msg {
  color: #EF4444;
  margin-top: 8px;
}
</style>