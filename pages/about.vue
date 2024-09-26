<script setup>
import { ref } from "vue";
definePageMeta({
  layout: "home",
});
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/vue";



const modules = [Pagination];
const aboutUs = ref(
  "images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
);

const crumbs = [{ name: "Home", link: "/" }, { name: " About" }];

// counter data
const counterItem = [
  {
    src: "images/icon_shop.png",
    counter: 10.5,
    title: "Sallers active our site",
    iconName: "circum:shop",
  },
  {
    src: "images/icon_shop.png",
    counter: 33,
    title: "Mopnthly Produduct Sale",
    iconName: "mage:dollar",
  },
  {
    src: "images/Vector.png",
    counter: 45.5,
    title: "Customer active in our site",
    iconName: "fluent:shopping-bag-20-regular",
  },
  {
    src: "images/Group.png",
    counter: 25,
    title: "Anual gross sale in our site",
    iconName: "healthicons:money-bag-outline",
  },
];

// teammember data
const teamMembers = ref([
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    image: "images/image-46.png",
    // twitter: "https://twitter.com/tomcruise",
    // instagram: "https://instagram.com/tomcruise",
    // linkedin: "https://linkedin.com/in/tomcruise",
  },
  {
    name: "Emma Watson",
    position: "Managing Director",
    image: "images/image-51.png",
    // twitter: "https://twitter.com/emmawatson",
    // instagram: "https://instagram.com/emmawatson",
    // linkedin: "https://linkedin.com/in/emmawatson",
  },
  {
    name: "Will Smith",
    position: "Product Designer",
    image: "images/image-47.png",
    // twitter: "https://twitter.com/willsmith",
    // instagram: "https://instagram.com/willsmith",
    // linkedin: "https://linkedin.com/in/willsmith",
  },
  {
    name: "Will Smith",
    position: "Product Designer",
    image: "images/image-46.png",
    // twitter: "https://twitter.com/willsmith",
    // instagram: "https://instagram.com/willsmith",
    // linkedin: "https://linkedin.com/in/willsmith",
  },
    {
    name: "Emma Watson",
    position: "Managing Director",
    image: "images/image-51.png",
    // twitter: "https://twitter.com/emmawatson",
    // instagram: "https://instagram.com/emmawatson",
    // linkedin: "https://linkedin.com/in/emmawatson",
  },
]);

// suport data
const supports = [
  {
    iconName: "carbon:delivery",
    title: "FREE AND FAST DELIVERY",
    subTitle: "Free delivery for all orders over $140",
  },
  {
    iconName: "streamline:customer-support-1",
    title: "24/7 CUSTOMER SERVICE",
    subTitle: "Friendly 24/7 customer support",
  },
  {
    iconName: "gala:secure",
    title: "MONEY BACK GUARANTEE",
    subTitle: "We reurn money within 30 days",
  },
];
</script>

<template>
  <NuxtLayout name="home">
    <!-- about us banner -->
    <div class="lg:ps-36 ps-4 md:pe-0 pe-4 w-full">
      <div class="py-8 text-left">
        <Breadcrumb :crumbs="crumbs" />
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 class="text-3xl font-semibold text-dark">Our Story</h3>
          <p class="pt-8">
            Launced in 2015, Exclusive is South Asia's premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p class="pt-4">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <img class="w-full" :src="aboutUs" alt="" />
        </div>
      </div>
    </div>
    <!-- about us counter -->
    <div class="grid grid-cols-2 gap-4 px-4 pt-12 md:grid-cols-4 lg:px-36 lg:pt-28 md:pt-20">
      <div
        class="flex flex-col items-center p-8 space-y-2 duration-300 border border-gray-400 rounded hover:text-white hover:border-primary hover:bg-primary group"
        v-for="(item, index) in counterItem" :key="index">
        <div class="p-2 mb-2 bg-black rounded-full ring-4 ring-gray-400 group-hover:ring-red-300 group-hover:bg-white">
          <Icon :name="item.iconName" class="w-8 h-8 text-white group-hover:text-dark" />
        </div>

        <h3 class="text-2xl font-bold">{{ item.counter }}K</h3>
        <h3>{{ item.title }}K</h3>
      </div>
    </div>

    <!-- team slider -->
    <div class="px-4 pt-12 lg:px-36 lg:pt-28 md:pt-20">
      <swiper :slides-per-view="3" space-between="30" :pagination="{
        clickable: true,
      }" :breakpoints="{
        '300': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(member, index) in teamMembers" :key="index">
          <div class="pt-12 bg-light">
            <img :src="member.image" alt="" class="mx-auto mb-4 w-52 h-80" />
          </div>
          <div class="mt-4 space-y-3">
            <h3 class="text-xl font-bold">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.position }}</p>
            <div class="flex gap-3 mt-2">
              <span>
                <Icon name="hugeicons:twitter" class="w-6 h-6" />
              </span>
              <span>
                <Icon name="hugeicons:instagram" class="w-6 h-6" />
              </span>
              <span>
                <Icon name="ri:linkedin-line" class="w-6 h-6" />
              </span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
        <Features class="my-10" />
    </div>


  
  
  </NuxtLayout>
</template>

<style>
.swiper-pagination {
  position: static !important;
  margin-top: 20px;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
}

.swiper-pagination-bullet-active {
  background-color: #db4444;
  border: 2px solid rgba(128, 128, 128, 0.527);
  width: 12px;
  height: 12px;
}
</style>
