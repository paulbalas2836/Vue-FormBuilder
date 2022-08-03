<template>
  <div class="autocomplete" v-closable="onClose">
    <input
      :placeholder="data?.placeholder"
      class="form-control"
      v-model="search"
      @focus="isInputFocus = true"
      :class="data?.className"
    />
    <ul v-show="isInputFocus && listOfOptions.length > 0">
      <li
        v-for="(option, index) in listOfOptions"
        :key="index"
        @click="updateValue(option, index)"
        :class="{ 'selected-element': option.selected }"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { computed, ref } from "vue";
  const emit = defineEmits(["updateComponent"]);
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    indexComponent: {
      type: Number,
      required: true,
    },
  });

  const search = ref(null);
  const isInputFocus = ref(false);
  const listOfOptions = computed(() => {
    if (search.value === "" || !props.data.hasOwnProperty("values")) return [];

    let match = 0;
    return props.data.values.filter((option) => {
      if (option.label.includes(search.value) && match < 10) {
        match++;
        return option;
      }
    });
  });
  function updateValue(option, index) {
    search.value = option.label;
    isInputFocus.value = false;
    let value = true;
    let toggle = true;

    emit("updateComponent", props.indexComponent, value, index, toggle);
  }
  function onClose() {
    isInputFocus.value = false;
    if (
      !props.data.hasOwnProperty("requireValidOption") ||
      !props.data.hasOwnProperty("values")
    )
      return;
    if (!props.data.requireValidOption) return;
    if (props.data.values.every((option) => option.label !== search.value))
      search.value = "";
  }
</script>
