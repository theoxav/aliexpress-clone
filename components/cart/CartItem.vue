<template>
  <div class="flex justify-start my-2">
    <div class="my-auto">
      <div
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        class="flex items-center justify-start p-0.5 cursor-pointer"
      >
        <div
          @click="isSelected = !isSelected"
          class="flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-5 ml-2"
          :class="[
            isHover ? 'border-[#FD374F]' : 'border-gray-300',
            isSelected ? 'bg-[#FD374F]' : '',
          ]"
        >
          <div class="h-[8px] w-[8px] rounded-full bg-white" />
        </div>
      </div>
    </div>

    <img
      :src="product.url"
      alt="product"
      class="rounded-md md:w-[150px] w-[90px]"
    />
    <div class="overflow-hidden pl-2 w-full">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center justify-between truncate">
          <span
            class="sm:block hidden bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]"
            >Welcome Deal
          </span>
          <div class="truncate sm:pl-2">{{ product.title }}</div>
        </div>
        <button
          @click="removeFromCart()"
          class="mx-3 sm:block hidden -mt-0.5 hover:text-red-500"
        >
          <Icon name="material-symbols:delete-outline" size="20" />
        </button>
      </div>

      <div class="text-xl font-semibold">
        $ <span class="font-bold">{{ product.price / 100 }}</span>
      </div>

      <p class="text-[#009A66] text-xs font-semibold pt-1">
        Free 11-day delivery over $8.28
      </p>
      <p class="text-[#009A66] text-xs font-semibold pt-1">
        Free Shipping
      </p>
      <div class="flex items-center justify-end">
        <button
            @click="removeFromCart()"
            class="sm:hidden block -mt-0.5 hover:text-red-500"
        >
          <Icon name="material-symbols:delete-outline" size="20" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
import type { Product } from '~/types';

const userStore = useUserStore();

const props = defineProps<{
  product: Product;
  selectedArray: number[];
}>();

const { product, selectedArray } = toRefs(props);

const emit = defineEmits<{
  (event: 'selectedRadio', payload: { id: number; val: boolean }): void;
}>();

const isSelected = ref<boolean>(false);
const isHover = ref<boolean>(false);

const removeFromCart = () => {
  userStore.cart = userStore.cart.filter(
    (prod: Product) => prod.id !== product.value.id
  );
};

watch(
  () => isSelected.value,
  (val: boolean) => {
    emit('selectedRadio', { id: product.value.id, val });
  }
);
</script>
