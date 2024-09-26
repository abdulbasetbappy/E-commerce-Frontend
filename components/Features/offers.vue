<script setup>
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref, watch } from "vue";

const props = defineProps({
    title: String,
    subtitle: String,
    items: Array,
    endTime: {
        type: Date,
        required: true,
    },
});

console.log('hello');

const showFlashSale = ref(true);

watch(
    () => props.endTime,
    () => {
        if (new Date().getTime() >= props.endTime.getTime()) {
            showFlashSale.value = false;
        }
    }
);

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
        spaceBetween: 30,
    },
};

const swiperInstance = ref(null);
const prevEl = ref(null);
const nextEl = ref(null);

const navigationOptions = ref({});

console.log(props.items);

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
    <div class="container relative mx-auto mt-10">
        <div class="flex justify-between mb-4">
            <div class="flex flex-row  gap-4">
                <TitleWithSub title="Today's" subtitle="Flash Sales" />

                <Countdown
                    :dclass="'reverse flex-col items-center justify-center text-dark flex-col-reverse hidden md:flex'"
                    :endTime="new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000)" />
            </div>
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
        <div class="relative">
            <swiper ref="swiperInstance" 
                :slides-per-view="4" 
                :space-between="20" 
                :breakpoints="responsiveOptions"
                :loop="true"
                :navigation="{
                        prevEl: prevEl,
                        nextEl: nextEl
                    }"
                :autoplay="{ delay: 3000 }" 
                :modules="[Pagination, Navigation, Autoplay]" class="mySwiper">
                <swiper-slide v-for="(item, index) in items" :key="index">
                    <ProductCard class="mt-8 md:mt-10" :product="item" />
                </swiper-slide>
            </swiper>
        </div>
        <div class="flex items-center justify-center py-8 md:py-14">
            <NuxtLink to="/productPage/{id}">
                <Button class="w-40 text-center"> View All products </Button>
            </NuxtLink>

        </div>
    </div>
</template>

<style scoped>
.word {
    color: red;
}
</style>
