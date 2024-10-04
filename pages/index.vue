<script setup>
definePageMeta({
  layout: "home",
});

const categories = ref([
  { id: 1, icon: "mingcute:cellphone-line", label: "Phones" },
  { id: 2, icon: "mdi:desktop-classic", label: "Computers" },
  { id: 3, icon: "mdi:watch", label: "SmartWatch" },
  { id: 4, icon: "mdi:camera", label: "Camera" },
  { id: 5, icon: "mdi:headphones", label: "HeadPhones" },
  { id: 6, icon: "mdi:gamepad-variant", label: "Gaming" },
  { id: 7, icon: "mdi:microphone", label: "Microphone" },
  { id: 8, icon: "mdi:cellphone", label: "Clothing" },
  { id: 9, icon: "mdi:desktop-classic", label: "Electronics" },
  { id: 10, icon: "mdi:watch", label: "Home Appliances" },
  { id: 11, icon: "mdi:camera", label: "jewelery" },
  { id: 11, icon: "mdi:camera", label: "Gamble" },
]);
const products = ref([]);

try {
  await fetch("/api/products")
    .then((response) => response.json())
    .then((data) => {
      products.value = data;
    });
} catch (err) {
  console.log(err);
}
</script>

<template>
  <NuxtLayout :name="home">
    <div class="md:px-4 md:pb-6 pb-2 pt-4">
      <CategorySlider class="md:w-10/12 mx-auto" />
    </div>

    <div class="md:w-10/12 px-4 md-px-0 w-full mx-auto">
      <FeaturesItem v-motion-fade />

      <FeaturesOffers :items="products" />

      <FeaturesCategories :items="categories" />

      <div class="flex items-center justify-between  mb-4 md:mb-8  text-left mt-16">
        <TitleWithSub title="This Month" subtitle="Best Selling Products" />
        <NuxtLink to="/products">
          <Button class="w-32"> View All </Button>
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard
          class="mt-2 md:mt-4"
          v-for="product in products.slice(0, 8)"
          :key="product.id"
          :product="product"
        />
      </div>

      <Brand />

      <ProductOur :items="products" />
      <ResponsiveGallery />
      <FlashSale
        category="Categories"
        headline="Enhance Your Music Experience"
        imageSrc="/images/jbl-speaker.png"
        imageAlt="JBL Speaker"
        buttonText="Buy Now!"
        :endTime="new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000)"
      />
    </div>
  </NuxtLayout>
</template>
