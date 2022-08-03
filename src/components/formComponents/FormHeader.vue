<template>
  <component :is="data?.subtype" :class="data?.className">{{
    data?.label
  }}</component>
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
