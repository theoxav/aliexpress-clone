<template>
  <div class="w-full min-h-screen z-50 h-full bg-[#FAFAFA]">
    <AppNavbar />
    <AppHeader />
    <Loading v-if="userStore.isLoading" />
    <div class="pt-8">
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
