<template>
  <div class="edit-subsection">
    <div class="form-container" v-show="data.hasOwnProperty('subtype')">
      <label>Type</label>
      <select
        v-model="subtype"
        @input="(event) => $emit('changeData', 'subtype', event.target.value)"
        class="form-control type-text"
      >
        <option value="button">Button</option>
        <option value="submit">submit</option>
        <option value="reset">reset</option>
      </select>
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('style')">
      <label>Style</label>
      <div class="button-style">
        <button class="btn-default" @click="changeStyle('default')">
          Default
        </button>
        <button class="btn-danger" @click="changeStyle('danger')">
          Danger
        </button>
        <button class="btn-info" @click="changeStyle('info')">Info</button>
        <button class="btn-primary" @click="changeStyle('primary')">
          Primary
        </button>
        <button class="btn-success" @click="changeStyle('success')">
          Success
        </button>
        <button class="btn-warning" @click="changeStyle('warning')">
          Warning
        </button>
      </div>
    </div>

    <div class="form-container" v-show="data.hasOwnProperty('values')">
      <label>Value</label>
      <input
        type="text"
        v-model="value"
        @input="(event) => $emit('changeData', 'values', event.target.value)"
        placeholder="Value"
        class="form-control type-text"
      />
    </div>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  const emit = defineEmits(["changeData"]);
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
  const value = ref(props.data?.value);
  const style = ref(props.data?.style);
  const subtype = ref(props.data?.subtype);
  const className = ref(props.data?.className);

  function changeStyle(value) {
    // if (className.value.indexOf(`btn`) === -1) className.value += `btn`;
    // if (className.value.indexOf(`btn-`) === -1) {
    //   className.value += `btn-${value}`;
    //   return;
    // }

    // console.log(className.value);

    emit("changeData", "style", value);
  }
</script>
