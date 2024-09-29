<template>
  <NuxtLayout :name="home">
    <div class="grid grid-cols-12 gap-5 container mx-auto py-10 pt-0 md:pt-10">
      <!-- Image -->
      <div class="col-span-12 lg:col-span-7 xl:col-span-6">
        <img src="/images/signup.png" alt="Sign Up Image" class="w-full h-full" />
      </div>
      <!-- Form -->
      <div class="col-span-12 pl-0 lg:col-span-5 lg:content-center xl:pl-20 xl:col-span-6">
        <SignIn />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
</script>
