

<script setup>
import {  ref } from "vue";
const crumbs = [{ name: "Home", link: "/" }, { name: " Cart" }];

const cartItems = ref([
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image: "../images/shoe.png",
  },
  {
    id: 2,
    name: "H1 Gamepad",
    price: 550,
    quantity: 2,
    image: "../images/jacket.png",
  },
]);

const formatPrice = (value) => {
  return `$${value.toFixed(2)}`;
};

const updateCart = () => {
  alert("Cart updated successfully");
};

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
};
</script>

<template>
  <NuxtLayout name="home">
    <div class=" px-4 py-10 lg:px-36">
      <div class="py-2 text-left">
        <Breadcrumb :crumbs="crumbs" />
      </div>
      <div class="w-full mb-4 lg:mb-4">
        <div class="overflow-x-auto">
          <table class="hidden w-full p-8 sm:table" style="border-spacing: 0 1rem;">
            <thead class="border custom-row-gap">
              <tr class="text-sm">
                <th class="px-6 py-3 text-left">Product</th>
                <th class="px-6 py-3 text-left">Price</th>
                <th class="px-6 py-3 text-left">Quantity</th>
                <th class="px-6 py-3 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody class="text-sm font-light text-gray-600 custom-row-gap">
              <tr
                v-for="item in cartItems"
                :key="item.id"
                class="border hover:bg-gray-100"
              >
                <td class="relative flex items-center px-6 py-3 text-left">
                  <img
                    :src="item.image"
                    alt="product image"
                    class="w-16 h-16 mr-4 rounded-md"
                  />

                  <Icon
                    name="material-symbols:close"
                    class="absolute w-4 h-4 text-white rounded-full cursor-pointer bg-primary left-9 top-7 hover:text-primary hover:bg-white"
                    @click="removeItem(item.id)"
                  />

                  <div class="font-bold">{{ item.name }}</div>
                </td>
                <td class="px-6 py-3 font-bold text-left">
                  {{ formatPrice(item.price) }}
                </td>
                <td class="px-6 py-3 font-bold text-left">
                  <input
                    type="number"
                    class="w-16 p-2 border rounded"
                    v-model="item.quantity"
                    min="1"
                  />
                </td>
                <td class="px-6 py-3 font-bold text-left">
                  {{ formatPrice(item.price * item.quantity) }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="block sm:hidden">
            <div v-for="item in cartItems" :key="item.id" class="pb-4 mb-4 border-b">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <img :src="item.image" alt="product image" class="w-16 h-16 mr-4 rounded-md" />
                  <div class="font-bold">{{ item.name }}</div>
                </div>
                <Icon
                  name="material-symbols:close"
                  class="w-4 h-4 text-white rounded-full cursor-pointer bg-primary hover:text-primary hover:bg-white"
                  @click="removeItem(item.id)"
                />
              </div>
              <div class="mt-2">
                <div class="flex justify-between">
                  <div>Price:</div>
                  <div class="font-bold">{{ formatPrice(item.price) }}</div>
                </div>
                <div class="flex justify-between mt-2">
                  <div>Quantity:</div>
                  <input
                    type="number"
                    class="w-16 p-2 border rounded"
                    v-model="item.quantity"
                    min="1"
                  />
                </div>
                <div class="flex justify-between mt-2">
                  <div>Subtotal:</div>
                  <div class="font-bold">{{ formatPrice(item.price * item.quantity) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-8">
          <Button
            class="lg:w-48 !text-black bg-transparent border border-dark hover:border-primary  hover:bg-gray hover:!text-white"
            @click="updateCart"
          >
            Return To Shop
          </Button>

            <NuxtLink to="/checkout">
             <Button class="w-full text-white md:w-40">
              Checkout
            </Button>
           </NuxtLink>
        </div>
      </div>

    </div>
  </NuxtLayout>
</template>


<style scoped>
.text-danger {
  color: red;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}




.custom-row-gap tr {
 
  margin-bottom: 1rem; /* Adjust this value as needed */
}

.custom-row-gap td,.custom-row-gap th {
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
}

</style>
