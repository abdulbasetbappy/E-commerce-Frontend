<script setup>
// Props: Accepting `endTime` as a prop
const props = defineProps({
  endTime: {
    type: Date,
    required: true
  }
});

// Local state to hold remaining time values
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

// Timer interval
let timer = null;

// Function to calculate the remaining time
const calculateTimeRemaining = () => {
  const now = new Date();
  const timeDiff = props.endTime - now;

  if (timeDiff <= 0) {
    clearInterval(timer);
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
  } else {
    hours.value = Math.floor(timeDiff / (1000 * 60 * 60));
    minutes.value = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((timeDiff % (1000 * 60)) / 1000);
  }
};

// Start the countdown on mount
onMounted(() => {
  calculateTimeRemaining();
  timer = setInterval(calculateTimeRemaining, 1000);
});

// Clear the timer when the component is unmounted
onBeforeUnmount(() => {
  clearInterval(timer);
});

// Computed property to format the output like `15H : 10M : 15S`
const formattedTime = computed(() => {
  const format = (value) => String(value).padStart(2, "0");
  return `${format(hours.value)}H : ${format(minutes.value)}M : ${format(seconds.value)}S`;
});
</script>

<template>
  <div>
    <p class="font-bold text-base md:text-xl text-gray-500 " >{{ formattedTime }}</p>
  </div>
</template>

<style scoped>
</style>
