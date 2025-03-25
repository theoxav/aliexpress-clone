<template>
  <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div
      class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
    >
      <div v-if="products" v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from '~/components/products/ProductItem.vue';
import type { Products } from '~/types';

const products: Products = [
  {
    id: 1,
    title: 'Title 1',
    description: 'This is a description',
    url: 'https://picsum.photos/id/7/800/800',
    price: 999,
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'This is a description',
    url: 'https://picsum.photos/id/29/800/800',
    price: 999,
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'This is a description',
    url: 'https://picsum.photos/id/26/800/800',
    price: 999,
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'This is a description',
    url: 'https://picsum.photos/id/22/800/800',
    price: 999,
  },
  {
    id: 5,
    title: 'Title 5',
    description: 'This is a description',
    url: 'https://picsum.photos/id/17/800/800',
    price: 999,
  },
  {
    id: 6,
    title: 'Title 6',
    description: 'This is a description',
    url: 'https://picsum.photos/id/13/800/800',
    price: 999,
  },
  {
    id: 7,
    title: 'Title 7',
    description: 'This is a description',
    url: 'https://picsum.photos/id/14/800/800',
    price: 999,
  },
  {
    id: 8,
    title: 'Title 8',
    description: 'This is a description',
    url: 'https://picsum.photos/id/20/800/800',
    price: 999,
  },
  {
    id: 9,
    title: 'Title 9',
    description: 'This is a description',
    url: 'https://picsum.photos/id/15/800/800',
    price: 999,
  },
  {
    id: 10,
    title: 'Title 10',
    description: 'This is a description',
    url: 'https://picsum.photos/id/12/800/800',
    price: 999,
  },
];
</script>
<style></style>
