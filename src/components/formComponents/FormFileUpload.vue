<template>
  <div class="file-upload">
    <input
      type="file"
      v-show="data.subtype === 'file'"
      :class="data?.className"
      :name="data?.name"
      :multiple="data?.multiple"
      :placeholder="data?.placeholder"
    />
    <div
      v-show="data.subtype === 'fileuploader'"
      class="file-uploader"
      :class="{ 'file-uploader-list': files.length !== 0 }"
      @dragenter.prevent="isItemOver = true"
      @dragleave.prevent="isItemOver = false"
      @drop.prevent="addFile"
      @dragover.prevent
    >
      <label v-show="!isItemOver">
        <span>Upload a file</span>
        <input
          class="sr-only"
          type="file"
          :class="data?.className"
          :name="data?.name"
          :multiple="data?.multiple"
          :placeholder="data?.placeholder"
        />
      </label>
      <div class="file-card-container">
        <div v-for="(file, index) in files" :key="index" class="file-card">
          <div class="delete-button" @click="deleteItem(index)">x</div>
          <div class="img-container">
            <img v-show="file.data.type.includes('image')" :src="file.image" />
          </div>
          <p>{{ file.data.name }}</p>
          <div class="size">{{ (file.data.size / 1000).toFixed(2) }}kB</div>
        </div>
      </div>
      <span v-show="!isItemOver && files.length === 0">Drop files here</span>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  defineProps({
    data: { type: Object, required: true },
    indexComponent: {
      type: Number,
      required: false,
    },
  });
  const files = ref([]);
  const isItemOver = ref(false);

  function addFile(event) {
    files.value.push({ data: event.dataTransfer.files[0], image: null });

    if (files.value[files.value.length - 1].data.type.includes("image"))
      files.value[files.value.length - 1].image = URL.createObjectURL(
        event.dataTransfer.files[0]
      );

    isItemOver.value = false;
  }

  function deleteItem(index) {
    files.value.splice(index, 1);
  }
</script>
