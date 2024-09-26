<script setup>
import InputText from "primevue/inputtext";
import { useRoute } from "vue-router";

const route = useRoute();
const categoryId = ref(route.params.id); // Get category ID from route params

const crumbs = [{ name: "Home", link: "/" }, { name: "ProductPage" }];

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
        brand: "Apple",
        color: "Red",
        vendor: "Vendor1",
        categories: ["Clothing"],
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
        brand: "Nokia",
        color: "Blue",
        vendor: "Vendor2",
        categories: ["HeadPhones"],
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
        brand: "Samsung",
        color: "Yellow",
        vendor: "Vendor3",
        categories: ["Computers"],
    },
    {
        id: 4,
        name: "Small Bookshelf",
        image: "/images/pro-4.png",
        price: "$360",
        prevPrice: "$460",
        rating: 5,
        ratingCount: 100,
        discount: "-40%",
        brand: "Apple",
        color: "Green",
        vendor: "Vendor4",
        categories: ["Home Appliances"],
    },
]);
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
                    <div class="border rounded p-4 max-h-screen">
                        <div class="mb-2">
                            <h4 class="mb-2 text-lg font-semibold text-dark">Price Range</h4>
                            <InputText v-model.number="filters.price"
                                class="w-full px-1 py-1 mb-3 text-center border focus:outline-none hover:outline-none" />
                            <input type="range" min="0" max="1000" step="1" class="w-full mb-3 custom-range" />
                        </div>

                        <!-- category -->
                        <div class="mb-2">
                            <select id="categories"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5">
                                <option selected>Choose a Category</option>
                                <option v-for="category in categories" :key="category" :value="category">
                                    {{ category }}
                                </option>
                            </select>
                        </div>

                        <!-- brand -->
                        <div class="pb-2">
                            <select id="brands"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5">
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
                                <li v-for="rating in ratings" :key="rating" class="p-2 border rounded cursor-pointer"
                                    :class="{
                    'bg-primary text-white': filters.rating == rating,
                    'bg-gray-100 text-black': filters.rating != rating,
                }" @click="applyFilter('rating', rating)">
                                    {{ rating }} Stars
                                </li>
                                <li class="p-2 border rounded cursor-pointer" :class="{
                    'bg-primary text-white': filters.rating === '',
                    'bg-gray-100 text-black': filters.rating !== '',
                }" @click="applyFilter('rating', '')">
                                    All Ratings
                                </li>
                            </ul>
                        </div>
                        <!-- color -->
                        <div class="mb-2">
                            <select id="color"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5">
                                <option selected>Choose a Colour</option>
                                <option v-for="color in colors" :key="color" :value="color">
                                    {{ color }}
                                </option>
                            </select>
                        </div>
                        <!-- vendor -->
                        <div class="mb-2">
                            <h4 class="mb-2 text-lg font-semibold text-dark">Vendor</h4>
                            <select id="vendor"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5">
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
                    <div class="grid grid-cols-1 gap-6 pb-4 md:grid-cols-2 lg:grid-cols-4">
                        <ProductCard v-for="product in products" :key="product.id" :product="product" />
                    </div>
                    <!-- Pagination -->
                    <pagination />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
