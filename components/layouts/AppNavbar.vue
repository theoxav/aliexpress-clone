<template>
  <nav id="TopMenu" class="w-full bg-[#FAFAFA] border-b">
    <ul
      class="hidden md:flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#FAFAFA] max-w-[1200px]"
    >
      <li
        class="border-r border-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
      >
        Sell on AliExpress
      </li>
      <li
        class="border-r border-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
      >
        Cookie Preferences
      </li>
      <li
        class="border-r border-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
      >
        Help
      </li>
      <li class="px-3 hover:text-[#FF4646] cursor-pointer">Buyer Protection</li>
      <li class="px-3 hover:text-[#FF4646] cursor-pointer">
        <Icon name="ic:sharp-install-mobile" size="17" /> App
      </li>
      <li
        @mouseenter="isAccountMenu = true"
        @mouseleave="isAccountMenu = false"
        class="relative flex items-center px-2.5 hover:text-[#FF4646] h-full cursor-pointer"
        :class="
          isAccountMenu
            ? 'bg-white border z-40 shadow-lg'
            : 'border border-[#FAFAFA]'
        "
      >
        <Icon name="ph:user-thin" size="17" />
        Account
        <Icon name="mdi:chevron-down" size="15" class="ml-5" />
        <div
          id="AccountMenu"
          v-if="isAccountMenu"
          class="absolute bg-white w-[220px] text-[#333333] z-40 top-[38px] -left-[100px] border-x border-b"
        >
          <div v-if="true">
            <div class="text-semibold text-[15px] my-4 px-3">
              Welcome to AliExpress!
            </div>
            <div class="flex items-center gap-1 px-3 mb-3">
              <NuxtLink
                to="/auth"
                class="bg-[#FF4646] text-center w-full text-[16px] rounded-sm text-white font-semibold p-2"
              >
                Login / Register
              </NuxtLink>
            </div>
          </div>
          <div class="border-b" />
          <ul class="bg-white">
            <li
              @click="navigateTo('/orders')"
              class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
            >
              My Orders
            </li>
            <li
              v-if="true"
              class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
            >
              Sign out
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const isAccountMenu = ref(false);
</script>
