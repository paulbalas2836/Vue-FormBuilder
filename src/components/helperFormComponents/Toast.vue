<template>
  <div class="toast-wrapper">
    <TransitionGroup name="toast">
      <div class="toast-container" v-for="toast in toasts" :key="toast.id">
        <div class="icon">
          <i class="fa-regular fa-clipboard"></i>
        </div>
        <div class="information">
          <div class="text">Text has been saved to clipboard with success!</div>
          <i class="fa-solid fa-x" @click="dismiss(toast)"></i>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
<script setup>
import { ref } from "vue";
const duration = 2000;
const toasts = ref([]);
const timeout = ref(null);
function show() {
  toasts.value.push({ id: new Date() });
  timeout.value = setTimeout(() => toasts.value.shift(), duration);
}

function dismiss(toast) {
  window.clearTimeout(timeout.value);
  let index = toasts.value.findIndex((el) => el.id === toast.id);
  toasts.value.splice(index, 1);
}

defineExpose({
  show,
});
</script>
