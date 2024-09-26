<script setup>
import Slider from "primevue/slider";
import { useRoute } from "vue-router";

import { ref } from "vue";
const rangeValue = ref([20, 80]);

const route = useRoute();
const categoryId = ref(route.params.id); // Get category ID from route params

const crumbs = [{ name: "Home", link: "/" }, { name: "ProductPage" }];

const products = ref([]);

try {
  await fetch("/api/products")
    .then((response) => response.json())
    .then((data) => {
      products.value = data;
    });
} catch (err) {
  console.log(err);
}

const filters = ref({
  brand: "",
  color: "",
  vendor: "",
  rating: "",
  price: 1000,
  category: "",
});

const categories = ref([
  "Phones",
  "Computers",
  "SmartWatch",
  "Camera",
  "HeadPhones",
  "Gaming",
  "Microphone",
  "Clothing",
  "Electronics",
  "Home Appliances",
  "jewelery",
]);
</script>

<template>
  <NuxtLayout name="home">
    <div class="px-8 pb-10 min-h-screen mx-auto">
      <div class="py-4 text-left">
        <Breadcrumb :crumbs="crumbs" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Filters Section -->
        <div class="col-span-12 lg:col-span-3">
          <!-- range -->
          <div class="border rounded p-4 min-h-screen">
            <div class="">
              <label for="range" class="p-col-fixed"
                >Price Range</label
              >
              <div class="my-3">
                <div class="flex justify-between">
                    <p>{{ rangeValue[0] }}</p>
                    <p>{{ rangeValue[1] }}</p>
                </div>
                <Slider v-model="rangeValue" range :min="0" :max="100" />
              </div>
            </div>

            <!-- category -->
            <div class="mb-2">
              <select
                id="categories"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5"
              >
                <option selected>Choose a Category</option>
                <option
                  v-for="category in categories"
                  :key="category"
                  :value="category"
                >
                  {{ category }}
                </option>
              </select>
            </div>

            <!-- brand -->
            <div class="pb-2">
              <select
                id="brands"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5"
              >
                <option selected>Choose a Brand</option>
                <option v-for="brand in brands" :key="brand" :value="brand">
                  {{ brand }}
                </option>
              </select>
            </div>
            <!-- rating -->
            <div class="mb-2">
              <h4 class="mb-2 text-lg font-semibold text-dark">Rating</h4>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="rating in ratings"
                  :key="rating"
                  class="p-2 border rounded cursor-pointer"
                  :class="{
                    'bg-primary text-white': filters.rating == rating,
                    'bg-gray-100 text-black': filters.rating != rating,
                  }"
                  @click="applyFilter('rating', rating)"
                >
                  {{ rating }} Stars
                </li>
                <li
                  class="p-2 border rounded cursor-pointer"
                  :class="{
                    'bg-primary text-white': filters.rating === '',
                    'bg-gray-100 text-black': filters.rating !== '',
                  }"
                  @click="applyFilter('rating', '')"
                >
                  All Ratings
                </li>
              </ul>
            </div>
            <!-- color -->
            <div class="mb-2">
              <select
                id="color"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5"
              >
                <option selected>Choose a Colour</option>
                <option v-for="color in colors" :key="color" :value="color">
                  {{ color }}
                </option>
              </select>
            </div>
            <!-- vendor -->
            <div class="mb-2">
              <h4 class="mb-2 text-lg font-semibold text-dark">Vendor</h4>
              <select
                id="vendor"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5"
              >
                <option selected>Choose a Vendor</option>
                <option v-for="vendor in vendors" :key="vendor" :value="vendor">
                  {{ vendor }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <!-- Products Section -->
        <div class="col-span-12 lg:col-span-9">
          <div
            class="grid grid-cols-1 gap-6 pb-4 md:grid-cols-2 lg:grid-cols-4"
          >
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
          <!-- Pagination -->
          <pagination />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>


<style>
.word{
    color:red;
}
</style>