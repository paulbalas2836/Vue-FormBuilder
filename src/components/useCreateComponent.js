import { markRaw } from "vue";
import { useInitiFormData, useTagNames } from "./useInitiFormData.js";
import FormButton from "./formComponents/FormButton.vue";
import FormAutocomplete from "./formComponents/FormAutocomplete.vue";
import FormCheckbox from "./formComponents/FormCheckbox.vue";
import FormDateInput from "./formComponents/FormDateInput.vue";
import FormFileUpload from "./formComponents/FormFileUpload.vue";
import FormHeader from "./formComponents/FormHeader.vue";
import FormHiddenInput from "./formComponents/FormHiddenInput.vue";
import FormNumberInput from "./formComponents/FormNumberInput.vue";
import FormParagraph from "./formComponents/FormParagraph.vue";
import FormRadioGroup from "./formComponents/FormRadioGroup.vue";
import FormSelectInput from "./formComponents/FormSelectInput.vue";
import FormTextArea from "./formComponents/FormTextArea.vue";
import FormTextField from "./formComponents/FormTextField.vue";

export function useCreateComponent(item) {
  switch (item) {
    case "Autocomplete": {
      localStorage.setItem(
        "autocompleteTagName",
        useTagNames.autocompleteTagName.value + 1
      );
      return {
        item: markRaw(FormAutocomplete),
        data: JSON.parse(JSON.stringify(useInitiFormData.initAutocompleteData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Button": {
      localStorage.setItem(
        "buttonTagName",
        useTagNames.buttonTagName.value + 1
      );
      return {
        item: markRaw(FormButton),
        data: JSON.parse(JSON.stringify(useInitiFormData.initButtonData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Checkbox Group": {
      localStorage.setItem(
        "checkboxTagName",
        useTagNames.checkboxTagName.value + 1
      );
      return {
        item: markRaw(FormCheckbox),
        data: JSON.parse(JSON.stringify(useInitiFormData.initCheckboxData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Date Field": {
      localStorage.setItem(
        "dateFieldTagName",
        useTagNames.dateFieldTagName.value + 1
      );
      return {
        item: markRaw(FormDateInput),
        data: JSON.parse(JSON.stringify(useInitiFormData.initDateFieldData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "File Upload": {
      localStorage.setItem(
        "fileUplodTagName",
        useTagNames.fileUplodTagName.value + 1
      );
      return {
        item: markRaw(FormFileUpload),
        data: JSON.parse(JSON.stringify(useInitiFormData.initFileUploadData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Header": {
      return {
        item: markRaw(FormHeader),
        data: JSON.parse(JSON.stringify(useInitiFormData.initHeaderData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Hidden Input": {
      localStorage.setItem(
        "hiddenInputTagName",
        useTagNames.hiddenInputTagName.value + 1
      );
      return {
        item: markRaw(FormHiddenInput),
        data: JSON.parse(JSON.stringify(useInitiFormData.initHiddenInputData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Number": {
      localStorage.setItem(
        "numberTagName",
        useTagNames.numberTagName.value + 1
      );
      return {
        item: markRaw(FormNumberInput),
        data: JSON.parse(JSON.stringify(useInitiFormData.initNumberData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Paragraph": {
      return {
        item: markRaw(FormParagraph),
        data: JSON.parse(JSON.stringify(useInitiFormData.initParagraphData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Radio Group": {
      localStorage.setItem("radioTagName", useTagNames.radioTagName.value + 1);
      return {
        item: markRaw(FormRadioGroup),
        data: JSON.parse(JSON.stringify(useInitiFormData.initRadioGroupData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Select": {
      localStorage.setItem(
        "selectTagName",
        useTagNames.selectTagName.value + 1
      );
      return {
        item: markRaw(FormSelectInput),
        data: JSON.parse(JSON.stringify(useInitiFormData.initSelectData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Text Field": {
      localStorage.setItem(
        "textFieldTagName",
        useTagNames.textFieldTagName.value + 1
      );
      return {
        item: markRaw(FormTextField),
        data: JSON.parse(JSON.stringify(useInitiFormData.initTextFieldData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
    case "Text Area": {
      localStorage.setItem(
        "textAreaTagName",
        useTagNames.textAreaTagName.value + 1
      );
      return {
        item: markRaw(FormTextArea),
        data: JSON.parse(JSON.stringify(useInitiFormData.initTextAreaData)),
        showEditZone: false,
        id: Date.now(),
      };
    }
  }
}
