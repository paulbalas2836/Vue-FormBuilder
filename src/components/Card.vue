<template>
  <div class="card" :class="{ 'card-hover': hover }">
    <div class="action-button-zone">
      <div
        class="delete"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @click="$emit('delete')"
      >
        <i class="fa-solid fa-trash-can"></i>
      </div>
      <div class="edit" @click="$emit('edit')">
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
      <div class="copy" @click="$emit('copy')">
        <i class="fa-solid fa-copy"></i>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const hover = ref(false);

  const emit = defineEmits(["delete", "edit", "copy"]);
</script>
