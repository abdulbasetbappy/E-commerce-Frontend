<template>
  <footer class="px-4 py-10 mt-10 text-white bg-black">
    <div
      class="md:w-10/12 gap-8 mx-auto space-y-8 md:grid md:grid-cols-3 lg:grid-cols-5 md:space-y-0"
    >
      <!-- Exclusive Section -->
      <div class="space-y-4">
        <h2 class="text-3xl font-semibold">Exclusive</h2>
        <p class="mt-4 text-lg">Subscribe</p>
        <p class="text-base">Get 10% off your first order</p>
        <form @submit.prevent="handleSubmit" class="relative flex mt-4">
          <div class="relative">
            <input
              type="email"
              placeholder="Enter Your Email"
              v-model="email"
              class="bg-transparent w-60 px-4 py-3 border border-[#FAFAFA] rounded-md focus:outline-none"
            />
            <button
              class="absolute text-[#FAFAFA] transform -translate-y-1/2 right-2 top-1/2"
            >
              <Icon name="material-symbols:send" class="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      <!-- Support Section -->
      <div>
        <h2 class="font-xl semibold text-">Support</h2>
        <address class="mt-4 text-base not-italic">
          111 Bijoy sarani, Dhaka, <br />
          DH 1515, Bangladesh.
        </address>
        <p class="mt-2 text-base">
          <a href="mailto:exclusive@gmail.com" class="hover:underline"
            >exclusive@gmail.com</a
          >
        </p>
        <p class="mt-2 text-base">
          <a href="tel:+8801588889999" class="hover:underline"
            >+88015-88888-9999</a
          >
        </p>
      </div>

      <!-- Account Section -->
      <div>
        <h2 class="font-semibold font-xl">Account</h2>
        <ul class="mt-4 space-y-2 text-base">
          <li><a href="#" class="hover:underline">My Account</a></li>
          <li><a href="#" class="hover:underline">Login / Register</a></li>
          <li><a href="#" class="hover:underline">Cart</a></li>
          <li><a href="#" class="hover:underline">Wishlist</a></li>
          <li><a href="#" class="hover:underline">Shop</a></li>
        </ul>
      </div>

      <!-- Quick Link Section -->
      <div>
        <h2 class="font-semibold font-xl">Quick Link</h2>
        <ul class="mt-4 space-y-2 text-base">
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li><a href="#" class="hover:underline">Terms Of Use</a></li>
          <li><a href="#" class="hover:underline">FAQ</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      <!-- Download App Section -->
      <div>
        <h2 class="font-semibold font-xl">Download App</h2>
        <p class="mt-4 text-[12px] text-[#FAFAFA]">
          Save $3 with App New User Only
        </p>
        <div class="grid grid-cols-1 lg:gap-x-2 mt-4 md:grid-cols-2">
          <div class="col-span-1 row-span-2">
            <img
              src="/images/Qrcode.png"
              alt="QR Code"
              class="object-fill w-28 h-24 lg:h-24 lg:w-full md:object-contain"
            />
          </div>
          <div class="col-span-1">
            <img
              src="~/public/images/GooglePlay.png"
              alt="Download on Google Play"
              class="w-auto h-auto lg:h-12 lg:w-full md:object-fill"
            />
          </div>
          <div class="col-span-1">
            <img
              src="~/public/images/GooglePlay.png"
              alt="Download on App Store"
              class="w-auto h-auto lg:h-10 lg:w-full md:object-fill"
            />
          </div>
        </div>
        <div class="flex mt-4 space-x-10">
          <a href="#" class="hover:underline">
            <Icon name="brandico:facebook" class="w-5 h-5" />
          </a>
          <a href="#" class="hover:underline">
            <Icon name="ph:twitter-logo" class="w-5 h-5" />
          </a>
          <a href="#" class="hover:underline">
            <Icon name="ph:instagram-logo" class="w-5 h-5" />
          </a>
          <a href="#" class="hover:underline">
            <Icon name="ri:linkedin-line" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <div class="mt-8 text-center text-gray-500">
      <p>Copyright &copy; 2024 Exclusive. All rights reserved</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const handleSubmit = () => {
  // Add form submission logic here
  console.log("Form submitted", {
    email: email.value,
  });
};
</script>
