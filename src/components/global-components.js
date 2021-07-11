import Vue from 'vue';

import AppInput from './ui/AppInput';
import AppButton from './ui/AppButton';

const components = {
  AppInput,
  AppButton
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});