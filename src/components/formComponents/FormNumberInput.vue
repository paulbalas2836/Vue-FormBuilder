<template>
  <div class="number-container">
    <input
      type="number"
      :placeholder="data?.placeholder"
      :class="data?.className"
      :name="data?.name"
      @input="$emit('update:modelValue', $event.target.value)"
      v-model="data.values"
      :min="data?.min"
      :max="data?.max"
      :step="data?.step"
    />
  </div>
</template>

<script setup>
  defineEmits(["update:modelValue"]);
  defineProps({
    data: {
      type: Object,
      require: true,
    },
    indexComponent: {
      type: Number,
      required: false,
    },
  });
</script>
