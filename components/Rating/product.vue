<script setup>

const rating = 5;
const totalRatings = 250;
const ratings = ref([144, 48, 21, 12, 25]);
</script>

<template>
  <div>
    <div class="mt-16 ps-6 py-2 bg-[#EFEDED]">
      <p>Ratings & Reviews</p>
    </div>
    <div class="grid grid-cols-12 mt-4 gap-6">
      <div class="col-span-12 md:col-span-3 md:border-e ps-6">
        <div class="flex items-center">
          <div class="text-4xl font-bold">4.1</div>
          <div
            class="flex py-1 px-3 text-sm text-white items-center gap-1 bg-[#FF8A00] mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              class="bi bi-star-fill d-inline"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
            <p class="font-semibold text-base text-dark">Very Good</p>
          </div>
        </div>
        <div>
          <Rating class="mt-2" :rating="rating" :height="28" width="28" />
          <p class="mt-2">{{ totalRatings }} Ratings</p>
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
    </div>
  </div>
</template>
