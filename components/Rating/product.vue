<script setup>

const brandData = {
  name: "Samsung",
  description: "Best Brand in the Market",
  image: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/256_144_4.png?$512_N_PNG$",
  brandRate: 4,
};
const rating = 5;
const totalRatings = 250;
const ratings = ref([144, 48, 21, 12, 25]);
</script>

<template>
  <div>
    <div class="mt-6 rounded-sm ps-6 py-2 bg-[#EFEDED]">
      <p class="font-bold">Ratings & Reviews</p>
    </div>
    <div class="grid grid-cols-12 mt-4 gap-6">
      <div class="col-span-12 md:col-span-3 md:border-e ps-6">
        <div class="flex items-center">
          <div class="text-4xl font-bold">4.1</div>
          <div
            class="flex py-1 px-2 text-sm text-white items-center justify-around gap-1 rounded-md bg-green-500"
          >
            <Icon name="mingcute:certificate-fill" class="w-5 h-5" />
            <p class="font-semibold text-base text-gray-100">Very Good</p>
          </div>
        </div>  
        <div>
          <Rating class="mt-2" :rating="rating" :height="28" width="28" />
          <p class="mt-2 font-bold">{{ totalRatings }} Ratings</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-4 mt-3 md:mt-0">
        <div
          v-for="(count, index) in ratings"
          :key="index"
          class="flex items-center"
        >
          <div class="w-20 text-right">
            <Rating :rating="rating - index" />
          </div>
          <div class="relative w-full h-2 bg-gray-300 rounded mx-2">
            <div
              :style="{ width: (count / totalRatings) * 100 + '%' }"
              class="absolute h-full bg-orange-500 rounded"
            ></div>
          </div>
          <div class="w-12 text-right">{{ count }}</div>
        </div>
      </div>
      <!--Brand Data-->
      <div class="col-span-12 md:col-span-3 lg:col-span-4">
        <div class="flex flex-col justify-center items-center border-l">
          <div class="w-16 h-16 bg-gray-300 flex items-center justify-center rounded-full">
            <img :src="brandData.image" alt="Brand Image" class="w-full h-full object-cover rounded-full" />
          </div>
          <div class=" flex flex-col items-center justify-center">
            <p class="font-bold text-center">{{ brandData.name }}</p>
            <p class="text-sm text-gray-500 text-center">{{ brandData.description }}</p>
            <Rating :rating="brandData.brandRate" class="" />
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>
