<template>
  <div class="edit-subsection">
    <div class="form-container" v-show="data.hasOwnProperty('toggle')">
      <label>Toggle</label>
      <input
        type="checkbox"
        v-model="toggle"
        @input="(event) => changeData('toggle', event.target.checked)"
      />
    </div>
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
  const toggle = ref(props.data?.toggle);

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
