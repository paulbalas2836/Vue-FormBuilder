<template>
  <div class="edit-subsection">
    <div class="form-container" v-show="data.hasOwnProperty('subtype')">
      <label>Type</label>
      <select
        v-model="subtype"
        @input="(event) => $emit('changeData', 'subtype', event.target.value)"
        class="form-control type-text"
      >
        <option value="text">Text Field</option>
        <option value="password">password</option>
        <option value="email">email</option>
        <option value="color">color</option>
        <option value="tel">tel</option>
      </select>
    </div>

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
  const subtype = ref(props.data?.subtype);
</script>
