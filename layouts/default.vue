<template>
  <div class="w-full fixed z-50 h-full bg-[#FAFAFA]">
    <AppNavbar />
    <AppHeader />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layouts/AppFooter.vue';
import AppHeader from '~/components/layouts/AppHeader.vue';
import AppNavbar from '~/components/layouts/AppNavbar.vue';
</script>
<style></style>
