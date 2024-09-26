<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  inputType: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  dynamicClass: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="mb-4">
    <label :for="id" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <input
    class="bg-light px-3 py-2 w-full rounded focus:outline-none mt-2"
      :type="inputType"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="dynamicClass"
    />
  </div>
</template>


