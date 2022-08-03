<template>
  <div class="date">
    <input
      type="date"
      :placeholder="data?.placeholder"
      :class="data?.className"
      v-model="data.values"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script setup>
  import { ref } from "vue";
  defineEmits(["update:modelValue"]);
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: false,
    },
  });

  const date = ref(props.data?.values);
</script>
