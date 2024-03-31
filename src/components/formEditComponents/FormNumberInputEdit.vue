<template>
  <div class="edit-subsection">
    <div class="form-container" v-show="data.hasOwnProperty('values')">
      <label>Value</label>
      <input
        type="number"
        v-model="data.values"
        @input="(event) => $emit('changeData', 'values', event.target.value)"
        placeholder="Value"
        class="form-control type-text"
      />
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('min')">
      <label>Min</label>
      <input
        type="number"
        v-model="min"
        @input="(event) => $emit('changeData', 'min', event.target.value)"
        class="form-control number-text"
      />
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('max')">
      <label>Max</label>
      <input
        type="number"
        v-model="max"
        @input="(event) => $emit('changeData', 'max', event.target.value)"
        class="form-control number-text"
      />
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('step')">
      <label>Step</label>
      <input
        type="number"
        v-model="step"
        @input="(event) => $emit('changeData', 'step', event.target.value)"
        class="form-control number-text"
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
const min = ref(props.data?.min);
const max = ref(props.data?.max);
const step = ref(props.data?.step);
</script>
