<template>
    <div v-show="visible" @click="scrollToTop" class="fixed z-50 bottom-4 right-14">
      <button class="flex items-center justify-center w-12 h-12 p-4 text-black bg-gray-200 rounded-full shadow-md">
        <i class="text-xl pi pi-arrow-up"></i>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const visible = ref(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const toggleVisibility = () => {
    if (window.scrollY > 1050) {
      visible.value = true;
    } else {
      visible.value = false;
    }
  };
  
  onMounted(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Initial check in case the user starts scrolled down
    toggleVisibility();
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', toggleVisibility);
  });
  </script>
  
