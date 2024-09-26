<script setup>
import { Icon } from '@iconify/vue';

const features = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: "mdi:truck-fast-outline", 
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: "custom-call-support",
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: "mdi:shield-check-outline" 
  },
  {
    title: "SAFE AND SECURE",
    description: "Ensuring safe and reliable transactions.",
    icon: "mdi:secure-outline" 
  },
];
</script>

<template>
  <div class="py-6">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="flex flex-col items-center text-center"
      >
        <div
          class="flex items-center justify-center w-20 h-20 mb-4 bg-gray-300 rounded-full"
        >
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full bg-dark"
          >
            <Icon v-if="feature.icon !== 'custom-call-support'" :icon="feature.icon" class="text-3xl text-white" />
            <Icon v-else icon="mdi:headset" class="text-3xl text-white" />
          </div>
        </div>
        <h3 class="text-base font-bold">{{ feature.title }}</h3>
        <p class="text-sm text-gray-500 font-semibold">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>



<style scoped>
.word{
  color: red;
}
</style>
