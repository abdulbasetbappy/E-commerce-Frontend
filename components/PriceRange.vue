<template>
    <div class="my-8">
      <div class="relative">
        <input
          type="range"
          v-model="minPrice"
          :min="min"
          :max="max"
          class="absolute inset-0 z-10 w-full h-2 bg-transparent appearance-none cursor-pointer"
          @input="updateMinValue"
        />
        <input
          type="range"
          v-model="maxPrice"
          :min="min"
          :max="max"
          class="absolute inset-0 z-10 w-full h-2 bg-transparent appearance-none cursor-pointer"
          @input="updateMaxValue"
        />
        <div class="relative h-2 bg-gray-200 rounded">
          <div class="absolute h-2 bg-teal-500 rounded" :style="rangeStyle"></div>
        </div>
        <div class="flex justify-between mt-2">
          <span class="bg-black text-white px-3 py-1 rounded">${{ minPrice }}</span>
          <span class="bg-black text-white px-3 py-1 rounded">${{ maxPrice }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const min = 8;
  const max = 70;
  const minPrice = ref(15);
  const maxPrice = ref(30);
  
  const rangeStyle = computed(() => {
    const minPercent = ((minPrice.value - min) / (max - min)) * 100;
    const maxPercent = ((maxPrice.value - min) / (max - min)) * 100;
    return {
      left: `${minPercent}%`,
      right: `${100 - maxPercent}%`,
    };
  });
  
  const updateMinValue = () => {
    if (minPrice.value > maxPrice.value) {
      maxPrice.value = minPrice.value;
    }
  };
  
  const updateMaxValue = () => {
    if (maxPrice.value < minPrice.value) {
      minPrice.value = maxPrice.value;
    }
  };
  </script>
  
  <style scoped>
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: white;
    border: 2px solid #00bcd4;
    border-radius: 50%;
    cursor: pointer;
  }
  
  input[type='range']::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: white;
    border: 2px solid #00bcd4;
    border-radius: 50%;
    cursor: pointer;
  }
  </style>
  