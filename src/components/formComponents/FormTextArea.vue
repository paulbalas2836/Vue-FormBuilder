<template>
  <div>
    <textarea
      v-show="data?.subtype === 'textarea'"
      class="form-control"
      :class="data?.className"
      :name="data?.name"
      :maxlength="data?.maxLength"
      :rows="data?.rows"
      :placeholder="data?.placeholder"
      v-model="data.values"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <div v-show="data?.subtype === 'tinymce'">
      <editor
        api-key="no-api-key"
        v-model="data.values"
        :maxlength="data?.maxLength"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <div v-show="data?.subtype === 'quill'">
      <quill-editor
        theme="snow"
        :placeholder="data?.placeholder"
        v-model="data.values"
        :maxlength="data?.maxLength"
        @input="$emit('update:modelValue', $event.target.value)"
      ></quill-editor>
    </div>
  </div>
</template>
<script setup>
  import Editor from "@tinymce/tinymce-vue";
  import { ref, watch } from "vue";
  import { QuillEditor } from "@vueup/vue-quill";
  import "@vueup/vue-quill/dist/vue-quill.snow.css";

  defineEmits(["update:modelValue"]);
  const props = defineProps({
    data: {
      type: Object,
      require: true,
    },
    indexComponent: {
      type: Number,
      required: false,
    },
  });
</script>
