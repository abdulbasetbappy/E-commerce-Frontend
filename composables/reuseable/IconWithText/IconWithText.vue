<!-- components/IconWithText.vue -->
<template>
  <div class="flex flex-col items-center justify-center w-auto h-auto p-4 my-6 text-center border-2 rounded-sm border-gray lg:w-40 lg:min-h-32 lg:my-10 hover:bg-primary hover:text-light">
    <Icon :icon="icon" class="mb-2 text-4xl"/>
    <span>{{ label }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
// Import the Icon component from the relevant library
import { Icon } from '@iconify/vue';

defineProps({
  icon: String,
  label: String,
});
</script>

<style scoped>
.word {
  color: red;
}
</style>
