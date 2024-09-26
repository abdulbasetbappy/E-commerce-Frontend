<script setup>
import { Icon } from "@iconify/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from "vue";

const props = defineProps({
    title: String,
    subtitle: String,
    items: Array,
});

const responsiveOptions = {
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    560: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 30,
    },
};

const swiperInstance = ref(null);
const prevEl = ref(null);
const nextEl = ref(null);

const navigationOptions = ref({});

onMounted(() => {
    navigationOptions.value = {
        prevEl: prevEl.value,
        nextEl: nextEl.value,
    };
});

const prev = () => {
    if (swiperInstance.value) {
        swiperInstance.value.slidePrev();
    }
};

const next = () => {
    if (swiperInstance.value) {
        swiperInstance.value.slideNext();
    }
};
</script>
<template>
    <div class="container relative mt-20">
        <div class="flex items-center justify-between mb-4">
            <TitleWithSub title="For You" subtitle="Explore Our Products" />
            <div class="absolute top-0 right-0 flex items-center justify-center space-x-2">
                <button ref="prevEl" class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
                    @click="prev">
                    <Icon icon="mdi:chevron-left" class="text-3xl" />
                </button>
                <button ref="nextEl" class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
                    @click="next">
                    <Icon icon="mdi:chevron-right" class="text-3xl" />
                </button>
            </div>
        </div>
        <div class="relative">
            <swiper ref="swiperInstance" :slides-per-view="4" :space-between="20" :autoplay="{ delay: 3000 }"
                :loop="true" :grid="{ rows: 2, fill: 'row' }" :breakpoints="responsiveOptions" :navigation="{
                        prevEl: prevEl,
                        nextEl: nextEl,
                    }" :modules="[Navigation, Pagination, Autoplay, Grid]" class="mySwiper">
                <swiper-slide v-for="(item, index) in items" :key="index">
                    <ProductCard class="mt-8 md:mt-14" :product="item" />
                </swiper-slide>
            </swiper>
        </div>
        <div class="flex items-center justify-center py-8 md:py-14">
            <NuxtLink to="/productPage/{id}">
                <Button class="w-40 text-center">View All Products</Button>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.swiper-pagination {
    position: static !important;
    margin-top: 20px;
}

.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
}

.swiper-pagination-bullet-active {
    background-color: #db4444;
    border: 2px solid rgba(128, 128, 128, 0.527);
    width: 12px;
    height: 12px;
}
</style>
