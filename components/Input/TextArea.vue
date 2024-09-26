<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,  // Corrected the typo here
    default: 3,    // Set a sensible default for rows, such as 3
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const emits = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="mb-4">
    <label :for="id" class="text-sm font-medium text-gray-700">{{ label }}</label>
    <textarea :rows="rows" :id="id" :label="label" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-0 py-2 mt-1 rounded border-0 ps-2 bg-[#f3f4f6] focus:outline-none"></textarea>
  </div>
</template>


<style scoped>
.mb-4 {
  margin-bottom: 1rem;
}

.text-sm {
  font-size: 0.875rem;
}

.font-medium {
  font-weight: 500;
}

.text-gray-700 {
  color: #4a5568;
}

.block {
  display: block;
}

.w-full {
  width: 100%;
}

.px-0 {
  padding-left: 0;
  padding-right: 0;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.rounded {
  border-radius: 0.25rem;
}

.border-0 {
  border: 0;
}

.ps-2 {
  padding-left: 0.5rem;
}

.bg-gray-100 {
  background-color: #f7fafc;
}
</style>
