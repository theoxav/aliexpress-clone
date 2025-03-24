<template>
  <div id="MainHeader" class="flex items-center w-full bg-white">
    <div
      class="flex lg:justify-start justify-between items-center gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto"
    >
      <NuxtLink to="/" class="min-w-[170px]">
        <img width="170" src="/AliExpress-logo.png" alt="" />
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

          <div class="absolute bg-white max-w-[700px] h-auto w-full">
            <div v-if="false" class="p-1">
              <NuxtLink to="`/item/1`" class="flex items-center">
                <div class="flex items-center">
                  <img
                    class="rounded-md"
                    width="40"
                    src="https://picsum.photos/id/82/300/300"
                    alt=""
                  />
                  <div class="truncate ml-2">TESTING</div>
                </div>
                <div class="truncate">$ 98.99</div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let searchItem = ref('');
let isSearching = ref(false);
</script>
