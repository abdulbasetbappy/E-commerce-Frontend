<script setup>
const crumbs = [{ name: "Home", link: "/" }, { name: " Contact" }];
</script>

<template>
  <!-- about us banner -->
  <NuxtLayout name="home">
    <div class="lg:px-36 px-4 mb-20 w-full">
      <div class="text-left py-4">
        <Breadcrumb :crumbs="crumbs" />
      </div>
      <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div class="md:col-span-4 col-span-12">
          <div class="shadow p-6 rounded">
            <!-- phone -->
            <div class="flex items-center gap-2">
              <span
                class="bg-[#DB4444] rounded-full p-1 h-[30px] w-[30px] flex items-center justify-center"
              >
                <Icon class="h-6 w-6 text-white" name="ph:phone-thin" />
              </span>

              <h6 class="text-base">Call To Us</h6>
            </div>
            <div class="space-y-2 mt-4">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
            <!-- email -->
            <div class="flex items-center gap-2">
              <span
                class="bg-[#DB4444] rounded-full p-1 h-[30px] w-[30px] flex items-center justify-center"
              >
                <Icon class="h-6 w-6 text-white" name="ic:outline-email" />
              </span>

              <h6 class="text-base">Write To Us</h6>
            </div>
            <div class="space-y-2 mt-4">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
        <div class="md:col-span-8 col-span-12">
          <div class="shadow p-6 rounded">
            <div class="grid md:grid-cols-3 grid-cols-1 gap-2">
              <InputContactInputField
                type="text"
                id="name"
                placeholder="Your Name *"
                v-model="name"
                :dynamicClass="true"
              />
              <InputContactInputField
                type="email"
                id="email"
                placeholder="Your Email *"
                v-model="email"
                :dynamicClass="true"
              />
              <InputContactInputField
                type=""
                id="phone"
                placeholder="Your Phone *"
                v-model="Phone"
                :dynamicClass="true"
              />
            </div>
            <InputTextArea
              
              rows="7"
              id="phone"
              placeholder="Your Message"
              v-model="Message"
            />
            <div class="text-end md:mt-4">
              <button
                type="button"
                class="focus:outline-none text-white bg-primary hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
