<script setup>
import { ref } from "vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/vue";

// current image
const setImage = ref("../images/Group1000005941.png");

// Define array of images
const images = [
  {
    thumb: "../images/Group1000005941.png",
    full: "../images/Group1000005941.png",
  },
  {
    thumb: "../images/Group1000005942.png",
    full: "../images/Group1000005942.png",
  },
  {
    thumb: "../images/Group1000005943.png",
    full: "../images/Group1000005943.png",
  },
  {
    thumb: "../images/Group1000005944.png",
    full: "../images/Group1000005944.png",
  },
  {
    thumb: "../images/Group1000005944.png",
    full: "../images/Group1000005944.png",
  },
  {
    thumb: "../images/Group1000005944.png",
    full: "../images/Group1000005944.png",
  },
  {
    thumb: "../images/Group1000005944.png",
    full: "../images/Group1000005944.png",
  },
];

function showFullImage(image) {
  setImage.value = image.full;
}
</script>

<template>
  <div>
    <div class="main-img">
      <img class="w-full" :src="setImage" alt="Product Image" />
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 20,
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
            class="cursor-pointer mx-auto"
            :key="img.thumb"
            @click="showFullImage(img)"
            alt="Thumbnail"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
