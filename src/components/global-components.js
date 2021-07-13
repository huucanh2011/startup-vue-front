import Vue from 'vue';

import AppInput from './ui/AppInput';
import AppInput2 from './ui/AppInput2';
import AppButton from './ui/AppButton';

const components = {
  AppInput,
  AppInput2,
  AppButton
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});