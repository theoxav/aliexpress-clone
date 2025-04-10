import { defineStore } from 'pinia';
import type { Product } from '~/types';

export const useUserStore = defineStore('user', {
  state: () => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [] as Product[],
    checkout: [],
  }),
  persist: true,
});
