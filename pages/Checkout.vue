<script setup>
import Dropdown from "primevue/dropdown";
import { ref, computed } from "vue";

const crumbs = [
  { name: "Account", link: "/account" },
  { name: "My Account", link: "/my_account" },
  { name: "Product", link: "/product" },
  { name: "View Cart", link: "/view_cart" },
  { name: "Checkout" },
];

const items = ref([
  {
    id: 1,
    name: "LCD Monitor",
    image: "https://via.placeholder.com/50",
    price: 650,
  },
  {
    id: 2,
    name: "Keyboard",
    image: "https://via.placeholder.com/50",
    price: 150,
  },
]);

const methods = ref([
  {
    src: "/images/Bkash.png",
    alt: "Bkash",
  },
  {
    src: "/images/Nagad.png",
    alt: "Nagad",
  },
  {
    src: "/images/Mastercard.png",
    alt: "Mastercard",
  },
  {
    src: "/images/Visa.png",
    alt: "Visa",
  },
]);

const shippingCost = ref(0); // Shipping is free

const subtotal = computed(() => {
  return items.value.reduce((acc, item) => acc + item.price, 0);
});

const total = computed(() => {
  return subtotal.value + shippingCost.value;
});

const selectedThana = ref();
const thanas = ref([
  { name: "Gulshan", code: "NY" },
  { name: "Airport", code: "RM" },
  { name: "Dhanmondi", code: "LDN" },
  { name: "Mirpur", code: "IST" },
  { name: "Uttora", code: "PRS" },
]);

const selectedCity = ref();
const cities = ref([
  { name: "Rajshahi", code: "NY" },
  { name: "Dhaka", code: "RM" },
  { name: "Khulna", code: "LDN" },
  { name: "Rangpur", code: "IST" },
  { name: "Chittagong", code: "PRS" },
]);
const selectedCountry = ref();
const countries = ref([
  { name: "Bangladesh", code: "NY" },
  { name: "India", code: "RM" },
  { name: "Pakisthan", code: "LDN" },
  { name: "UK", code: "IST" },
  { name: "USA", code: "PRS" },
]);
</script>

<template>
  <!-- about us banner -->
  <NuxtLayout name="home">
    <div class="lg:px-36 px-4 mb-20 w-full">
      <div class="text-left py-4">
        <Breadcrumb :crumbs="crumbs" />
      </div>

      <!-- delivery info -->
      <div class="grid md:grid-cols-12 grid-cols-1 gap-16">
        <div class="md:col-span-6 col-span-12">
          <InputContactInputField type="text" label="Your Name" id="name" v-model="name" class="mb-4" />

          <InputContactInputField type="email" label="Your Email" id="email" v-model="email" class="mb-4" />
          <InputContactInputField type="number" label="Phone Number*" id="phone-number" v-model="phoneNumber" class="mb-4" />

          <InputContactInputField type="text" label="Street Address *" id="street-address" v-model="streetAddress"
            class="mb-4" />
          <InputContactInputField type="text" label="Apartment, floor, etc. (optional)" id="apartment" v-model="apartment"
            class="mb-4" />

          <!-- select Thana -->

          <div class="rounded bg-light flex justify-center w-full mb-5">
            <Dropdown v-model="selectedThana" filter :options="thanas" optionLabel="name" placeholder="Select a Thana"
              class="w-full bg-light" />
          </div>
          <!-- select city -->

          <div class="rounded bg-light flex justify-center w-full mb-5">
            <Dropdown v-model="selectedCity" filter :options="cities" optionLabel="name" placeholder="Select a City"
              class="w-full bg-light" />
          </div>
          <!-- select conuntry -->
           
          <div class="rounded bg-light flex justify-center w-full mb-5">
            <Dropdown v-model="selectedCountry" filter :options="countries" optionLabel="name"
              placeholder="Select a Country" class="w-full bg-light" />
          </div>

          <div class="flex items-center dark:border-gray-700">
            <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" />
            <label for="styled-checkbox-1">
              Save this information for faster check-out next time</label>
          </div>
        </div>

        <!-- payment info -->
        <div class="md:col-span-6 col-span-12">
          <div class="p-6 space-y-4">
            <div v-for="item in items" :key="item.id" class="flex items-center justify-between space-x-4">
              <div class="flex items-center gap-4">
                <img :src="item.image" :alt="item.name" class="w-16 h-16" />
                <h3 class="text-lg font-medium">{{ item.name }}</h3>
              </div>
              <div>
                <p>${{ item.price }}</p>
              </div>
            </div>

            <div class="pt-4">
              <div class="flex justify-between border-b-[2px] py-2">
                <p>Subtotal:</p>
                <p>${{ subtotal }}</p>
              </div>
              <div class="flex justify-between border-b-[2px] py-2">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div class="flex justify-between font-bold py-2">
                <p>Total:</p>
                <p>${{ total }}</p>
              </div>
            </div>
            <!-- bank payment -->
            <div class="flex justify-between">
              <div>
                <label class="flex items-center">
                  <input type="radio" name="payment" value="bank" class="form-radio" />
                  <span class="ml-2">Bank</span>
                </label>
              </div>
              <div class="flex gap-4">
                <p v-for="(method, index) in methods" :key="index" class="curser-pointer">
                  <img class="w-auto" :src="method.src" :alt="method.alt" />
                </p>
              </div>
            </div>
            <!-- cash on delivery -->

            <div>
              <label class="flex items-center">
                <input type="radio" name="payment" value="cod" class="form-radio" checked />
                <span class="ml-2">Cash on delivery</span>
              </label>
            </div>
            <div class="flex space-x-2">
              <input type="text" placeholder="Coupon Code"
                class="form-input flex-1 border px-4 bg-light focus:outline-none rounded" />
              <button class="bg-red-500 text-white px-4 py-2 rounded">
                Apply Coupon
              </button>
            </div>
            <button class="w-full bg-red-500 text-white px-4 py-2 rounded">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.p-dropdown-filter {
  padding: 7px !important;
}

.p-dropdown-label {
  font-size: 14px !important;
  color: #000;
}

.p-dropdown:not(.p-disabled).p-focus {
  outline: 0 !important;
}
</style>

<style scoped>
.form-radio {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #db4444;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}

.form-radio:checked::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: #db4444;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 3px;
}

.form-radio+.ml-2 {
  vertical-align: middle;
}

/* checkbox */

.styled-checkbox {
  position: absolute;
  opacity: 0;
}

.styled-checkbox+label {
  position: relative;
  cursor: pointer;
  padding: 0;
}

/* Box */
.styled-checkbox+label:before {
  content: "";
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  width: 20px;
  height: 20px;
  border: 1px solid #343a40;
}

/* Box hover */
.styled-checkbox:hover+label:before {
  background: #db4444;
  border: 1px solid #db4444;
}

/* Box focus */
.styled-checkbox:focus+label:before {
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
}

/* Box checked */
.styled-checkbox:checked+label:before {
  background: #db4444;
  border: 1px solid #db4444;
}

/* Disabled state label */
.styled-checkbox:disabled+label {
  color: #b8b8b8;
  cursor: auto;
}

/* Disabled box */
.styled-checkbox:disabled+label:before {
  box-shadow: none;
  background: #ddd;
}

/* Checkmark. Could be replaced with an image */
.styled-checkbox:checked+label:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 11px;
  background: white;
  width: 2px;
  height: 2px;
  box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
    4px -6px 0 white, 4px -8px 0 white;
  transform: rotate(45deg);
}
</style>
