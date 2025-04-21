<template>
  <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div v-if="status === 'pending'" class="text-center py-10 text-gray-600">
      Chargement des produits...
    </div>

    <div v-else-if="error" class="text-center py-10 text-red-500">
      Une erreur est survenue lors du chargement des produits.
    </div>

    <div
      v-else
      class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
    >
      <div v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from '~/components/products/ProductItem.vue';
import type { Product } from '~/types';
import { useUserStore } from '~/stores/user';
import {toast} from "vue-sonner";

const userStore = useUserStore();

const {
  data: productsData,
  error,
  status,
} = await useFetch<Product[]>('/api/products/get-all-products', {
  key: 'products',
  server: true,
});

const products = computed(() => productsData.value ?? []);

if(error.value) {
  toast(status, {
    style: {
      background: '#ef4444',
      color: 'white',
    },
  });
}

</script>
