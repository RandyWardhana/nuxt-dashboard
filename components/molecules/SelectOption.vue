<template>
  <select :class="classname" :value="value" @input="onSelect">
    <option class="hidden" value="" disabled selected>{{ placeholder }}</option>
    <option
      v-for="option in options"
      :key="option.label"
      :value="option.value"
      :class="optionClass"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Select Option',
    },
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    classname: {
      type: String,
      default: '',
    },
    optionClass: {
      type: String,
      default: '',
    },
    onSelect: {
      type: Function,
      default: () => {},
    },
  },
}
</script>