<template>
  <div id="AuthPage" class="w-full h-[100vh] bg-white">
    <div
      class="w-full flex items-center justify-center p-5 border-b border-b-gray-300"
    >
      <NuxtLink to="/" class="min-w-[170px]">
        <img src="/AliExpress-logo.png" alt="aliexpress logo" width="170" />
      </NuxtLink>
    </div>

    <div class="max-w-[400px] mx-auto px-2">
      <div class="text-center my-6">Login / Register</div>
      <button
        class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
        @click="
          auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })
        "
      >
        <img
          class="w-full max-w-[30px]"
          src="/google-logo.png"
          alt="google logo"
        />
        <div>Google</div>
      </button>
      <button
        class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold mt-4"
        @click="
          auth.signInWithOAuth({ provider: 'github', options: { redirectTo } })
        "
      >
        <img
          class="w-full max-w-[30px]"
          src="/github-logo.png"
          alt="github logo"
        />
        <div>GitHub</div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const redirectTo = `${useRuntimeConfig().public.baseUrl}/auth/confirm`;

watchEffect(() => {
  if (user.value) {
    navigateTo('/');
  }
});
</script>
