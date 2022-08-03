<template>
  <div class="checkbox">
    <div :class="{ 'inline-checkbox': data?.inline }">
      <div
        v-for="(option, index) in data?.values"
        :key="index"
        class="checkbox-content"
      >
        <input
          type="checkbox"
          v-model="option.selected"
          :class="data?.className"
          v-show="!data?.toggle"
          :value="option?.value"
          :id="index"
          @input="$emit('update:modelValue', $event.target.checked)"
        />

        <label
          v-show="data?.toggle"
          class="checkbox-switch-container"
          :class="data?.className"
        >
          <input
            type="checkbox"
            v-model="option.selected"
            :value="option?.value"
            :id="index"
            @input="$emit('update:modelValue', $event.target.checked)"
            class="checkbox-switch"
          />
          <span class="slide-round"></span>
        </label>
        <label>{{ option.label }}</label>
      </div>
      <div v-show="data?.other">
        <input type="checkbox" v-model="otherCheckbox" />
        <input
          type="text"
          v-model="otherCheckboxLabel"
          v-show="otherCheckbox"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const emit = defineEmits(["updateComponent", "update:modelValue"]);
  defineProps({
    data: {
      type: Object,
      required: true,
    },
    indexComponent: {
      type: Number,
      required: false,
    },
  });

  const otherCheckbox = ref(false);
  const otherCheckboxLabel = ref(null);
</script>
