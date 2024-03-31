<template>
  <div class="modal" @click="$emit('closeModal')">
    <div class="modal-background"></div>
    <div class="modal-container">
      <div class="modal-content-container">
        <div
          class="modal-content"
          tabindex="0"
          @keydown.esc="$emit('closeModal')"
          @click.stop
        >
          <div class="content">
            <code>
              [
              <div v-for="element in jsonData" class="identation">
                {
                <div class="identation">
                  <template v-for="key in Object.keys(element)">
                    <div>
                      <span class="key">"{{ key }}"</span>
                      <span> : </span>
                      <template v-if="!isElementArray(element[key])">
                        <span
                          class="value"
                          :class="getElementValueClass(element[key])"
                          >{{ getElementValue(element[key]) }}</span
                        >
                      </template>
                      <template v-else>
                        [
                        <div
                          v-for="newElement in element[key]"
                          class="identation"
                        >
                          {
                          <div
                            v-for="newKey in Object.keys(newElement)"
                            class="identation"
                          >
                            <span class="key">"{{ newKey }}"</span>
                            <span> : </span>
                            <span
                              class="value"
                              :class="getElementValueClass(newElement[newKey])"
                              >{{ getElementValue(newElement[newKey]) }}</span
                            >
                          </div>
                          }
                        </div>
                        ]
                      </template>
                    </div>
                  </template>
                </div>
                }
              </div>

              ]
            </code>
            <div class="footer">
              <button
                ref="copyButton"
                type="button"
                @click="copyOnClipboard"
                @keydown.tab="($event) => $event.preventDefault()"
                @keydown.tab.shift="($event) => $event.preventDefault()"
              >
                Copy Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, inject } from "vue";
defineEmits(["closeModal"]);
const props = defineProps({
  jsonData: { required: true },
});

const copyButton = ref(null);

onMounted(() => {
  copyButton.value.focus();
});

const toast = inject("toast");
function copyOnClipboard() {
  let parsedData = JSON.stringify(props.jsonData);
  navigator.clipboard
    .writeText(parsedData)
    .then(() => {
      toast.value.show();
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}

function isElementArray(element) {
  if (typeof element === "object") return true;

  return false;
}

function getElementValueClass(element) {
  if (typeof element === "string") return "yellow";

  return "purple";
}
function getElementValue(element) {
  if (typeof element === "string") return `"${element}"`;

  return element;
}
</script>
