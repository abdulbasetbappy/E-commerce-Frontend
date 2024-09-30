<script setup>
import { ref, computed } from "vue";

const crumbs = [{ name: "Home", link: "/" }, { name: "Cart" }];

const cartItems = ref([
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image: "../images/shoe.png",
    size: "XL",
    color: "Black",
  },
  {
    id: 2,
    name: "H1 Gamepad",
    price: 550,
    quantity: 2,
    size: "XXL",
    color: "Dark Black",
    image: "../images/jacket.png",
  },
]);

// Computed properties to get total items and total cost
const totalItems = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
});

const totalCost = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
</script>

<template>
  <NuxtLayout name="home">
    <div class="container mx-auto px-4 lg:px-36">
      <div class="py-1 md:py-4 text-left">
        <Breadcrumb :crumbs="crumbs" />
      </div>

      <div class="flex flex-col lg:flex-row shadow-md rounded-xl">
        <!-- Cart Items -->
        <div class="w-full lg:w-8/12 bg-white px-4 sm:px-6 py-6">
          <div class="flex justify-between border-b pb-4">
            <h1 class="font-semibold text-lg sm:text-xl">Shopping Cart</h1>
            <h2 class="font-semibold text-lg sm:text-xl">{{ totalItems }} Items</h2>
          </div>

          <div class="hidden sm:flex mt-6 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>

          <!-- Loop through cart items -->
          <div v-for="item in cartItems" :key="item.id" class="flex flex-col sm:flex-row items-center hover:bg-gray-50 -mx-4 sm:-mx-8 px-4 sm:px-6 py-3">
            <div class="flex w-full sm:w-2/5">
              <div class="p-2">
                <img class="h-20 w-20 object-contain" :src="item.image" alt="" />
              </div>
              <div class="flex flex-col justify-around ml-4 flex-grow">
                <span class="font-bold text-base">{{ item.name }}</span>
                <span v-if="item.color" class="text-gray-500 text-sm">Color: {{ item.color }}</span>
                <span v-if="item.size" class="text-gray-500 text-sm">Size: {{ item.size }}</span>
                <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>

            <div class="flex justify-center w-full sm:w-1/5 my-2 sm:my-0">
              <svg class="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" @click="item.quantity--">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
              <input class="mx-2 border rounded-sm text-center w-8" type="number" v-model="item.quantity" min="1" />
              <svg class="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" @click="item.quantity++">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>

            <span class="text-center hidden md:block w-full sm:w-1/5 font-semibold text-sm">${{ item.price.toFixed(2) }}</span>
            <span class="text-center w-full sm:w-1/5 font-semibold text-sm">${{ (item.price * item.quantity).toFixed(2) }}</span>
          </div>

          <NuxtLink to="/" class="">
            <button class="flex font-semibold bg-red-500 text-gray-100 px-3 py-2 rounded-md text-sm mt-10">
              <svg class="fill-current mr-2 text-gray-100 w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
              </svg>
              Continue Shopping
            </button>
          </NuxtLink>
        </div>

        <!-- Order Summary -->
        <div id="summary" class="w-full lg:w-4/12 px-4 sm:px-6 py-6 mt-6 lg:mt-0">
          <h1 class="font-semibold text-lg sm:text-xl border-b pb-4">Order Summary</h1>
          <div class="flex justify-between mt-4 mb-3">
            <span class="font-semibold text-sm uppercase">Items {{ totalItems }}</span>
            <span class="font-semibold text-sm">${{ totalCost.toFixed(2) }}</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select class="block outline-none border border-red-300 rounded-md p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
              <option>Express shipping - $16.00</option>
              <option>1 Day Delivery - $19.00</option>
            </select>
          </div>
          <div class="py-3">
            <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm border border-red-300 rounded-md outline-none w-full" />
          </div>
          <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm rounded-md text-white uppercase">Apply</button>

          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${{ (totalCost + 10).toFixed(2) }}</span> <!-- Including shipping -->
            </div>
            <NuxtLink to="/checkout">
              <button class="bg-red-500 font-semibold hover:bg-red-600 rounded-md py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
