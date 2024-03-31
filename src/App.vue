<template>
  <div class="main-content">
    <h1>Drag and Drop</h1>
    <h1 class="subtitle"><span>Full-featured</span> Form Editing</h1>
    <div class="drag-content">
      <div class="drag-zone">
        <draggable
          v-model="itemList"
          @start="drag = true"
          @end="drag = false"
          group="components"
          item-key="id"
          class="flex-col"
        >
          <template #header>
            <div
              v-show="itemList.length === 0"
              class="drag-zone"
              :class="{ 'zone-text': itemList.length === 0 }"
            >
              <p v-show="itemList.length === 0">
                Drag a field from the right to this area
              </p>
            </div>
          </template>
          <template #item="{ element, index }">
            <Card
              @delete="deleteItem(index)"
              @edit="editItem(index)"
              @copy="copyItem(index)"
              :class="{ 'hidden-input-card': element.data?.type === 'hidden' }"
            >
              <div :class="{ 'card-content': showLabel(element) }">
                <InputLabel
                  v-show="showLabel(element)"
                  :is-required="element.data?.required"
                  :help-text="element.data?.description"
                  :label="element.data?.label"
                ></InputLabel>
                <component
                  v-show="!element.showEditZone"
                  :is="element.item"
                  :data="element.data"
                  @update-component="updateComponent"
                  :index-component="index"
                  v-model="element.data.values"
                ></component>
                <EditZone
                  v-show="element.showEditZone"
                  :data="element.data"
                  :index="index"
                  @update-component="changeData"
                ></EditZone>
              </div>
            </Card>
          </template>
        </draggable>
      </div>
      <div class="drag-section">
        <drag-options @build-component="updateComponentList"> </drag-options>
        <div class="button-zone">
          <button class="json-button" @click="getJsonData">Get Json</button>
          <button class="clear-button" @click="clearData">Clear</button>
        </div>
      </div>
    </div>
    <JsonModal
      :json-data="jsonData"
      v-if="showJson"
      @close-modal="closeModal"
    ></JsonModal>
    <Toast ref="toast"></Toast>
  </div>
</template>

<script setup>
import { useCreateComponent } from "./components/useCreateComponent";
import DragOptions from "./components/DragOptions.vue";
import Card from "./components/Card.vue";
import Toast from "./components/helperFormComponents/Toast.vue";
import InputLabel from "./components/helperFormComponents/InputLabel.vue";
import draggable from "vuedraggable";
import JsonModal from "./components/helperFormComponents/JsonModal.vue";
import { ref, markRaw, provide } from "vue";
import EditZone from "./components/formEditComponents/EditZone.vue";
const itemList = ref([]);
const jsonData = ref(null);
const showJson = ref(false);
const toast = ref(null);

provide("toast", toast);

function deleteItem(index) {
  itemList.value.splice(index, 1);
}

function editItem(index) {
  itemList.value[index].showEditZone = !itemList.value[index].showEditZone;
}

function closeModal() {
  showJson.value = false;
}

function updateComponent(index, value, valueIndex = null, toggle = false) {
  if (toggle !== false && valueIndex !== null) {
    for (let i = 0; i < itemList.value[index].data.values.length; i++) {
      itemList.value[index].data.values[i].selected = false;
    }
    itemList.value[index].data.values[valueIndex].selected = true;
    return;
  }
  itemList.value[index].data.values.forEach((el) => {
    el.selected = false;
  });
  if (typeof value === "object") {
    itemList.value[index].data.values.forEach((el) => {
      value.forEach((val) => {
        if (el.value === val) el.selected = true;
      });
    });
  }

  itemList.value[index].data.values.forEach((el) => {
    if (el.value === value) el.selected = true;
  });
}

function changeData(property, index, value) {
  itemList.value[index].data[property] = value;
}

function copyItem(index) {
  let listAfterIndex = itemList.value.slice(index + 1);
  let copyItemData = JSON.parse(JSON.stringify(itemList.value[index].data));
  copyItemData.name =
    copyItemData.name.slice(0, copyItemData.name.lastIndexOf("-")) +
    "-" +
    Date.now();
  itemList.value.splice(
    index + 1,
    itemList.value.length - 1 - index,
    {
      item: markRaw(itemList.value[index].item),
      data: copyItemData,
      showEditZone: itemList.value[index].showEditZone,
      id: itemList.value[index].id,
    },
    ...listAfterIndex
  );
}

function clearData() {
  itemList.value.splice(0, itemList.value.length);
}

function getJsonData() {
  let json = [];
  itemList.value.forEach((elements) => {
    let dataObject = {};
    for (let [key, value] of Object.entries(elements.data)) {
      if (value !== "") dataObject[key] = value;
    }
    json.push(dataObject);
  });
  jsonData.value = json;
  showJson.value = true;
}

function showLabel(item) {
  if (item.showEditZone === true) return true;

  if (
    item.data.type === "button" ||
    item.data.type === "header" ||
    item.data.type === "paragraph"
  )
    return false;

  return true;
}

function updateComponentList(item) {
  itemList.value.push(useCreateComponent(item));
}
</script>
