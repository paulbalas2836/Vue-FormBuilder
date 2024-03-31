<template>
  <div class="file-upload">
    <input
      type="file"
      v-show="data.subtype === 'file'"
      :class="data?.className"
      :name="data?.name"
      :multiple="data?.multiple"
      :placeholder="data?.placeholder"
      id="file_upload"
      @change="onFileSelect"
    />
    <div
      v-show="data.subtype === 'fileuploader'"
      class="file-uploader"
      :class="{ 'file-uploader-list': files.length !== 0 }"
      @dragenter.prevent="isItemOver = true"
      @dragleave.prevent="isItemOver = false"
      @drop.prevent="onFileDrop"
      @dragover.prevent
    >
      <label v-show="!isItemOver" for="file_upload">
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
        <div v-for="(file, index) in files" :key="file.key" class="file-card">
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

function onFileSelect(event) {
  if (event.target.files.length === 0) return;

  addFile(event.target.files[0]);
}

function onFileDrop(event) {
  if (event.dataTransfer.files.length === 0) return;

  addFile(event.dataTransfer.files[0]);
  isItemOver.value = false;
}

function addFile(file) {
  files.value.push({
    data: file,
    image: null,
    key: files.value.length,
  });

  if (files.value[files.value.length - 1].data.type.includes("image"))
    files.value[files.value.length - 1].image = URL.createObjectURL(file);
}

function deleteItem(index) {
  files.value.splice(index, 1);
}
</script>
