<template>
  <div class="edit-subsection">
    <div class="form-container" v-show="data.hasOwnProperty('subtype')">
      <label>Type</label>
      <select
        v-model="subtype"
        @input="(event) => $emit('changeData', 'subtype', event.target.value)"
        class="form-control type-text"
      >
        <option value="file">File Upload</option>
        <option value="fileuploader">File uploader</option>
      </select>
    </div>
    <div class="form-container" v-show="data.hasOwnProperty('multiple')">
      <label> Multiple Files</label>
      <input
        type="checkbox"
        v-model="multiple"
        @input="
          (event) => $emit('changeData', 'multiple', event.target.checked)
        "
      />
      <p>"Allow users to upload multiple files"</p>
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
const multiple = ref(props.data?.multiple);
</script>
