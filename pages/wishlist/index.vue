<!-- pages/wishlist.vue -->
<script setup>
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

definePageMeta({
  layout: 'home',
});

const crumbs = [{ name: "Home", link: "/" }, { name: "Wishlist" }];

const products = ref([
  {
    id: 1,
    name: 'The North Coat',
    image: '/images/pro-1.png',
    price: '$260',
    prevPrice: '$360',
    rating: 4,
    ratingCount: 65,
    discount: '-40%',
  },
  {
    id: 2,
    name: 'Gucci Duffle Bag',
    image: '/images/bag.png',
    price: '$960',
    prevPrice: '$1160',
    rating: 5,
    ratingCount: 30,
    discount: '-35%',
  },
  {
    id: 3,
    name: 'RGB CPU Cooler',
    image: '/images/pro-3.png',
    price: '$160',
    prevPrice: '$170',
    rating: 4,
    ratingCount: 50,
    discount: '-40%',
  },
  {
    id: 4,
    name: 'Small BookShelf',
    image: '/images/pro-4.png',
    price: '$360',
    prevPrice: '$460',
    rating: 5,
    ratingCount: 100,
    discount: '-40%',
  },
  {
    id: 5,
    name: 'The Eos Camera',
    image: '/images/camera.png',
    price: '$260',
    prevPrice: '$360',
    rating: 4,
    ratingCount: 65,
  },
]);

const responsiveOptions = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  560: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const moveAllToBag = () => {
  alert('All items moved to bag!');
};

const sellAll = () => {
  alert('All items sold!');
};

const addToBag = (product) => {
  alert(`Added ${product.name} to bag!`);
};
</script>

<template>
  <NuxtLayout name="home">
    <div class="container mx-auto px-4 md:px-36">
      <div class="py-1 md:py-4 text-left">
        <Breadcrumb :crumbs="crumbs" />
      </div>

      <!-- Wishlist Section -->
      <div class="relative bg-white rounded-lg mb-10">
        <div class="flex items-center justify-between mb-6">
          <h1 class="text-2xl font-bold">Wishlist ({{ products.length }})</h1>
          <Button class="w-48 bg-transparent border border-red-700 text-red-700 hover:bg-red-700 hover:text-white"
            @click="moveAllToBag">
            Move All To Cart
            <Icon name="material-symbols:add-shopping-cart-rounded" class="w-5 font-semibold h-5 ml-1" />
          </Button>
        </div>
        <div>
          <div class="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-2">
            <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-bag="addToBag" />
          </div>
        </div>
      </div>

      <!-- Just For You Section -->
      <div class="relative p-2 md:p-4 bg-white rounded-lg">
        <div class="flex items-center justify-between mb-6">
          <TitleWithSub class="my-2" title="Just For You" subtitle="Special Things For You" />
          <Button class="w-32 bg-transparent border border-red-700 text-red-700 hover:bg-red-600 hover:text-white"
            @click="sellAll">
            See All
            <Icon name="ic:round-arrow-outward" class="w-5 font-semibold h-5 ml-1" />
          </Button>
        </div>

        <div>
          <swiper :breakpoints="responsiveOptions" :loop="true" :autoplay="{ delay: 3000 }"
            :modules="[Pagination, Navigation, Autoplay]" class="mySwiper">
            <swiper-slide v-for="product in products" :key="product.id">
              <ProductCard :product="product" @add-to-bag="addToBag" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
/* Add any page-specific styles here */
</style>
