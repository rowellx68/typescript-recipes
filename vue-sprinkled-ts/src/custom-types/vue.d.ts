import { Validator } from 'vee-validate';

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    $validator: Validator
  }
}