<template>
  <div class="modal">
    <div class="modal-background" @click="$emit('closeModal')"></div>
    <div class="modal-container">
      <div class="modal-content-container" @click="$emit('closeModal')">
        <div class="modal-content">
          <div class="content">
            {{ jsonData }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  defineEmits(["closeModal"]);
  defineProps({
    jsonData: { required: true },
  });
</script>
