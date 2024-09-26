
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
<template>
  <div class="container w-full py-6 mx-auto">
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="w-full max-w-xs md:max-w-md lg:max-w-lg">
        <img src="/images/error.png" class="w-full h-auto" alt="error" />
      </div>
      <h2
        class="mt-6 text-2xl font-semibold text-center md:text-4xl lg:text-5xl xl:text-6xl"
      >
        404 Not Found
      </h2>
      <p class="px-6 mt-4 text-center text-dark">
        The page you visited could not be found. You may go back to the home
        page.
      </p>
      <Button
        @click="goHome"
        class="px-4 py-2 mt-6 text-white rounded bg-primary hover:bg-danger"
      >
        Back to home page
      </Button>
    </div>
  </div>
</template>
