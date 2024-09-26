<script setup>

const products = [
    {
        name: "PlayStation 5",
        description: "Black and White version of the PS5 coming out on sale.",
        image: "/images/playstation.png",
        buttonText: "Shop Now",
        span: "col-span-1 row-span-2 md:col-span-2 lg:row-span-2",
    },
    {
        name: "Women's Collections",
        description: "Featured woman collections that give you another vibe.",
        image: "/images/women.png",
        buttonText: "Shop Now",
        span: "col-span-1 row-span-1 md:col-span-1 lg:col-span-2",
    },
    {
        name: "Speakers",
        description: "Amazon wireless speakers.",
        image: "/images/speakers.png",
        buttonText: "Shop Now",
        span: "col-span-1",
    },
    {
        name: "Perfume",
        description: "GUCCI INTENSEOUD EDP.",
        image: "/images/perfume.png",
        buttonText: "Shop Now",
        span: "col-span-1",
    },
];
</script>

<template>
    <div>
        <TitleWithSub title="Featured" subtitle="New Arrival" />
        <div class="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="(product, index) in products" :key="index" :class="product.span"
                class="relative bg-black rounded-md">
                <img :src="product.image" :alt="product.name" :class="[
                'w-full',
                index === 0 ? 'h-full ' : 'md:h-[300px]',
                index === 0
                    ? 'bg-cover'
                    : index === 1
                        ? 'object-fill'
                        : 'object-scale-down',
            ]" />

                <div class="absolute inset-0 flex flex-col justify-end p-4 bg-opacity-50">
                    <h3 class="text-2xl font-bold text-light">{{ product.name }}</h3>
                    <p class="mt-1 text-gray-300">{{ product.description }}</p>
                    <NuxtLink to="#" class="py-2 my-2 font-medium underline text-light text-md">{{ product.buttonText }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.rating .p-rating-star {
    color: #ffd700 !important;
    /* Yellow color for stars */
}

.rating .p-rating-icon-filled {
    color: #ffd700 !important;
    /* Yellow color for filled stars */
}

.rating .p-rating {
    font-size: 1rem;
    /* Adjust the size as needed */
}
</style>
