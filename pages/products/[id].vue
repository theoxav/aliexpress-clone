<template>
  <div id="ProductDetailPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div class="flex-1 overflow-y-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <!-- IMAGE -->
        <div class="md:w-[40%]">
          <img
            alt=""
            class="rounded-lg object-cover w-full"
            :src="currentImage"
          />
          <div
            v-if="images.length > 0 && images[0] !== ''"
            class="flex items-center justify-center mt-2 space-x-2"
          >
            <div v-for="image in images" :key="image">
              <img
                @mouseover="currentImage = image"
                @click="currentImage = image"
                :src="image"
                alt=""
                width="70"
                class="rounded-md object-cover border-[3px] cursor-pointer"
                :class="currentImage === image ? 'border-[#FF5353]' : ''"
              />
            </div>
          </div>
        </div>

        <!-- DÉTAILS PRODUIT -->
        <div class="md:w-[60%] bg-white p-3 rounded-lg">
          <div>
            <p class="mb-2 text-lg font-semibold">Title</p>
            <p class="font-light text-sm mb-2">Description</p>
          </div>
          <div class="flex items-center pt-1.5">
            <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
              <Icon name="material-symbols:star-rounded" size="12" />
            </span>
            <p class="text-[#FF5353] text-sm">Extra 5% off</p>
          </div>
          <div class="flex items-center justify-start my-2 space-x-1">
            <Icon
              name="ic:baseline-star"
              class="text-[#FF5353]"
              v-for="n in 5"
              :key="n"
            />
            <span class="text-sm font-light ml-2"
              >5 213 Reviews 1,000+ orders</span
            >
          </div>

          <div class="border-b my-2" />

          <div class="flex items-center justify-start gap-2 my-2">
            <div class="text-xl font-bold">$ {{ priceComputed }}</div>
            <span
              class="bg-[#F5F5F5] border text-[#C08562] text-xs font-semibold px-1.5 rounded-sm"
              >70% off
            </span>
          </div>

          <p class="text-[#009A66] text-xs font-semibold pt-1">
            Free 11-day delivery over $8.28
          </p>
          <p class="text-[#009A66] text-xs font-semibold pt-1">Free Shipping</p>

          <div class="py-2">
            <button
              @click="addToCart"
              :disabled="isInCart"
              class="px-6 py-2 rounded-lg text-lg text-white font-semibold bg-gradient-to-r from-[#FF851A] to-[#FFAC2C]"
            >
              <div v-if="isInCart">Is Added</div>
              <div v-else>Add to cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
import { useRoute } from 'vue-router';
import { ref, computed, onMounted, watchEffect } from 'vue';
import type { Product } from '~/types';

const userStore = useUserStore();
const route = useRoute();

const currentImage = ref<string>('');
const images = ref<string[]>([
  '',
  'https://picsum.photos/id/212/800/800',
  'https://picsum.photos/id/213/800/800',
  'https://picsum.photos/id/214/800/800',
  'https://picsum.photos/id/99/800/800',
  'https://picsum.photos/id/144/800/800',
]);

onMounted(() => {
  watchEffect(() => {
    currentImage.value = 'https://picsum.photos/id/77/800/800';
    images.value[0] = 'https://picsum.photos/id/77/800/800';
  });
});

const isInCart = computed<boolean>(() => {
  return userStore.cart.some(
    (prod: Product) => String(route.params.id) === String(prod.id)
  );
});

const priceComputed = computed<string>(() => '26.40');

const addToCart = (): void => {
  alert('ADDED !');
};
</script>
