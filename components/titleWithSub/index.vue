<template>
  <div class="flex flex-col">
    <div class="flex items-center">
      <div :class="[colorClass, 'w-5 h-10 mr-2 rounded-sm']"></div>
      <span :class="[titleSizeClass, 'font-bold text-primary text-md ml-4']">{{ title }}</span>
    </div>
    <div class="mt-5">
      <h2 :class="[subtitleSizeClass, 'font-semibold lg:text-2xl']">{{ subtitle }}</h2>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "red",
  },
  size: {
    type: String,
    default: "md",
  },
});

const colorClass = `bg-${props.color}-500`;
const titleSizeClass = `text-${props.size}lg`;
const subtitleSizeClass =
  {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-4xl",
  }[props.size] || "text-2xl";
</script>

<style scoped>
/* Add any custom styles here */
</style>
