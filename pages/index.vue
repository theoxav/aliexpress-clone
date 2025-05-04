<template>
  <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <!-- Loading -->
    <template v-if="status === 'pending'">
      <div class="text-center py-10 text-gray-600">
        Chargement des produits...
      </div>
    </template>

    <!-- Error -->
    <template v-if="error">
      <div class="text-center py-10 text-red-500">
        {{ error }}
      </div>
    </template>

    <template v-if="products && products.length > 0">
      <div
        class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      >
        <ProductItem
          v-for="product in products"
          :product="product"
          :key="product.id"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import ProductItem from '~/components/products/ProductItem.vue';
import { useUserStore } from '~/stores/user';
import { useProductsStore } from '~/stores/products';
import { toast } from 'vue-sonner';

const userStore = useUserStore();
const productStore = useProductsStore();

const {
  data: products,
  error,
  status,
} = await useAsyncData('products', () => productStore.fetchProducts());

if (error.value) {
  toast("Erreur lors de la récupération des produits", {
    style: {
      background: '#ef4444',
      color: '#fff',
    },
  });
}

</script>
