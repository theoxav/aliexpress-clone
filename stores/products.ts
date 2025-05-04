import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from '~/types';

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const currentProduct = ref<Product | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const handleError = (err: unknown) => {
    console.error('An error occurred:', err);
    if (err instanceof Error) {
      error.value = err.message;
    } else if (typeof err === 'string') {
      error.value = err;
    } else {
      error.value = 'An unexpected error occurred.';
    }
  };

  const fetchProducts = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await useFetch<Product[]>(
          '/api/products/get-all-products',
          { key: 'products', server: true }
      );

      if (fetchError.value) {
        throw new Error('Erreur l\'hors de la récupération des produits.');
      }

      products.value = data.value || [];
      return products.value;

    } catch (err) {
      handleError(err);
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const fetchProductById = async (id: number | string) => {
    isLoading.value = true;
    error.value = null;
    try {
      const { data, error: fetchError } = await useFetch<Product>(
          `/api/products/${id}`
      );

      if (fetchError.value) {
        throw new Error('Failed to fetch product.');
      }

      currentProduct.value = data.value;
      return currentProduct.value;
    } catch (err) {
      handleError(err);
        throw err;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    products,
    currentProduct,
    isLoading,
    error,
    fetchProducts,
    fetchProductById,
  };
});
