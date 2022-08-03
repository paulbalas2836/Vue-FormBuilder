<template>
  <input
    :class="data?.className"
    :name="data?.name"
    v-model="data.values"
    :type="data?.subtype"
    :maxlength="data?.maxLength"
    :placeholder="data?.placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
  import { ref } from "vue";
  defineEmits(["update:modelValue"]);
  const props = defineProps({
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
