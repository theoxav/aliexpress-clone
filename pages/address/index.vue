<template>
  <div id="AddressPage" class="mx-auto max-w-[500px] px-2">
    <div class="mx-auto bg-white rounded-lg p-3">
      <div class="text-xl font-bold mb-2">Address Details</div>

      <form @submit.prevent="submit">
        <TextInput
          class="w-full"
          placeholder="Contact Name"
          v-model="contactName"
          inputType="text"
          :error="error?.type === 'contactName' ? error.message : ''"
        />
        <TextInput
          class="w-full mt-2"
          placeholder="Address"
          v-model="address"
          inputType="text"
          :error="error?.type === 'address' ? error.message : ''"
        />
        <TextInput
          class="w-full mt-2"
          placeholder="Zip Code"
          v-model="zipCode"
          inputType="text"
          :error="error?.type === 'zipCode' ? error.message : ''"
        />
        <TextInput
          class="w-full mt-2"
          placeholder="City"
          v-model="city"
          inputType="text"
          :error="error?.type === 'city' ? error.message : ''"
        />
        <TextInput
          class="w-full mt-2"
          placeholder="Country"
          v-model="country"
          inputType="text"
          :error="error?.type === 'country' ? error.message : ''"
        />

        <button
          :disabled="isWorking"
          class="mt-6 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
        >
          <Icon
            v-if="isWorking"
            name="eos-icons:loading"
            size="25"
            class="mr-2"
          />
          <div v-else>Update Address</div>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TextInput from '~/components/ui/TextInput.vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();

let contactName = ref<string>('');
let address = ref<string>('');
let zipCode = ref<string>('');
let city = ref<string>('');
let country = ref<string>('');

let currentAddress = ref(null);

let isUpdate = ref(false);
let isWorking = ref<boolean>(false);
let error = ref<{ type: string; message: string } | null>(null);

watchEffect(() => {
  userStore.isLoading = false;
});

const submit = async () => {
  isWorking.value = true;
  error.value = null;

  const fields = {
    contactName: 'Contact name is required',
    address: 'Address is required',
    zipCode: 'Zip code is required',
    city: 'City is required',
    country: 'Country is required',
  };

  for (const [field, message] of Object.entries(fields)) {
    if (!eval(field).value) {
      error.value = { type: field, message };
      isWorking.value = false;
      return;
    }
  }
};
</script>
