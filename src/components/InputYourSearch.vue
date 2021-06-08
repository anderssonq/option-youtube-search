<template>
  <v-text-field
    v-model="valueInside"
    :value="value"
    :label="label"
    :required="required"
    :rules="required ? [(v) => !!v || `${label} is required.`] : []"
    dense
    color="primary"
    @input="$emit('input', valueInside)"
  />
</template>
<script>
export default {
  name: "InputYourSearch",
  props: {
    label: {
      type: String,
      default: () => null,
    },
    value: {
      type: String,
      default: () => null,
    },
    required: {
      type: Boolean,
      default: () => false,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    valueInside: null,
  }),
  created() {
    this.valueInside = this.value;
  },
};
</script>
