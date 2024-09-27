<script setup>
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
});

const showFlashSale = ref(true);

watch(
  () => props.endTime,
  () => {
    if (new Date().getTime() >= props.endTime.getTime()) {
      showFlashSale.value = false;
    }
  }
);
</script>
<template>
  <div
    v-if="showFlashSale"
    class="flex mt-5 md:mt-10 flex-col items-center justify-between p-8 text-white bg-gray-900 rounded-lg md:flex-row"
  >
    <div class="flex flex-col justify-center items-start">
      <span class="text-lg font-bold text-red-500">Discount Offer 45%</span>
      <h1 class="w-auto lg:w-[443px] lg:text-5xl text-2xl font-bold mt-4">{{ headline }}</h1>
      <Countdown class="mt-4" :endTime="endTime" />
      <Button class="mt-4 w-32"> Buy Now </Button>
    </div>
    <div class="mt-8 md:mt-0">
      <img :src="imageSrc" :alt="imageAlt" class="w-full h-auto rounded-lg" />
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
