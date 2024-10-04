<script setup>
import { ref } from "vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/vue";

// current image
const setImage = ref("../singleproduct/mobile01.png");

// Define array of images
const images = [
  {
    thumb: "../singleproduct/mobile01.png",
    full: "../singleproduct/mobile01.png",
  },
  {
    thumb: "../singleproduct/mobile02.png",
    full: "../singleproduct/mobile02.png",
  },
  {
    thumb: "../singleproduct/mobile03.png",
    full: "../singleproduct/mobile03.png",
  },
  {
    thumb: "../singleproduct/mobile04.jpg",
    full: "../singleproduct/mobile04.jpg",
  },
  {
    thumb: "../singleproduct/mobile05.png",
    full: "../singleproduct/mobile05.png",
  },
];

function showFullImage(image) {
  setImage.value = image.full;
}
</script>

<template>
  <div>
    <div class="main-img">
      <img class="w-full object-cover h-[380px] md:h-[400px] rounded-md" :src="setImage" alt="Product Image" />
    </div>
    <div class="mt-4">
      <swiper
        :slides-per-view="3"
        space-between="30"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '300': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }"
        :modules="[ Autoplay]"
        class="mySwiper"
      >
        <swiper-slide v-for="(img, index) in images" :key="index">
          <img
            :src="img.thumb"
            class="cursor-pointer object-cover h-32 rounded-md mx-auto"
            :key="img.thumb"
            @click="showFullImage(img)"
            alt="Thumbnail"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
