<template>
  <div class="radio-group">
    <div :class="{ 'inline-radio': data?.inline }">
      <div v-for="(option, index) in data?.values" :key="index">
        <input
          type="radio"
          v-model="options"
          :name="data?.name"
          :class="data?.className"
          :id="index"
          :value="option.value"
        />
        <label>{{ option?.label }}</label>
      </div>
      <div v-show="data?.other">
        <input type="radio" v-model="otherRadioButton" />
        <input
          type="text"
          v-model="otherRadioButtonLabel"
          v-show="otherRadioButton"
        />
      </div>
    </div>
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

  const otherRadioButton = ref(null);
  const otherRadioButtonLabel = ref(null);
  const options = ref(
    props.data.hasOwnProperty("values")
      ? props.data.values[
          props.data.values.findIndex((el) => {
            return el.selected === true;
          })
        ]?.value
      : null
  );

  watch(options, () => {
    let index = props.data.values.findIndex((el) => {
      return el.value === options.value;
    });
    console.log(index)
    emit("updateComponent", props.indexComponent, true, index, true);
  });
</script>
