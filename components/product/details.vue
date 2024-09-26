<script setup>
import { ref } from "vue";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
// import TextArea from "~/components/Input/TextArea.vue";

// submited rating
const rating = ref(0);
const hoverIndex = ref(0);

const setRating = (value) => {
  rating.value = value;
};

const hoverRating = (value) => {
  hoverIndex.value = value;
};

// tab data
const oldData = ref(null);
onBeforeMount(async () => {
  try {
    await fetch("/api/jsonEditor")
      .then((response) => response.json())
      .then((data) => {
        oldData.value = data;
      });
  } catch (err) {
    console.log(err);
  }
});

const customTabStyle = ref({
  headerTitle: {
    class: "text-dark",
  },

  headerAction: {
    class: "text-black",
  },
});

// comment

const comments = ref([
  {
    profileImg: "../images/Snapseed.jpg",
    customerName: "Mustak Ahmed",
    commentDescription: `প্রিমিয়াম কোয়ালিটি টি-শার্ট: তৈরিকৃত এবং সংহততার জন্য উচ্চ কাঁচামালের ব্যবহার করে নির্মিত ক্লাসিক ডিজাইন। সাধারণত খুবই ভাল খাবে সতর্কতা বিভিন্ন অনুষ্ঠান, সান্ধ্য বেড়াতে প্রিয় টি-শার্ট।...`,
  },
  {
    profileImg: "../images/Snapseed.jpg",
    customerName: "Mustak Ahmed",
    commentDescription: `প্রিমিয়াম কোয়ালিটি টি-শার্ট: তৈরিকৃত এবং সংহততার জন্য উচ্চ কাঁচামালের ব্যবহার করে নির্মিত ক্লাসিক ডিজাইন। সাধারণত খুবই ভাল খাবে সতর্কতা বিভিন্ন অনুষ্ঠান, সান্ধ্য বেড়াতে প্রিয় টি-শার্ট।...`,
  },
  {
    profileImg: "../images/Snapseed.jpg",
    customerName: "Mustak Ahmed",
    commentDescription: `প্রিমিয়াম কোয়ালিটি টি-শার্ট: তৈরিকৃত এবং সংহততার জন্য উচ্চ কাঁচামালের ব্যবহার করে নির্মিত ক্লাসিক ডিজাইন। সাধারণত খুবই ভাল খাবে সতর্কতা বিভিন্ন অনুষ্ঠান, সান্ধ্য বেড়াতে প্রিয় টি-শার্ট।...`,
  },
  {
    profileImg: "../images/Snapseed.jpg",
    customerName: "Mustak Ahmed",
    commentDescription: `প্রিমিয়াম কোয়ালিটি টি-শার্ট: তৈরিকৃত এবং সংহততার জন্য উচ্চ কাঁচামালের ব্যবহার করে নির্মিত ক্লাসিক ডিজাইন। সাধারণত খুবই ভাল খাবে সতর্কতা বিভিন্ন অনুষ্ঠান, সান্ধ্য বেড়াতে প্রিয় টি-শার্ট।...`,
  },
  {
    profileImg: "../images/Snapseed.jpg",
    customerName: "Mustak Ahmed",
    commentDescription: `প্রিমিয়াম কোয়ালিটি টি-শার্ট: তৈরিকৃত এবং সংহততার জন্য উচ্চ কাঁচামালের ব্যবহার করে নির্মিত ক্লাসিক ডিজাইন। সাধারণত খুবই ভাল খাবে সতর্কতা বিভিন্ন অনুষ্ঠান, সান্ধ্য বেড়াতে প্রিয় টি-শার্ট।...`,
  },
  {
    profileImg: "../images/Snapseed.jpg",
    customerName: "Mustak Ahmed",
    commentDescription: `প্রিমিয়াম কোয়ালিটি টি-শার্ট: তৈরিকৃত এবং সংহততার জন্য উচ্চ কাঁচামালের ব্যবহার করে নির্মিত ক্লাসিক ডিজাইন। সাধারণত খুবই ভাল খাবে সতর্কতা বিভিন্ন অনুষ্ঠান, সান্ধ্য বেড়াতে প্রিয় টি-শার্ট।...`,
  },
  {
    profileImg: "../images/Snapseed.jpg",
    customerName: "Mustak Ahmed",
    commentDescription: `প্রিমিয়াম কোয়ালিটি টি-শার্ট: তৈরিকৃত এবং সংহততার জন্য উচ্চ কাঁচামালের ব্যবহার করে নির্মিত ক্লাসিক ডিজাইন। সাধারণত খুবই ভাল খাবে সতর্কতা বিভিন্ন অনুষ্ঠান, সান্ধ্য বেড়াতে প্রিয় টি-শার্ট।...`,
  },
  {
    profileImg: "../images/Snapseed.jpg",
    customerName: "Mustak Ahmed",
    commentDescription: `প্রিমিয়াম কোয়ালিটি টি-শার্ট: তৈরিকৃত এবং সংহততার জন্য উচ্চ কাঁচামালের ব্যবহার করে নির্মিত ক্লাসিক ডিজাইন। সাধারণত খুবই ভাল খাবে সতর্কতা বিভিন্ন অনুষ্ঠান, সান্ধ্য বেড়াতে প্রিয় টি-শার্ট।...`,
  },
]);

