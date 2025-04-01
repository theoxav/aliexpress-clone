<template>
  <div id="MainHeader" class="flex items-center w-full bg-white">
    <div
      class="flex lg:justify-start justify-between items-center gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto"
    >
      <NuxtLink to="/" class="min-w-[170px]">
        <img width="170" src="/AliExpress-logo.png" alt="AliExpress Logo" />
      </NuxtLink>

      <div class="max-w-[700px] w-full md:block hidden">
        <div class="relative">
          <div
            class="flex items-center border-2 border-[#FF4646] rounded-md w-full"
          >
            <input
              type="text"
              class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
              placeholder="kitchen accessories"
              v-model="searchItem"
            />
            <Icon
              v-if="isSearching"
              name="eos-icons:loading"
              size="25"
              class="mr-2"
            />
            <button class="flex items-center h-[100%] p-1.5 px-2 bg-[#FF4646]">
              <Icon name="ph:magnifying-glass" size="20" color="#ffffff" />
            </button>
          </div>
        </div>
      </div>

      <NuxtLink to="/shopping-cart" class="flex items-center">
        <button
          class="relative md:block hidden"
          @mouseenter="isCartHover = true"
          @mouseleave="isCartHover = false"
        >
          <span
            class="absolute flex items-center justify-center -right-[3px] top-0 bg-[#FF4646] text-white h-[17px] min-w-[17px] rounded-full text-xs px-0.5"
          >
            0
          </span>
          <div class="min-w-[40px]">
            <Icon
              name="ph:shopping-cart-simple-light"
              size="33"
              :class="isCartHover ? 'text-[#FF4646]' : ''"
            />
          </div>
        </button>
      </NuxtLink>

      <button
        @click="toggleMenu"
        class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200"
      >
        <Icon
          v-if="!userStore.isMenuOverlay"
          name="radix-icons:hamburger-menu"
          size="33"
        />
        <Icon v-else name="ph:x-bold" size="33" />
      </button>
    </div>
  </div>

  <MenuOverlay
    v-if="userStore.isMenuOverlay"
    @close="toggleMenu"
    class="fixed top-0 left-0 w-full h-full bg-white z-50"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '~/stores/user';
import MenuOverlay from '~/components/ui/MenuOverlay.vue';

const userStore = useUserStore();
let searchItem = ref('');
let isCartHover = ref(false);
let isSearching = ref(false);

const toggleMenu = () => {
  userStore.isMenuOverlay = !userStore.isMenuOverlay;
};

const closeMenuOnResize = () => {
  if (window.innerWidth >= 768) {
    userStore.isMenuOverlay = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', closeMenuOnResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', closeMenuOnResize);
});
</script>
