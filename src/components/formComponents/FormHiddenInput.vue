<template>
  <div class="hidden-text" :value="data?.value" type="hidden">
    Hidden Input: {{ data?.name }}
  </div>
</template>
<script setup>
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
