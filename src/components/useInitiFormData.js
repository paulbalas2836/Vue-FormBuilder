import { ref } from "vue";

const autocompleteTagName = ref(
  parseInt(localStorage.getItem("autocompleteTagName")) || 0
);
const buttonTagName = ref(parseInt(localStorage.getItem("buttonTagName")) || 0);
const checkboxTagName = ref(
  parseInt(localStorage.getItem("checkboxTagName")) || 0
);
const dateFieldTagName = ref(
  parseInt(localStorage.getItem("dateFieldTagName")) || 0
);
const fileUplodTagName = ref(
  parseInt(localStorage.getItem("fileUplodTagName")) || 0
);
const hiddenInputTagName = ref(
  parseInt(localStorage.getItem("hiddenInputTagName")) || 0
);
const numberTagName = ref(parseInt(localStorage.getItem("numberTagName")) || 0);
const radioTagName = ref(parseInt(localStorage.getItem("radioTagName")) || 0);
const selectTagName = ref(parseInt(localStorage.getItem("selectTagName")) || 0);
const textFieldTagName = ref(
  parseInt(localStorage.getItem("textFieldTagName")) || 0
);
const textAreaTagName = ref(
  parseInt(localStorage.getItem("textAreaTagName")) || 0
);
const initAutocompleteData = {
  type: "autocomplete",
  required: false,
  label: "Autocomplete",
  description: "",
  placeholder: "",
  className: "form-control",
  name: "autocomplete-" + autocompleteTagName.value,
  access: false,
  requireValidOption: false,
  role: "",
  values: [
    { label: "Option 1", value: "option-1", selected: true },
    { label: "Option 2", value: "option-2", selected: false },
    { label: "Option 3", value: "option-3", selected: false },
  ],
};

const initButtonData = {
  type: "button",
  label: "Button",
  subtype: "button",
  className: "btn-default btn",
  name: "button-" + buttonTagName.value,
  values: "",
  access: false,
  role: "",
  style: "default",
};

const initCheckboxData = {
  type: "checkbox-group",
  required: false,
  label: "Checkbox Group",
  description: "",
  toggle: false,
  inline: false,
  className: "",
  name: 'checkbox-group-'+checkboxTagName.value,
  access: false,
  other: false,
  role: "",
  values: [
    {
      label: "Option 1",
      value: "option-1",
      selected: true,
    },
  ],
};

const initDateFieldData = {
  type: "date",
  required: false,
  label: "Date Field",
  description: "",
  placeholder: "",
  className: "form-control",
  name: "date-field-" + dateFieldTagName.value,
  access: false,
  values: "",
  role: "",
};

const initFileUploadData = {
  type: "file",
  required: false,
  label: "File Upload",
  description: "",
  placeholder: "",
  className: "form-control",
  name: "file-" + fileUplodTagName.value,
  access: false,
  subtype: "file",
  multiple: false,
  role: "",
};

const initHeaderData = {
  type: "header",
  subtype: "h1",
  label: "Header",
  className: "",
  access: false,
  role: "",
};

const initHiddenInputData = {
  type: "hidden",
  name: "hidden-" + hiddenInputTagName.value,
  values: "",
  access: false,
  role: "",
};

const initNumberData = {
  type: "number",
  required: false,
  label: "Number",
  description: "",
  placeholder: "",
  className: "form-control",
  name: "number-" + numberTagName.value,
  access: false,
  values: "",
  min: "",
  max: "",
  step: "",
  role: "",
};

const initParagraphData = {
  type: "paragraph",
  subtype: "p",
  label: "Paragraph",
  className: "",
  access: false,
  role: "",
};

const initRadioGroupData = {
  type: "radio-group",
  required: false,
  label: "Radio Group",
  description: "",
  inline: false,
  className: "",
  name: "radio-group-" + radioTagName.value,
  access: false,
  other: false,
  role: "",
  values: [
    {
      label: "Option 1",
      value: "option-1",
      selected: false,
    },
    {
      label: "Option 2",
      value: "option-2",
      selected: false,
    },
    {
      label: "Option 3",
      value: "option-3",
      selected: false,
    },
  ],
};

const initSelectData = {
  type: "select",
  required: false,
  label: "Select",
  description: "",
  placeholder: "",
  className: "form-control",
  name: "select-" + selectTagName.value,
  access: false,
  multiple: false,
  role: "",
  values: [
    {
      label: "Option 1",
      value: "option-1",
      selected: false,
    },
    {
      label: "Option 2",
      value: "option-2",
      selected: false,
    },
    {
      label: "Option 3",
      value: "option-3",
      selected: true,
    },
  ],
};

const initTextFieldData = {
  type: "text",
  required: false,
  label: "Text Field",
  description: "",
  placeholder: "",
  className: "form-control",
  name: "text-field-" + textFieldTagName.value,
  access: false,
  values: "",
  subtype: "text",
  maxLength: "",
  role: "",
};

const initTextAreaData = {
  type: "textarea",
  required: false,
  label: "Text Area",
  description: "",
  placeholder: "",
  className: "form-control",
  name: "text-area-" + textAreaTagName.value,
  access: false,
  values: "",
  subtype: "textarea",
  maxLength: "",
  rows: "",
  role: "",
};

export const useInitiFormData = {
  initTextAreaData,
  initTextFieldData,
  initSelectData,
  initRadioGroupData,
  initParagraphData,
  initNumberData,
  initHiddenInputData,
  initHeaderData,
  initFileUploadData,
  initDateFieldData,
  initAutocompleteData,
  initButtonData,
  initCheckboxData,
};

export const useTagNames = {
  autocompleteTagName,
  buttonTagName,
  checkboxTagName,
  dateFieldTagName,
  fileUplodTagName,
  hiddenInputTagName,
  numberTagName,
  radioTagName,
  selectTagName,
  textFieldTagName,
  textAreaTagName,
};
