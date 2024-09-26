<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const items = [
  {
    titleLogo: "/images/1200px-Apple_gray_logo 1.png",
    title: "iPhone 14 Series",
    productOffer: "Up to 10% off Voucher",
    productImg: "/images/iphone.jpg",
  },
  {
    titleLogo: "/images/1200px-Apple_gray_logo 1.png",
    title: "iPhone 14 Pro Series",
    productOffer: "Up to 20% off Voucher",
    productImg: "/images/iphone_14_pro.png",
  },
];

const activeIndex = ref(0);
let interval;

const goToSlide = (index) => {
  activeIndex.value = index;
};

const startAutoplay = () => {
  interval = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % items.length;
  }, 5000); // Change slide every 3 seconds
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
<template>
  <div id="default-carousel" class="relative w-full">
    <!-- Carousel wrapper -->
    <div class="relative md:h-96 overflow-hidden bg-[#000] h-[535px] rounded-xl">
      <!-- Only render the active slide -->
      <div v-if="items[activeIndex]" class="w-full absolute h-full px-12">
        <div
          class="grid md:grid-cols-2 grid-cols-1 gap-4 pb-8 h-full md:pt-8 items-center"
        >
          <!-- Separate transition for text content -->
          <div class="pt-20 md:pt-0 space-y-3 text-center md:text-left">
            <transition name="text-fade" mode="out-in">
              <div
                :key="`title-${activeIndex}`"
                class="flex gap-3 items-center justify-center md:justify-start"
              >
                <img class="w-8" :src="items[activeIndex].titleLogo" alt="" />
                <p class="text-white">{{ items[activeIndex].title }}</p>
              </div>
            </transition>

            <transition name="text-fade" mode="out-in">
              <h1 :key="`offer-${activeIndex}`" class="text-4xl text-white">
                {{ items[activeIndex].productOffer }}
              </h1>
            </transition>

            <transition name="button-fade" mode="out-in">
              <button
                :key="`button-${activeIndex}`"
                type="button"
                class=" text-gray-100"
              >
                Shop Now
                <svg
                  class="inline ms-1"
                  width="16"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8H18M18 8L11 1M18 8L11 15"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </transition>
          </div>

          <!-- Separate transition for image -->
          <transition name="image-fade" mode="out-in">
            <div :key="`image-${activeIndex}`">
              <img class="w-full" :src="items[activeIndex].productImg" alt="" />
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3"
    >
      <button
        v-for="(item, index) in items"
        :key="index"
        type="button"
        class="w-3 h-3 rounded-full"
        :class="{
          'bg-gray-700 ring-2 ring-gray-200': activeIndex === index,
          'bg-white': activeIndex !== index,
        }"
        @click="goToSlide(index)"
        :aria-label="`Slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<style scoped>
/* Text fade transition */
.text-fade-enter-active, .text-fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.text-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.text-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.text-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.text-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Image fade transition */
.image-fade-enter-active, .image-fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.image-fade-enter-from {
  opacity: 0;
  transform: scale(1.1);
}
.image-fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
.image-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
.image-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Button fade transition */
.button-fade-enter-active, .button-fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.button-fade-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.button-fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.button-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.button-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
