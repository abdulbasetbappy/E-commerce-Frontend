<script setup>
import { useCartsStore } from "@/stores/carts";

const carts = useCartsStore();

// Method to increase item quantity
const increaseQuantity = (item) => {
  item.quantity += 1;
  carts.updateItem(item);
};

// Method to decrease item quantity
const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity -= 1;
    carts.updateItem(item);
  }
};

// Method to delete item
const deleteItem = (item) => {
  carts.removeItem(item.id);
};

// Computed property to get total items count
const totalItems = computed(() => {
  return carts.items.reduce((total, item) => total + item.quantity, 0);
});

// Computed property to get total price
const totalPrice = computed(() => {
  return carts.items.reduce((total, item) => total + item.quantity * item.price, 0);
});
// Computed property to get total price
const totalPrevPrice = computed(() => {
  return carts.items.reduce((total, item) => total + item.quantity * item.prevPrice, 0);
});

console.log(carts);
console.log(carts.items);
</script>

<template>
  <div>
    <div class="flex rounded-t-sm items-center justify-between px-4 py-1 text-white bg-gray-900">
      <span class="text-sm font-semibold">Shop $400 More and Enjoy</span>
      <span class="text-white font-bold">{{ totalItems }}</span>
    </div>
    <div class="px-4 rounded-b-sm express-delivery text-green-800 bg-green-300">
      <p class="font-bold ">
        <Icon name="iconoir:delivery-truck" class="w-6 h-6" /> Free Express Delivery
      </p>
    </div>
    <div class="p-4 cart-items">
      <div
        v-for="item in carts.items"
        :key="item.id"
        class="flex items-center py-2 border-b cart-item"
      >
        <img :src="item.image" :alt="item.name" class="w-20 h-20 mr-4" />
        <div class="flex-grow item-details">
          <p class="text-sm pe-4">{{ item.name }}</p>
          <div class="flex items-center mt-2">
            <button class="px-2 border rounded-l" @click="decreaseQuantity(item)">
              <svg
                class="w-4 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <input
              type="number"
              :value="item.quantity"
              min="1"
              class="w-10 text-center border-t border-b"
              @input="($event) => { item.quantity = Number($event.target.value); carts.updateItem(item); }"
            />
            <button class="px-2 border rounded-r" @click="increaseQuantity(item)">
              <svg
                class="w-4 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="item-quantity">
          <p class="text-sm">
            <span class="block">{{ totalPrice }}</span>
            <span
              v-if="item.prevPrice"
              class="block text-gray-500 line-through"
              >{{ totalPrevPrice }}</span
            >
          </p>
        </div>
        <button class="ml-2 text-lg text-primary" @click="deleteItem(item)">
          <Icon class="w-6 h-6" name="charm:cross" />
        </button>
      </div>
    </div>
    <div class="flex absolute bottom-0 items-center justify-center w-full px-4 order-summary">
      <NuxtLink
        to="/cart"
        class="w-full rounded-l-md py-2 text-white bg-red-500 mb-4 ps-4 pe-8"
      >
        Order Place
      </NuxtLink>

      <span class="px-4 py-2 font-bold mb-4 rounded-r-md text-white bg-red-700">${{ totalPrice }}</span>
    </div>
  </div>
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