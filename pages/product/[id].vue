<script setup>
    import { ref } from 'vue';
const crumbs = [
  { name: "Account", link: "/" },
  { name: " Gaming", link: "/" },
  { name: "Havic HV G-92 Gamepad" },
];

// product details
const product = ref({
  title: "Havic HV G-92 Gamepad",
  rating: {
    value: 4,
    reviews: 150,
  },
  availability: "In Stock",
  price: "$192.00",
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
  colors: ["red", "gray", "white", "black"],
  sizes: ["XS", "S", "M", "L", "XL"],
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
    'bg-black': color === 'black'
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
    <div class="xl:px-36 px-4 w-full">
      <div>
        <Breadcrumb :crumbs="crumbs" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-7">
          <ProductImg />
        </div>
        <div class="col-span-12 lg:col-span-5">
          <div class="bg-white mx-auto">
            <h2 class="text-xl font-semibold">{{ product.title }}</h2>
            <div class="flex items-center mt-2 mb-3">
              <Rating :rating="product.rating.value" />
              <span class="text-gray-600 ml-2">({{ product.rating.reviews }} Reviews)</span>
              <span class="px-2">|</span>
              <span class="text-green-500">{{ product.availability }}</span>
            </div>
            <div class="text-2xl font-bold mb-3">{{ product.price }}</div>
            <p class="text-gray-700 pb-3 border-b">{{ product.description }}</p>
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
            <!-- share to social -->
            <button class="border border-gray-500 h-11 text-white px-2 py-1 rounded">
              <Icon class="h-6 w-6 text-gray-800" name="gg:facebook" />
            </button>

            <div class="rounded border border-gray-300 mt-4">
              <div class="flex gap-2 border-b p-3">
                <span>
                  <Icon class="h-10 w-10" name="iconoir:delivery-truck" />
                </span>
                <div>
                  <span class="block font-semibold">{{
                    product.delivery.freeDelivery
                  }}</span>
                  <p>{{ product.delivery.deliveryDetails }}</p>
                </div>
              </div>
              <div class="flex gap-2 p-4">
                <span>
                  <Icon class="h-10 w-10" name="icon-park-outline:return" />
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

      <div class="mt-8 md:mt-14">
        <TitleWithSubTitle title="Related Item" />
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <ProductCard class="mt-8 md:mt-8" v-for="item in items.slice(0, 4)" :key="item.id" :product="item" />
      </div>
    </div>
  </NuxtLayout>
</template>

<!-- <style scoped>
.main-img {
  width: 710px;
}
</style> -->
