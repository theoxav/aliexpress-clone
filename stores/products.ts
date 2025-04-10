import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from '~/types';

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const currentProduct = ref<Product | null>(null);
  const isLoading = ref(false);

  const fetchProductById = async (id: number | string) => {
    try {
      isLoading.value = true;
      const { data, error } = await useFetch<Product>(`/api/products/${id}`);
      if (error.value) {
        console.error('Error fetching product:', error.value);
        return null;
      }
      currentProduct.value = data.value;
      return currentProduct.value;
    } catch (err) {
      console.error('Unexpected error:', err);
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    products,
    currentProduct,
    isLoading,
    fetchProductById,
  };
});
