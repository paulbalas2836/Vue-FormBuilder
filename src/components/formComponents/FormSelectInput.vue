<template>
  <div class="select">
    <select
      class="form-control"
      :name="data?.name"
      v-model="select"
      :multiple="data?.multiple"
    >
      <option
        v-for="(option, index) in data?.values"
        :value="option?.value"
        :key="index"
        :id="index"
      >
        {{ option?.label }}
      </option>
    </select>
  </div>
</template>
<script setup>
  import { ref, watch } from "vue";
  const emit = defineEmits(["updateComponent"]);
  const props = defineProps({
    data: {
      type: Object,
      require: true,
    },
    indexComponent: {
      type: Number,
      required: false,
    },
  });
  const select = ref(
    props.data.hasOwnProperty("values")
      ? props.data?.multiple
        ? props.data.values
        : props.data.values[
            props.data.values.findIndex((el) => {
              return el.selected === true;
            })
          ]?.value
      : null
  );
  watch(
    select,
    () => {
      emit("updateComponent", props.indexComponent, select.value);
    },
    { deep: true }
  );
</script>
