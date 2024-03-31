<template>
  <div class="edit-subsection">
    <div class="add-options-container" v-show="data.hasOwnProperty('values')">
      <div class="form-container">
        <label>Options</label>
        <div class="w-80">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="options-container"
          >
            <input
              class="values-checkbox"
              type="checkbox"
              v-model="value.selected"
              v-show="data?.multiple"
            />
            <input v-model="value.label" />
            <input v-model="value.value" />
            <i
              class="fa-solid fa-x"
              v-show="index > 0"
              @click="removeValue(index)"
            ></i>
          </div>
        </div>
      </div>
      <button @click="addValues">Add Option +</button>
    </div>
    <div class="form-container" v-show="data.hasOwnProperty('multiple')">
      <label></label>
      <input
        type="checkbox"
        v-model="multiple"
        @input="
          (event) => $emit('changeData', 'multiple', event.target.checked)
        "
      />
      <p>Allow Multiple Selections</p>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
const emit = defineEmits(["changeData"]);
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const values = ref(
  props.data?.values ? [...JSON.parse(JSON.stringify(props.data.values))] : null
);
const multiple = ref(props.data?.multiple);
function addValues() {
  values.value.push({ label: "", value: "", selected: false });
}

function removeValue(index) {
  values.value.splice(index, 1);
}

watch(
  values,
  () => {
    emit("changeData", "values", values.value);
  },
  { deep: true }
);
</script>
