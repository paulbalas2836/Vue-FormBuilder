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
    <div class="form-container" v-show="data.hasOwnProperty('rows')">
      <label>rows</label>
      <input
        type="number"
        v-model="rows"
        @input="(event) => $emit('changeData', 'rows', event.target.value)"
        class="form-control number-text"
      />
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('subtype')">
      <label>Type</label>
      <select
        v-model="subtype"
        @input="(event) => $emit('changeData', 'subtype', event.target.value)"
        class="form-control type-text"
      >
        <option value="textarea">textarea</option>
        <option value="tinymce">tinymce</option>
        <option value="quill">quill</option>
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
  const rows = ref(props.data?.rows);
  const subtype = ref(props.data?.subtype);
</script>
