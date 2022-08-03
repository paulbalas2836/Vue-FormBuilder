<template>
  <div class="edit-zone">
    <div class="form-container" v-show="data.hasOwnProperty('required')">
      <label>Required</label>
      <input
        type="checkbox"
        v-model="isRequired"
        @input="(event) => changeData('required', event.target.checked)"
      />
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('label')">
      <label>Label</label>
      <input
        type="text"
        v-model="label"
        @input="(event) => changeData('label', event.target.value)"
        class="form-control type-text"
      />
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('description')">
      <label>Help Text</label>
      <input
        type="text"
        v-model="helpText"
        @input="(event) => changeData('description', event.target.value)"
        class="form-control type-text"
      />
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('inline')">
      <label>Inline</label>
      <input
        type="checkbox"
        v-model="inline"
        @input="(event) => changeData('inline', event.target.checked)"
      />
      <p>Dsiplay checkbox inline</p>
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('placeholder')">
      <label>Placeholder</label>
      <input
        type="text"
        v-model="placeholder"
        @input="(event) => changeData('placeholder', event.target.value)"
        class="form-control type-text"
      />
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('className')">
      <label>Class</label>
      <input
        type="text"
        v-model="className"
        @input="(event) => changeData('className', event.target.value)"
        placeholder="Space separeted classes"
        class="form-control type-text"
      />
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('name')">
      <label>Name</label>
      <input
        type="text"
        v-model="name"
        @input="(event) => changeData('name', event.target.value)"
        placeholder="This field cannot be empty"
        class="form-control type-text"
      />
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('access')">
      <label>Access</label>
      <div class="limit-access">
        <div>
          <input
            type="checkbox"
            v-model="access"
            @input="(event) => changeData('access', event.target.checked)"
          />
          <label>Limit access to one or more of the following roles:</label>
        </div>
        <div v-show="access" class="access">
          <input
            type="checkbox"
            v-model="isAdmin"
            class="form-control type-text"
            @input="
              (event) => changeData('role', event.target.checked ? '1' : '')
            "
          />
          <label>Administrator</label>
        </div>
      </div>
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('other')">
      <label>Enable"Other"</label>
      <input
        type="checkbox"
        v-model="other"
        @input="(event) => changeData('other', event.target.checked)"
      />
      <p>Let users enter an unlisted option</p>
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('maxLength')">
      <label>maxLength</label>
      <input
        type="number"
        v-model="maxLength"
        @input="(event) => changeData('maxLength', event.target.value)"
        class="form-control number-text"
      />
    </div>

    <FormAutocompleteEditVue
      v-show="data.type === 'autocomplete'"
      @change-data="changeData"
      :data="data"
    ></FormAutocompleteEditVue>

    <FormButtonEdit
      v-show="data.type === 'button'"
      @change-data="changeData"
      :data="data"
    ></FormButtonEdit>

    <FormCheckboxEdit
      v-show="data.type === 'checkbox-group'"
      @change-data="changeData"
      :data="data"
    ></FormCheckboxEdit>

    <FormDateInputEdit
      v-show="data.type === 'date'"
      @change-data="changeData"
      :data="data"
    ></FormDateInputEdit>

    <FormFileUploadEdit
      v-show="data.type === 'file'"
      @change-data="changeData"
      :data="data"
    ></FormFileUploadEdit>

    <FormHeaderEdit
      v-show="data.type === 'header'"
      @change-data="changeData"
      :data="data"
    ></FormHeaderEdit>

    <FormHiddenInputEdit
      v-show="data.type === 'hidden'"
      @change-data="changeData"
      :data="data"
    ></FormHiddenInputEdit>

    <FormNumberInputEdit
      v-show="data.type === 'number'"
      @change-data="changeData"
      :data="data"
    ></FormNumberInputEdit>

    <FormParagraphEdit
      v-show="data.type === 'paragraph'"
      @change-data="changeData"
      :data="data"
    ></FormParagraphEdit>

    <FormRadioGroupEdit
      v-show="data.type === 'radio-group'"
      @change-data="changeData"
      :data="data"
    ></FormRadioGroupEdit>

    <FormSelectInputEdit
      v-show="data.type === 'select'"
      @change-data="changeData"
      :data="data"
    ></FormSelectInputEdit>

    <FormTextFieldEdit
      v-show="data.type === 'text'"
      @change-data="changeData"
      :data="data"
    ></FormTextFieldEdit>

    <FormTextAreaEdit
      v-show="data.type === 'textarea'"
      @change-data="changeData"
      :data="data"
    ></FormTextAreaEdit>
  </div>
</template>
<script setup>
  import FormAutocompleteEditVue from "./FormAutocompleteEdit.vue";
  import FormButtonEdit from "./FormButtonEdit.vue";
  import FormCheckboxEdit from "./FormCheckboxEdit.vue";
  import FormDateInputEdit from "./FormDateInputEdit.vue";
  import FormFileUploadEdit from "./FormFileUploadEdit.vue";
  import FormHeaderEdit from "./FormHeaderEdit.vue";
  import FormHiddenInputEdit from "./FormHiddenInputEdit.vue";
  import FormNumberInputEdit from "./FormNumberInputEdit.vue";
  import FormParagraphEdit from "./FormParagraphEdit.vue";
  import FormRadioGroupEdit from "./FormRadioGroupEdit.vue";
  import FormSelectInputEdit from "./FormSelectInputEdit.vue";
  import FormTextAreaEdit from "./FormTextAreaEdit.vue";
  import FormTextFieldEdit from "./FormTextFieldEdit.vue";

  import { ref } from "vue";
  const emit = defineEmits(["updateComponent"]);
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  });

  const isRequired = ref(props.data?.required);
  const label = ref(props.data?.label);
  const helpText = ref(props.data?.description);
  const placeholder = ref(props.data?.placeholder);
  const className = ref(props.data?.className);
  const name = ref(props.data?.name);
  const access = ref(props.data?.access);
  const isAdmin = ref(props.data?.role);
  const inline = ref(props.data?.inline);
  const other = ref(props.data?.other);
  const maxLength = ref(props.data?.maxLength);

  function changeData(property, value) {
        emit("updateComponent", property, props.index, value);
  }

</script>
