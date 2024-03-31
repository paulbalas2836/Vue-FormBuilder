<template>
  <div class="edit-subsection">
    <div class="form-container" v-show="data.hasOwnProperty('values')">
      <label>Value</label>
      <input
        type="text"
        v-model="data.values"
        @input="(event) => $emit('changeData', 'values', event.target.value)"
        placeholder="Value"
        class="form-control type-text"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const emit = defineEmits(["changeData"]);
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
>