const visibleCount = ref(2);

const visibleComments = computed(() =>
  comments.value.slice(0, visibleCount.value)
);

const showMoreComments = () => {
  if (visibleCount.value < comments.value.length) {
    visibleCount.value += 2;
  }
};
</script>

<template>
  <div class="product-details-tab">
    <TabView class="mt-16">
      <!-- Product Details -->
      <TabPanel header="Product Details" :pt="customTabStyle">
        <template v-if="oldData">
          <div
            class="w-full"
            v-for="(block, index) in oldData.blocks"
            :key="block.id"
          >
            <!-- Render different block types -->
            <template v-if="block.type === 'header'">
              <h1 class="font-bold text-xl" v-if="block.data.level === 1">
                {{ block.data.text }}
              </h1>
              <h2 class="font-bold text-lg" v-else-if="block.data.level === 2">
                {{ block.data.text }}
              </h2>
              <h3 class="font-bold text-md" v-else-if="block.data.level === 3">
                {{ block.data.text }}
              </h3>
              <h4 class="font-bold text-sm" v-else-if="block.data.level === 4">
                {{ block.data.text }}
              </h4>
              <h5 class="font-bold text-xs" v-else-if="block.data.level === 5">
                {{ block.data.text }}
              </h5>
              <h6 class="font-bold text-xs" v-else-if="block.data.level === 6">
                {{ block.data.text }}
              </h6>
            </template>
            <p
              class=""
              v-else-if="block.type === 'paragraph'"
              v-html="block.data.text"
            ></p>
            <ol
              class="mb-3 list-decimal ps-6"
              v-else-if="
                block.type === 'list' && block.data.style === 'ordered'
              "
            >
              <li
                class="mb-1"
                v-for="(item, index) in block.data.items"
                :key="index"
              >
                {{ item }}
              </li>
            </ol>
            <ul
              class="mb-3 list-disc ps-6"
              v-else-if="
                block.type === 'list' && block.data.style === 'unordered'
              "
            >
              <li
                class="mb-1"
                v-for="(item, index) in block.data.items"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
            <table
              class="mb-3 list-disc ps-6 table w-full table-auto border-collapse border border-slate-400"
              v-else-if="block.type === 'table'"
            >
              <tr
                class="mb-1"
                v-for="(row, index) in block.data.content"
                :key="index"
              >
                <td
                  class="border border-slate-300 py-1 px-3"
                  v-for="(cell, index) in row"
                  :key="index"
                >
                  {{ cell }}
                </td>
              </tr>
            </table>
            <iframe
              class="w-full md:w-3/4 lg:w-1/2"
              v-else-if="block.type === 'Embed'"
              :src="block.data.embed"
              :width="block.data.width"
              :height="block.data.height"
              frameborder="0"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
            >
            </iframe>
          </div>
        </template>
        <template v-else>
          <!-- Placeholder or loading message when oldData is null -->
          <p>Loading...</p>
        </template>
      </TabPanel>
      <!-- comment -->
      <TabPanel header="Comments (9+)" :pt="customTabStyle">
        <!-- message -->
        <div class="px-6 pt-8">
          <!-- submitted rating -->

          <div class="flex space-x-1">
            <span
              v-for="(star, index) in 5"
              :key="index"
              @click="setRating(index + 1)"
              @mouseover="hoverRating(index + 1)"
              @mouseleave="hoverRating(0)"
              class="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                :class="[
                  'h-8 w-8',
                  {
                    'text-[#FF8A00]':
                      hoverIndex >= index + 1 || rating >= index + 1,
                    'text-gray-300':
                      hoverIndex < index + 1 && rating < index + 1,
                  },
                ]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.451 8.332 1.209-6.05 5.896 1.429 8.316L12 18.896l-7.379 3.863 1.429-8.316-6.05-5.896 8.332-1.209z"
                />
              </svg>
            </span>
          </div>

          <!-- submitted rating end -->
          <InputTextArea
            class="md:mt-4"
            rows="5"
            id="phone"
            placeholder="Your Feedback"
            v-model="Message"
          />
          <div class="text-end md:mt-4">
            <button
              type="button"
              class="focus:outline-none text-white bg-primary hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Send Feedback
            </button>
          </div>
        </div>
        <div class="mt-8 md:mt-14 ps-6">
          <TitleWithSub title="Comments" />
          <hr class="relative top-[-40px] ms-36" />
        </div>
        <!-- comment list -->
        <div class="mt-4 ps-6">
          <div
            class="flex items-center mt-8"
            v-for="(comment, index) in visibleComments"
            :key="index"
          >
            <div class="flex-shrink-0">
              <img
                class="w-12 h-12 bg-gray-300 rounded-full"
                :src="comment.profileImg"
                alt=""
              />
            </div>
            <div class="ml-4">
              <h4 class="font-bold">{{ comment.customerName }}</h4>
              <div class="flex">
                <Rating :rating="4" />
              </div>
              <p class="mt-2 text-gray-700">
                {{ comment.commentDescription }}
                <NuxtLink class="cursor-pointer">See More</NuxtLink>
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full md:pt-16 pt-8"
            v-if="visibleComments.length < comments.length"
          >
            <div class="relative w-full ms-16" @click="showMoreComments">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center">
                <div
                  class="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer"
                >
                  <span class="text-black">   <Icon class="h-6 w-6 text-gray-800" name="ri:arrow-down-double-line" /> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <!-- QA -->
      <TabPanel header="QA" :pt="customTabStyle">
        <div class="ms-6">
          <h2 class="text-lg font-semibold bg-gray-300 py-2 ps-4">
            Premium Polo T-Shirt
          </h2>
          <ul class="list-disc ps-12 py-4 space-y-2 bg-gray-100">
            <li>
              <span class="font-semibold">প্রিমিয়াম পোলো টি-শার্ট:</span>
              দৈর্ঘ্যপ্রীতি এবং সহজতা জন্য উচ্চ গুণমানের উপাদান ব্যবহার করে
              নির্মিত।
            </li>
            <li>
              <span class="font-semibold">ক্লাসিক ডিজাইন:</span> সাধারণ ঘুরে
              দেখা যাবে সমস্ততা বিভিন্ন অনুষ্ঠান, সাধারণ বেড়াতে প্রস্তুতি মুক্ত
              স্টাইল।
            </li>
          </ul>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>

<style>
.product-details-tab .p-tabview .p-tabview-ink-bar {
  background-color: #db4444;
}
</style>
