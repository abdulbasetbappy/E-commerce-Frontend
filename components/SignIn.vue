<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";


const email = ref("");
const password = ref("");

const router = useRouter();

const handleSubmit = () => {
  // Add form submission logic here
    console.log("Form submitted", {
        email: email.value,
        password: password.value,
    });
};
</script>

<template>
  <div class="w-full p-4 rounded-md lg:pe-36">
    <div class="text-center lg:text-left">
      <h2 class="mb-4 text-3xl font-bold">Log in to Exclusive</h2>
      <p class="mt-6 text-base font-medium text-black">
        Enter your details below
      </p>
      <form @submit.prevent="handleSubmit" class="pt-6 text-center lg:text-left">
        <InputField
          id="email"
          type="email"
          placeholder="Email or Phone Number"
          v-model="email"
          dynamicClass="w-full  mt-4 border-b border-gray-300 p-4 bg-transparent focus:outline-none"
        />
        <InputField
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
          dynamicClass="w-full  mt-4 border-b border-gray-300 p-4 bg-transparent focus:outline-none"
        />
        <div class="flex flex-col items-center  w-full gap-2 lg:gap-6  md:flex-row md:w-4/5">
         
          <Button type="submit" @click="submit" class="w-full py-3 mb-0 text-white rounded-md lg:w-3/6 md:w-3/5 bg-primary hover:bg-danger">Login</Button>

          <p class="text-red-500">Forget Password</p>
        </div>
      </form>
    </div>
  </div>
</template>
