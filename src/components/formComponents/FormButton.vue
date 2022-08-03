<template>
  <button
    :name="data?.name"
    :type="data?.type"
    :class="data?.className"
    :value="data?.value"
  >
    {{ data?.label }}
  </button>
</template>

<script setup>
  defineProps({
    data: {
      type: Object,
      required: true,
    },
    indexComponent: {
      type: Number,
      required: false,
    },
  });
</script>
