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
    <div
      class="form-container"
      v-show="data.hasOwnProperty('requireValidOption')"
    >
      <label></label>
      <input
        type="checkbox"
        v-model="enablePredifinedOption"
        @input="
          (event) =>
            $emit('changeData', 'requireValidOption', event.target.checked)
        "
      />
      <p>Only accept a pre-defined Option</p>
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
    props.data?.values
      ? [...JSON.parse(JSON.stringify(props.data.values))]
      : null
  );
  const enablePredifinedOption = ref(props.data?.requireValidOption);

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
