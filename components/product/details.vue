<template>
  <div class="product-details-tab">
    <TabView class="mt-6">
      <!-- Product Details -->
      <TabPanel header="Product Details">
        <div class="px-2">
          <h2 class="text-lg font-semibold mb-4">Product Description</h2>
          <p>{{ productdetails.description }}</p>
          <h2 class="text-lg font-semibold mt-6 mb-4">Features</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li v-for="(feature, index) in productdetails.features" :key="index">{{ feature }}</li>
          </ul>
        </div>
      </TabPanel>

      <!-- Reviews -->
      <TabPanel header="Reviews">
        <!-- Display Reviews -->
        <div class="px-2">
          <h3 class="text-lg font-semibold mb-4">Customer Reviews</h3>
          <div v-for="(comment, index) in visibleReviews" :key="index" class="mb-6">
            <div class="flex items-center">
              <img :src="comment.profileImg" class="w-12 h-12 object-cover rounded-full mr-4" alt="Profile" />
              <div>
                <h4 class="font-bold">{{ comment.customerName }}</h4>
                <div class="flex">
                  <Rating :rating="comment.rating" />
                </div>
                <p class="mt-2 text-gray-700">{{ comment.commentDescription }}</p>
              </div>
              <!--customer product image on click show full image-->
              <img v-if="comment.customerProductImage" :src="comment.customerProductImage"
                class="w-24 h-24 object-cover rounded-md ml-auto" alt="Product" />
            </div>
          </div>
          <div class="flex flex-row items-center justify-center">
            <button v-if="visibleReviews.length < reviews.length" @click="showMoreReviews"
              class="text-white bg-red-600 rounded-md py-1 px-2">
              Show More
              <Icon name="material-symbols:arrow-cool-down" class="" />
            </button>
          </div>
        </div>

        <!-- Review Submission -->
        <div class="px-2 ">
          <h3 class="text-lg font-semibold pb-3">Leave a Review</h3>
          <!-- Star Rating -->
          <div class="flex space-x-1 mb-4">
            <span v-for="(star, index) in 5" :key="index" @click="setRating(index + 1)"
              @mouseover="hoverRating(index + 1)" @mouseleave="hoverRating(0)" class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="[
                'h-8 w-8',
                hoverIndex >= index + 1 || rating >= index + 1
                  ? 'text-[#FF8A00]'
                  : 'text-gray-300',
              ]" viewBox="0 0 24 24">
                <path
                  d="M12 .587l3.668 7.451 8.332 1.209-6.05 5.896 1.429 8.316L12 18.896l-7.379 3.863 1.429-8.316-6.05-5.896 8.332-1.209z" />
              </svg>
            </span>
          </div>
          <!-- Comment Input -->
          <textarea v-model="newComment" class="w-full p-3 border rounded-md" rows="4"
            placeholder="Write your review"></textarea>
          <div class="text-end mt-4">
            <button @click="addComment" class="bg-primary text-white px-5 py-2 rounded-md">
              Submit Review
            </button>
          </div>
        </div>
      </TabPanel>

      <!-- Question & Answer -->
      <TabPanel header="Q&A">
        <div class="px-2">
          <h2 class="text-lg font-semibold">Common Questions & Awnsers</h2>
          <div class="mt-4">
            <div v-for="(item, index) in qa" :key="index" class="mb-4">
              <h3 class="font-semibold">{{ item.question }}</h3>
              <p class="text-gray-700">{{ item.answer }}</p>
              </div>
            </div>
          </div>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
// State for product data
const productData = ref(null);

// Fetch product data on mount
onMounted(async () => {
  try {
    const response = await fetch('/api/product-details');
    const data = await response.json();
    if (data.blocks) {
      productData.value = data;
    } else {
      console.error('No blocks found in product data');
    }
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
});

// Rating and comment submission logic
const rating = ref(0);
const hoverIndex = ref(0);
const newComment = ref('');
const qa=[
  {
    question: 'What is the material of the product?',
    answer: 'High-quality material for durability and comfort. Ideal for casual outings and formal events. Perfect for all-day wear. Available in multiple colors and sizes. Machine washable. Imported. 100% cotton.'
  },
  {
    question: 'Is the product machine washable?',
    answer: 'Yes, the product is machine washable.'
  },
  {
    question: 'What is the return policy?',
    answer: 'We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return the product within 30 days for a full refund.'
  }
]
const reviews = ref([
  {
    profileImg: 'https://img.freepik.com/free-psd/expressive-man-gesturing_23-2150198787.jpg',
    customerName: 'John Doe',
    rating: 4,
    commentDescription: 'Great product, very comfortable!',
    customerProductImage: 'https://image.coolblue.nl/624x351/content/aa7b986f5f5efe05ac9a28fd574299d9'
  },
  {
    profileImg: 'https://img.freepik.com/free-photo/close-up-smiling-excited-man-with-beard-looking-amused-advertisement-standing-against-blue-background_1258-65503.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728000000&semt=ais_hybrid',
    customerName: 'Jane Smith',
    rating: 5,
    commentDescription: 'Amazing quality, highly recommend!',
    customerProductImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUVXERm3yWgAa9s5uAIG2et2PtD1mM-1n6g&s'
  },
  {
    profileImg: 'https://media.istockphoto.com/id/661799106/photo/portrait-of-a-young-french-man.jpg?s=612x612&w=0&k=20&c=M-8ccbYQZCvQWmKLLyDF5mYjF3KaBTQwX6HDdzvw_pk=',
    customerName: 'Donald Trump',
    rating: 3,
    commentDescription: 'Good product, but could be better.',

  }
]);
// Product details
const productdetails = {
  description: 'High-quality material for durability and comfort. Ideal for casual outings and formal events. Perfect for all-day wear. Available in multiple colors and sizes. Machine washable. Imported. 100% cotton.',
  features: [
    'Classic Design: Ideal for casual outings and formal events.',
    'Comfortable Fit: Perfect for all-day wear.',
  ],
}

const visibleReviewCount = ref(2);
const visibleReviews = computed(() =>
  reviews.value.slice(0, visibleReviewCount.value)
);

const setRating = (value) => {
  rating.value = value;
};

const hoverRating = (value) => {
  hoverIndex.value = value;
};

const addComment = () => {
  if (newComment.value) {
    reviews.value.push({
      profileImg: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg',
      customerName: 'Anonymous',
      rating: rating.value,
      commentDescription: newComment.value,
    });
    newComment.value = '';
    rating.value = 0;
  }
};

const showMoreReviews = () => {
  if (visibleReviewCount.value < reviews.value.length) {
    visibleReviewCount.value += 2;
  }
};
</script>

<style>
.product-details-tab .p-tabview .p-tabview-ink-bar {
  background-color: #db4444;
}
</style>
