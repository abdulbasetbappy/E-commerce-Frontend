<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import Slider from 'primevue/slider';

const route = useRoute();
const categoryId = ref(route.params.id);

const crumbs = [
    { name: "Home", link: "/" },
    { name: "All Products", link: "/products" },
];

const products = ref([]);
//onmount get products from api/products.ts
onMounted(async () => {
    products.value = await $fetch("api/products");
});
const filters = ref({
    brand: "",
    rating: "",
    price: 5000, // Setting the default to maximum price
    category: "",
});

// Set the initial slider values
const minPrice = 0; // Minimum price set to 0
const maxPrice = 5000; // Maximum price set to 5000
const value = ref([minPrice, maxPrice]); // Default slider value

// Update filters.price based on slider value
watch(value, (newValue) => {
    filters.value.price = newValue[1]; // Set to max price selected
});

// Define brands and ratings
const brands = ref(["Apple", "Nokia", "Samsung", "Sony", "Gucci", "Dell", "HP", "Lenovo", "Asus", "Acer"]);
const ratings = ref([5, 4, 3, 2, 1]);

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
    "jewelry",
]);

// Computed property for filtered products
const filteredProducts = computed(() => {
    return products.value.filter(product => {
        const matchesBrand = filters.value.brand ? product.brand === filters.value.brand : true;
        const matchesRating = filters.value.rating ? product.rating === parseInt(filters.value.rating) : true;
        const matchesPrice = product.price >= value.value[0] && product.price <= value.value[1]; // Use slider values for price filter
        const matchesCategory = filters.value.category ? product.categories.includes(filters.value.category) : true;
        return matchesBrand && matchesRating && matchesPrice && matchesCategory;
    });
});

// Watch for route changes if categoryId is dynamic
watch(route, (newRoute) => {
    categoryId.value = newRoute.params.id;
    // You might want to fetch or filter products based on the new categoryId
});

// Method to apply filters
const applyFilter = (filterType, value) => {
    filters.value[filterType] = value;
};

// Optional: Reset filters
const resetFilters = () => {
    filters.value = {
        brand: "",
        rating: "",
        category: "",
        price: maxPrice, // Reset to the max price
    };
};
</script>

<template>
    <NuxtLayout name="home">
        <div class="px-8 md:px-32 pb-10 container mx-auto">
            <div class="py-4 text-left">
                <Breadcrumb :crumbs="crumbs" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                <!-- Filters Section -->
                <div class="col-span-12 lg:col-span-3">
                    <div class="border rounded p-4 max-h-screen overflow-y-auto">
                        <!-- Price Range (using PrimeVue Slider) -->
                        <div class="mb-4">
                            <h4 class="mb-2 text-lg font-semibold text-dark">Price Range</h4>
                            <Slider v-model="value" range :min="minPrice" :max="maxPrice" class="text-red-600 w-full mb-2" />
                            <div class="flex justify-between text-sm text-gray-600">
                                <span>Min: ${{ value[0] }}</span>
                                <span>Max: ${{ value[1] }}</span>
                            </div>
                        </div>
                        <!-- Category -->
                        <div class="mb-4">
                            <label for="categories" class="block mb-2 text-sm font-medium text-gray-700">Category</label>
                            <select id="categories" v-model="filters.category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5">
                                <option value="">All Categories</option>
                                <option v-for="category in categories" :key="category" :value="category">
                                    {{ category }}
                                </option>
                            </select>
                        </div>

                        <!-- Brand -->
                        <div class="mb-4">
                            <label for="brands" class="block mb-2 text-sm font-medium text-gray-700">Brand</label>
                            <select id="brands" v-model="filters.brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5">
                                <option value="">All Brands</option>
                                <option v-for="brand in brands" :key="brand" :value="brand">
                                    {{ brand }}
                                </option>
                            </select>
                        </div>

                        <!-- Rating -->
                        <div class="mb-4">
                            <h4 class="mb-2 text-lg font-semibold text-dark">Rating</h4>
                            <ul class="flex flex-col">
                                <!-- Loop through ratings and display star icons -->
                                <li v-for="rating in ratings" :key="rating" class="p-2 rounded cursor-pointer flex items-center space-x-2" :class="{
                                    'bg-gray-100 text-white': filters.rating === rating.toString(),
                                    'bg-white text-black': filters.rating !== rating.toString(),
                                }" @click="applyFilter('rating', rating.toString())">
                                    <!-- Display star icons dynamically based on the rating -->
                                    <Icon name="ph:star-fill" class="text-yellow-500" v-for="n in rating" :key="n" />
                                </li>
                            </ul>
                        </div>

                        <!-- Reset Filters Button -->
                        <div class="mt-4">
                            <button @click="resetFilters" class="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Products Section -->
                <div class="col-span-12 lg:col-span-9">
                    <div v-if="filteredProducts.length > 0" class="grid grid-cols-2 gap-2 pb-4 md:grid-cols-2 lg:grid-cols-4">
                        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
                    </div>
                    <div v-else class="text-center py-10">
                        <p class="text-gray-500">No products found matching your criteria.</p>
                    </div>
                    <!-- Pagination -->
                    <Pagination />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<style>
/* Custom Slider styles */
.p-slider-range {
    background-color: #dc2626 !important; /* Tailwind red-600 */
    height: 12px !important;
    margin: 0 !important;
    top: 0px !important;
}

.p-slider-handle {
    border-color: #dc2626 !important; /* Tailwind red-600 */
    background-color: #dc2626 !important; /* Tailwind red-600 */
    outline: none !important;
}

.p-slider{
    height: 12px;
}

</style>