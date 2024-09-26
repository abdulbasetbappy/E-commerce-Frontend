<script setup>
const crumbs = [{ name: "Home", link: "/" }, { name: " Acocunt" }];

const fName = "Mustak"; 
const lName = "Ahmed"; 
const email = "ahmedmusta@gmail.com"; 
const address = "Rajshahi Bangladesh"; 

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
    <div class="xl:px-36 px-4 mb-20 w-full">
      <div class="flex justify-between items-center py-4">
        <Breadcrumb :crumbs="crumbs" />
        <div>
          <p>Welcome! <span class="text-primary">Mustak Ahmed</span></p>
        </div>
      </div>
      <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div class="md:col-span-4 col-span-12">
          <!-- profile sider bar -->
         <AccountMenu/>
        </div>
        <div class="md:col-span-8 col-span-12">
          <div class="shadow p-6 rounded">
            <h2 class="text-lg text-primary font-semibold mb-4">
              Edit Your Profile
            </h2>
            <div class="grid md:grid-cols-12 grid-cols-1 gap-x-6">
              <div class="md:col-span-6 col-span-12">
                <InputContactInputField
                  type="text"
                  label="First Name"
                  v-model="fName"
                  value="Md"
                />
              </div>
              <div class="md:col-span-6 col-span-12">
                <InputContactInputField
                  type="text"
                  label="Last Name"
                  v-model="lName"
                />
              </div>
              <div class="md:col-span-6 col-span-12">
                <InputContactInputField type="email" label="Email" v-model="email" />
              </div>
              <div class="md:col-span-6 col-span-12">
                <InputContactInputField
                  type="text"
                  label="Address"
                  v-model="address"
                />
              </div>
            </div>

               <!-- select Thana -->

          <div class="rounded account bg-light  flex justify-center w-full mb-5">
            <Dropdown v-model="selectedThana" filter :options="thanas" optionLabel="name" placeholder="Select a Thana"
              class="w-full bg-light text-lg" />
          </div>
          <!-- select city -->

          <div class="rounded account bg-light flex justify-center w-full mb-5">
            <Dropdown v-model="selectedCity" filter :options="cities" optionLabel="name" placeholder="Select a City"
              class="w-full bg-light" />
          </div>
          <!-- select conuntry -->
           
          <div class="rounded account bg-light flex justify-center w-full mb-5">
            <Dropdown v-model="selectedCountry" filter :options="countries" optionLabel="name"
              placeholder="Select a Country" class="w-full bg-light" />
          </div>
            
            <InputContactInputField
              type="password"
              label="Password Changes"
              v-model="password"
              placeholder="Current Password"
            />
            <InputContactInputField
              type="password"
              v-model="password"
              placeholder="New Password"
            />
            <InputContactInputField
              type="password"
              v-model="password"
              placeholder="Confirm Password"
            />
            <div class="text-end md:mt-4 space-x-2">
              <button
                type="button"
                class="focus:outline-none text-white bg-primary hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>


<style>
.account .p-inputtext{
  font-size: 15px !important;
  color:#343a40;
}
</style>