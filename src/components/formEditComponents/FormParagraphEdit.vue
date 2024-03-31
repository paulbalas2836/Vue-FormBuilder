<template>
  <div class="edit-subsection">
    <div class="form-container" v-show="data.hasOwnProperty('subtype')">
      <label>Type</label>
      <select
        v-model="subtype"
        @input="(event) => $emit('changeData', 'subtype', event.target.value)"
        class="form-control type-text"
      >
        <option value="p">p</option>
        <option value="address">address</option>
        <option value="blockquote">blockquote</option>
        <option value="canvas">canvas</option>
        <option value="output">output</option>
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
