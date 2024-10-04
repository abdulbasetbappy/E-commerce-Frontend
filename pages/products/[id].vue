<script setup>
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

const crumbs = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "Havic HV G-92 Gamepad" },
];
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
// product details
const product = ref({
  title: "Havic HV G-92 Gamepad",
  rating: {
    value: 4,
    reviews: 150,
  },
  availability: "In Stock",
  price: "$192.00",
  InstorePrice: "$200.00",
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
  colors: ["red", "gray", "white", "black", "blue", "yellow"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  actions: {
    addToCart: "Add To Cart",
    wishlist: "Add to Wishlist",
    buyNow: "Buy Now",
  },
  delivery: {
    freeDelivery: "Free Delivery",
    return: "Return Delivery",
    deliveryDetails: "Enter your postal code for Delivery Availability",
    returnDelivery: "Free 30 Days Delivery Returns. Details",
  },
});

const selectedSize = ref("M");
const selectedColor = ref("red");
const quantity = ref(2);

const selectSize = (size) => {
  selectedSize.value = size;
};
const selectColor = (color) => {
  selectedColor.value = color;
};

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const colorClass = (color) => {
  return {
    'border-2 border-gray-400': selectedColor.value === color,
    'bg-red-500': color === 'red',
    'bg-gray-500': color === 'gray',
    'bg-white border': color === 'white',
    'bg-black': color === 'black',
    'bg-blue-500': color === 'blue',
    'bg-yellow-500': color === 'yellow',
  };
};

// items
const items = ref([
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
  {
    id: 6,
    name: "The Teddy",
    image: "/images/teddy.jpg",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },

]);
</script>
<template>
  <NuxtLayout name="home">
    <div class="md:px-36 px-4 container mx-auto">
      <div>
        <Breadcrumb :crumbs="crumbs" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-6">
          <ProductImg />
        </div>
        <div class="col-span-12 lg:col-span-6">
          <div class="bg-white mx-auto">
            <h2 class="text-xl md:text-2xl font-semibold">{{ product.title }}</h2>
            <div class="flex items-center mt-2 mb-3">
              <Rating :rating="product.rating.value" />
              <span class="text-gray-400 ml-2">({{ product.rating.reviews }} Reviews)</span>
              <span class="px-2">|</span>
              <span class="text-green-500 font-semibold">{{ product.availability }}</span>
            </div>
            <div class="text-xl font-semibold mb-3">{{ product.price }}
              <span class="text-gray-400 text-sm line-through">{{ product.InstorePrice }}</span>
            </div>
            <p class="text-gray-500 pb-3 border-b">{{ product.description }}</p>
            <!-- colors -->
            <div class="my-3">
              <div class="flex space-x-2">
                <span class="block font-semibold mb-1">Colours:</span>
                <div v-for="color in product.colors" :key="color" @click="selectColor(color)" :class="colorClass(color)" class="w-6 h-6 rounded">
                </div>
              </div>
            </div>
            <!-- size -->
            <div class="mb-3">
              <div class="flex space-x-2">
                <span class="block font-semibold mb-1">Size:</span>
                <button v-for="size in product.sizes" :key="size" @click="selectSize(size)" :class="[
                  'px-3 py-1 border rounded',
                  { 'bg-gray-200': size === selectedSize },
                ]">
                  {{ size }}
                </button>
              </div>
            </div>
            <div class="flex gap-4 mb-3">
              <div class="relative flex items-center max-w-[9rem]">
                <button type="button" @click="decrementQuantity"
                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                  <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 1h16" />
                  </svg>
                </button>
                <input type="number" v-model="quantity"
                  class="bg-gray-50 border border-gray-300 h-11 text-center focus:outline-none text-gray-900 text-sm focus:ring-blue-500  block w-full py-2.5"
                  required />
                <button type="button" @click="incrementQuantity"
                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                  <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>
              <button class="px-4 bg-[#0C7649] text-white py-2 rounded w-72">
                {{ product.actions.addToCart }}
              </button>
              <button class="border border-gray-300 h-11 text-white py-2 px-3 rounded">
                <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                </svg>
              </button>
            </div>
            <button class="flex-1 w-full bg-primary text-white py-2 h-11 rounded mb-3">
              {{ product.actions.buyNow }}
            </button>

            <div class="rounded border border-gray-300 mt-3">
              <div class="flex gap-2 items-center px-3 border-b p-1">
                <span>
                  <Icon class="h-8 w-8" name="iconoir:delivery-truck" />
                </span>
                <div>
                  <span class="block font-semibold">{{
                    product.delivery.freeDelivery
                  }}</span>
                  <p>{{ product.delivery.deliveryDetails }}</p>
                </div>
              </div>
              <div class="flex gap-2 p-1 px-3 items-center">
                <span>
                  <Icon class="h-8 w-8" name="icon-park-outline:return" />
                </span>
                <div>
                  <span class="block font-semibold">{{
                    product.delivery.return
                  }}</span>
                  <p>
                    {{ product.delivery.returnDelivery }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- rating -->
      <RatingProduct />
      <!-- product description -->
      <ProductDetails />

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
            <swiper-slide v-for="product in items" :key="product.id">
              <ProductCard :product="product" @add-to-bag="addToBag" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<!-- <style scoped>
.main-img {
  width: 710px;
}
</style> -->
