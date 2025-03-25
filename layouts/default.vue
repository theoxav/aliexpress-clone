<template>
  <div class="w-full fixed z-50 h-full bg-[#FAFAFA]">
    <AppNavbar />
    <AppHeader />
    <Loading v-if="userStore.isLoading" />
    <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]">
      <slot />
    </div>
    <AppFooter v-if="!userStore.isLoading" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
import AppFooter from '~/components/layouts/AppFooter.vue';
import AppHeader from '~/components/layouts/AppHeader.vue';
import AppNavbar from '~/components/layouts/AppNavbar.vue';
import Loading from '~/components/ui/Loading.vue';

const userStore = useUserStore();
console.log('isLoading:', userStore.isLoading);
</script>
<style></style>
