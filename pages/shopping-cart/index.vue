<template>
  <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div v-if="false" class="h-[500px] flex items-center justify-center">
      <div class="pt-20">
        <img
          class="mx-auto"
          width="200"
          src="/cart-empty.png"
          alt="cart-empty"
        />
        <div class="text-xl text-center mt-4">No items yet?</div>
        <div class="flex text-center">
          <NuxtLink
            to="/auth/login"
            class="bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
          >
            Sign in
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
      <div class="md:w-[65%]">
        <div class="bg-white rounded-lg p-4">
          <div class="text-2xl font-bold mb-2">
            Shopping Cart ({{ userStore.cart.length }})
          </div>
        </div>
        <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
          <div class="text-red-500 font-bold">
            Welcome Deal applicable on 1 item only
          </div>
        </div>

        <div id="Items" class="bg-white rounded-lg p-4 mt-4">
          <CartItem
            v-for="product in userStore.cart"
            :key="product.id"
            :product="product"
            :selectedArray="selectedArray"
            @selectedRadio="selectedRadioFunc"
          />
        </div>
      </div>

      <div class="md:hidden block my-4" />
      <div class="md:w-[35%]">
        <div id="Summary" class="bg-white rounded-lg p-4">
          <div class="text-2xl font-extrabold mb-2">Summary</div>
          <div class="flex items-center justify-between my-4">
            <div class="font-semibold">Total</div>
            <div class="text-2xl font-semibold">
              $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
            </div>
          </div>

          <button
            @click="goToCheckout"
            class="flex items-center justify-center bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
          >
            Checkout
          </button>
        </div>

        <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
          <div class="text-lg font-semibold mb-2">Payment methods</div>
          <div class="flex items-center justify-start gap-8 my-4">
            <img
              v-for="(card, index) in cards"
              :key="index"
              :src="card"
              alt="payment-method"
              class="h-6"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, toRaw } from 'vue';
import { useUserStore } from '~/stores/user';
import type { Product } from '~/types';

const userStore = useUserStore();

const selectedArray = ref<Product[]>([]);
const cards = ref<string[]>([
  'visa.png',
  'mastercard.png',
  'paypal.png',
  'applepay.png',
]);

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 200);
});

const totalPriceComputed = computed((): number => {
  return (
    userStore.cart.reduce((total, item: Product) => total + item.price, 0) / 100
  );
});

const selectedRadioFunc = (e: Product): void => {
  const index = selectedArray.value.findIndex((item) => item.id === e.id);
  index === -1
    ? selectedArray.value.push(e)
    : selectedArray.value.splice(index, 1);
};

const goToCheckout = () => {
  let ids = []
  userStore.checkout = []

  selectedArray.value.forEach(item => ids.push(item.id))

  let res = userStore.cart.filter((item) => {
    return ids.indexOf(item.id) != -1
  })

  res.forEach(item => userStore.checkout.push(toRaw(item)))

  return navigateTo('/checkout')
}

</script>
