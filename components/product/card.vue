<script setup>
import { useCartsStore } from '@/stores/carts';

const carts = useCartsStore();
const whishList = ref(false);

console.log(carts.items) 

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const addCart = (item) => {
    carts.addToCart(item);
};

const addToWishlist = () => {
    whishList.value = !whishList.value;
};
</script>

<template>
  <div class="relative">
    <div
      class="relative flex items-center justify-center rounded-t-md p-2 md:p-4 bg-gray-100 cursor-pointer group"
    >
      <div
        v-if="product.discount"
        class="absolute px-2 py-1 text-xs font-bold rounded-md text-light bg-primary top-2 left-2"
      >
        {{ product.discount }}
      </div>
      <div>
        <NuxtLink :to="`/products/${product.id}`">
          <img
            :src="product.image"
            alt="Product Image"
            class="object-contain w-full h-40 "
          />
        </NuxtLink>
      </div>
      <div class="absolute flex flex-col space-y-2 right-4 top-2">
        <button
          class="p-1 flex items-end justify-center text-gray-900 bg-white rounded-full"
          @click="addToWishlist"
        >
          <Icon
            :name="
              whishList ? 'fluent:heart-28-filled' : 'fluent:heart-28-regular'
            "
            :class="[ 'w-4 h-4',{ 'text-primary': whishList }]"
          />
        </button>
        <button class="p-1 text-gray-900 bg-gray-50 flex items-end justify-center rounded-full">
          <Icon name="mdi:eye-outline" class="w-4 h-4" />
        </button>
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 flex items-center justify-center text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-90 group-hover:opacity-100"
      >
        <button class="w-full py-2" @click="addCart(product)">
          Add To Cart 
        </button>
      </div>
    </div>
    <NuxtLink :to="`/products/${product.id}`">
      <div class="p-2 rounded-b-md  bg-gray-50 text-left">
        <h3 class="text-sm md:text-base font-semibold">{{ product.name }}</h3>
        <div class="flex items-end gap-2">
          <div class="text-primary font-semibold text-sm md:text-base"> ${{ product.price }}</div>
          <div class="line-through text-secondary text-xs md:text-sm">${{ product.prevPrice }}</div>
        </div>
        <div class="flex items-center">
          <Rating :rating="product.rating" />
          <span class="ml-1 text-xs md:text-sm text-gray-500"
            >({{ product.ratingCount }})</span
          >
        </div>
      </div>
    </NuxtLink>
  </div>
</template>


<style scoped>
.word{
    color:red
}
</style>