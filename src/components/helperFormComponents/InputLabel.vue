<template>
  <div class="label-content">
    <label class="form-label">{{ label }}</label>
    <i class="fa-solid fa-asterisk" v-show="isRequired"></i>
    <span
      v-show="helpText.length !== 0"
      @mouseenter="showHelpText = true"
      @mouseleave="showHelpText = false"
      >?
      <div class="help-text" v-show="showHelpText">{{ helpText }}</div>
      <div class="help-text-triangle" v-show="showHelpText"></div>
    </span>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  defineProps({
    isRequired: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    helpText: {
      type: String,
      default: "",
    },
  });

  const showHelpText = ref(false);
</script>
