import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from '~/types';

export const useUserStore = defineStore('user', () => {
  const isMenuOverlay = ref(false);
  const isLoading = ref(false);
  const cart = ref<Product[]>([]);
  const checkout = ref<Product[]>([]);

  return {
    isMenuOverlay,
    isLoading,
    cart,
    checkout,
  };
}, {
  persist: true,
});
