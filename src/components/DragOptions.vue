<template>
  <div class="drag-options-content">
    <template v-if="items.length !== 0">
      <draggable
        v-model="items"
        @start="drag = true"
        @end="drag = false"
        :group="{ name: 'components', pull: 'clone', put: false }"
        :clone="mapData"
        item-key="id"
      >
        <template #item="{ element, index }">
          <div class="item" @click="buildComponent(element.name)">
            <i :class="element.icon"></i>
            <span>{{ element.name }}</span>
          </div>
        </template>
      </draggable>
    </template>
    <template v-else> There is nothing to do here. Come Back later! </template>
  </div>
</template>
<script setup>
import draggable from "vuedraggable";
import { useCreateComponent } from "./useCreateComponent";
const emit = defineEmits(["buildComponent"]);
const items = [
  {
    icon: "fa-solid fa-a",
    name: "Autocomplete",
  },
  {
    icon: "fa-solid fa-stop",
    name: "Button",
  },
  {
    icon: "fa-solid fa-list-check",
    name: "Checkbox Group",
  },
  {
    icon: "fa-solid fa-calendar-days",
    name: "Date Field",
  },
  {
    icon: "fa-solid fa-file-arrow-up",
    name: "File Upload",
  },
  {
    icon: "fa-solid fa-heading",
    name: "Header",
  },
  {
    icon: "fa-solid fa-ghost",
    name: "Hidden Input",
  },
  {
    icon: "fa-solid fa-hashtag",
    name: "Number",
  },
  {
    icon: "fa-solid fa-paragraph",
    name: "Paragraph",
  },
  {
    icon: "fa-solid fa-list-ul",
    name: "Radio Group",
  },
  {
    icon: "fa-solid fa-s",
    name: "Select",
  },
  {
    icon: "fa-solid fa-t",
    name: "Text Field",
  },
  {
    icon: "fa-regular fa-newspaper",
    name: "Text Area",
  },
];

function buildComponent(item) {
  emit("buildComponent", item);
}

function mapData(item) {
  return useCreateComponent(item.name);
}
</script>
