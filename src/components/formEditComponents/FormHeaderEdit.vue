<template>
  <div class="edit-subsection">
    <div class="form-container" v-show="data.hasOwnProperty('subtype')">
      <label>Type</label>
      <select
        v-model="subtype"
        @input="(event) => $emit('changeData', 'subtype', event.target.value)"
        class="form-control type-text"
      >
        <option value="h1">h1</option>
        <option value="h2">h2</option>
        <option value="h3">h3</option>
        <option value="h4">h4</option>
        <option value="h5">h5</option>
        <option value="h6">h6</option>
      </select>
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

const subtype = ref(props.data?.subtype);
</script>
