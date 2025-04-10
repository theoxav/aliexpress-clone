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
import { ref, watchEffect } from 'vue';
import TextInput from '~/components/ui/TextInput.vue';
import { useUserStore } from '~/stores/user';
import type { Address } from '~/types';

const userStore = useUserStore();
const user = useSupabaseUser();

let contactName = ref<string>('');
let address = ref<string>('');
let zipCode = ref<string>('');
let city = ref<string>('');
let country = ref<string>('');

interface AddressResponse {
  data: Address | null;
}

let currentAddress = ref<AddressResponse | null>(null);

let isUpdate = ref(false);
let isWorking = ref<boolean>(false);
let error = ref<{ type: string; message: string } | null>(null);

watchEffect(async () => {
  if (!user.value) return;

  const { data, error: fetchError } = await useFetch<AddressResponse>(
    `/api/address/get-address-by-user/${user.value.id}`
  );

  if (fetchError) {
    console.error('Error fetching address:', fetchError);
    return;
  }

  currentAddress.value = data.value || null;

  if (currentAddress.value?.data) {
    const addressData = currentAddress.value.data;
    contactName.value = addressData.contactName;
    address.value = addressData.address;
    zipCode.value = addressData.zipCode;
    city.value = addressData.city;
    country.value = addressData.country;

    isUpdate.value = true;
  }

  userStore.isLoading = false;
});

const submit = async () => {
  isWorking.value = true;
  error.value = null;

  const fields = {
    contactName,
    address,
    zipCode,
    city,
    country,
  };

  for (const [field, refValue] of Object.entries(fields)) {
    if (!refValue.value) {
      error.value = { type: field, message: `${field} is required` };
      isWorking.value = false;
      return;
    }
  }

  if (isUpdate.value && currentAddress.value?.data) {
    await useFetch(
      `/api/address/update-address/${currentAddress.value.data.id}`,
      {
        method: 'PATCH',
        body: {
          contactName: contactName.value,
          address: address.value,
          zipCode: zipCode.value,
          city: city.value,
          country: country.value,
        },
      }
    );

    isWorking.value = false;

    return navigateTo('/checkout');
  }

  if (user.value) {
    await useFetch('/api/address/add-address', {
      method: 'POST',
      body: {
        userId: user.value.id,
        contactName: contactName.value,
        address: address.value,
        zipCode: zipCode.value,
        city: city.value,
        country: country.value,
      },
    });

    isWorking.value = false;

    navigateTo('/checkout');
  }
};
</script>
