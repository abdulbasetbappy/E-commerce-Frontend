
<script setup>
import { ref } from "vue";
definePageMeta({
  layout: "home",
});

const products = ref([
  {
    id: 1,
    name: "The north coat",
    image: "/images/pro-1.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    discount: "-40%",
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    image: "/images/bag.png",
    price: "$960",
    prevPrice: "$1160",
    rating: 5,
    ratingCount: 30,
    discount: "-35%",
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    image: "/images/pro-3.png",
    price: "$160",
    prevPrice: "$170",
    rating: 4,
    ratingCount: 50,
    discount: "-40%",
  },
  {
    id: 4,
    name: "Small BookSelf",
    image: "/images/pro-4.png",
    price: "$360",
    prevPrice: "$460",
    rating: 5,
    ratingCount: 100,
    discount: "-40%",
  },
  {
    id: 5,
    name: "The Eos Camera",
    image: "/images/camera.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
]);
</script>


<template>
  <NuxtLayout name="home">
    <div class="container relative p-4 mx-auto mt-20 md:p-8">
      <div class="flex items-center justify-between mb-4">
        <div class="flex flex-row items-center gap-4">
          <h1 class="text-xl">Wishlist (4)</h1>
        </div>
        <div
          class="absolute top-0 flex items-center justify-center space-x-2 right-1 lg:right-0"
        >
          <Button
            class="w-48 !text-black bg-transparent border border-dark hover:bg-gray hover:!text-white"
          >
            Move All To Bag
          </Button>
        </div>
      </div>
      <div class="relative">
        <div
          class="grid grid-cols-1 gap-6 p-4 lg:grid-cols-4 md:grid-cols-2 md:p-0"
        >
          <ProductCard
            v-for="(product, index) in products.slice(0, 4)"
            :key="index"
            class="mt-8 md:mt-14"
            :product="product"
          />
        </div>
      </div>
      <div class="flex items-center justify-center py-8 md:py-14"></div>
    </div>
    <div class="container relative p-4 mx-auto mt-20 md:p-8">
      <div class="flex items-center justify-between mb-4">
        <div class="flex flex-row items-center gap-4">
          <TitleWithSubTitle title="Just For You" />
        </div>
        <div
          class="absolute top-0 flex items-center justify-center space-x-2 right-1 lg:right-0"
        >
          <Button
            class="w-32 !text-black bg-transparent border border-dark hover:bg-gray hover:!text-white"
          >
            Sell All
          </Button>
        </div>
      </div>
      <div class="relative">
        <div
          class="grid grid-cols-1 gap-6 p-4 lg:grid-cols-4 md:grid-cols-2 md:p-0"
        >
          <ProductCard
            v-for="(product, index) in products.slice(0, 4)"
            :key="index"
            class="mt-8 md:mt-14"
            :product="product"
          />
        </div>
      </div>
      <div class="flex items-center justify-center py-8 md:py-14"></div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.word {
  color: red;
}
</style>
