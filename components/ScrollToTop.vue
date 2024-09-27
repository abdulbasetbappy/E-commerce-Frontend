<template>
    <div v-show="visible" @click="scrollToTop" class="fixed z-50 bottom-4 right-6">
      <button class="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-gray-100 bg-red-500 rounded-full shadow-md">
        <icon name="material-symbols:arrow-upward-rounded" class="w-6 h-10" />
      </button>
    </div>
  </template>
  
  <script setup>
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
  
