<template>
  <div>
    <client-only>
      <input
        :placeholder="placeholder"
        :maxlength="max"
        :type="inputType"
        class="w-full bg-white text-gray-800 border text-sm border-[#EFF0EB] rounded-lg p-3 placeholder-gray-500 focus:outline-none"
        :class="{
          'border-gray-900': isFocused,
          'border-red-500': error,
        }"
        @focus="isFocused = true"
        @blur="isFocused = false"
        v-model="inputComputed"
        autocomplete="off"
      />
    </client-only>
    <span v-if="error" class="text-red-500 text-[14px] font-semibold">{{
      error
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRefs, defineProps, defineEmits } from 'vue';

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const props = defineProps<{
  modelValue: string;
  placeholder: string;
  max?: number;
  inputType: 'text' | 'number' | 'password' | 'email' | 'tel';
  error?: string | null;
}>();

const { modelValue, placeholder, max, inputType, error } = toRefs(props);

const isFocused = ref<boolean>(false);

const inputComputed = computed({
  get: () => modelValue.value,
  set: (val: string) => {
    emit('update:modelValue', val);
  },
});
</script>
