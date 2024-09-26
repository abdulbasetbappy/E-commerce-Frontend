<script setup>

const menus = reactive([
  {
    id: 1,
    title: "Woman's Fashion",
    subItems: ["Classic Style", "Vintage Clothing", "Jewellery", "Handbags", "Shoes", "Accessories"],
    isOpen: false,
  },
  {
    id: 2,
    title: "Men's Fashion",
    subItems: ["Classic Style", "Formal Clothing", "Winter Wear", "Jewellery", "Handbags", "Shoes", "Accessories"],
    isOpen: false,
  },
  {
    id: 3,
    title: "Kid's Fashion",
    subItems: [],
    isOpen: false,
  },
  {
    id: 4,
    title: "Electronics",
    subItems: [],
    isOpen: false,
  },
  {
    id: 5,
    title: "Home & Lifestyle",
    subItems: [],
    isOpen: false,
  },
  {
    id: 6,
    title: "Medicine",
    subItems: [],
    isOpen: false,
  },
  {
    id: 7,
    title: "Sports & Outdoors",
    subItems: [],
    isOpen: false,
  },
  {
    id: 8,
    title: "Baby's & Toys",
    subItems: [],
    isOpen: false,
  },
  {
    id: 9,
    title: "Groceries & Pets",
    subItems: [],
    isOpen: false,
  },
]);
</script>

<template>
  <div class="flex w-full">
    <!-- Side Menu -->
    <nav class="w-full pb-2 ps-0">
      <ul>
        <li
          v-for="menu in menus"
          :key="menu.title"
          class="relative group"
          @mouseover="menu.isOpen = true"
          @mouseleave="menu.isOpen = false"
        >
          <NuxtLink :to="'/category/' + menu.id">
            <div
              class="p-[0.4rem] border rounded-md hover:bg-gray-200 cursor-pointer flex justify-between items-center my-1"
            >
              <span class="text-base font-semibold text-gray-800">{{ menu.title }}</span>
              <span v-if="menu.subItems.length" class="text-gray-500">
                <svg
                  class="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </NuxtLink>
          <!-- Submenu -->
          <ul
            v-if="menu.subItems.length"
            class="md:absolute md:ps-0 ps-4 md:w-80 w-full z-30 md:left-full left-0 md:top-0 top-10 bg-white rounded-xl overflow-hidden border-gray-200 md:shadow-md"
            v-show="menu.isOpen"
          >
            <li
              v-for="subItem in menu.subItems"
              :key="subItem"
              class="p-[0.4rem] ps-4 hover:bg-gray-200 hover:text-gray-700 text-gray-500 bg-gray-00 border-b"
            >
              <NuxtLink :to="'/category/' + subItem" class="text-sm font-medium text-gray-500">
                {{ subItem }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
