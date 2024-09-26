<script setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from "vue";

const props = defineProps({
    title: String,
    subtitle: String,
    items: Array,
});

const responsiveOptions = {
    320: {
        slidesPerView: 2,
        spaceBetween: 16,
    },
    560: {
        slidesPerView: 3,
        spaceBetween: 16,
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 7,
        spaceBetween: 24,
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

    <div class=" relative mt-10 cursor-pointer ">
        <div class="flex items-center justify-between mb-4">
            <TitleWithSub title="Categories" subtitle="Browse By Category" />
            <div class="absolute top-0 right-0 flex items-center justify-center space-x-2">
                <button ref="prevEl" class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
                    @click="prev">
                    <Icon name="mdi:chevron-left" class="text-3xl" />
                </button>
                <button ref="nextEl" class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
                    @click="next">
                    <Icon name="mdi:chevron-right" class="text-3xl" />
                </button>
            </div>
        </div>
        <div class="relative w-full">
            <swiper ref="carousel" 
                :slides-per-view="7"
                space-between="10"
                :breakpoints="responsiveOptions"
                :autoplay="{ delay: 2500 }" 
                :loop="true"
                :slidesPerGroup = 4
                :navigation="{
                        prevEl: prevEl,
                        nextEl: nextEl,
                    }" :modules="[Pagination, Navigation, Autoplay]" class="mySwiper w-full">
                <swiper-slide v-for="(item, index) in items" :key="index">
                    <NuxtLink :to="`/category/${item.id}`">
                        <div class="flex flex-col items-center justify-center border mb-6 py-2 text-center rounded-sm  hover:bg-primary hover:text-light">
                            <Icon :name="item.icon" class="mb-2 text-4xl" />
                            <span>{{ item.label }}</span>
                        </div>
                    </NuxtLink>
                </swiper-slide>
            </swiper>
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
