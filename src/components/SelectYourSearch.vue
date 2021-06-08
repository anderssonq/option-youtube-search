<template>
  <v-select
    v-model="valueInside"
    :value="value"
    :items="items"
    :label="label"
    :required="required"
    :rules="required ? [(v) => !!v || `${label} is required.`] : []"
    item-text="text"
    item-value="value"
    dense
    color="primary"
    @input="$emit('input', valueInside)"
  />
</template>
<script>
export default {
  name: "SelectYourSearch",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: () => null,
    },
    value: {
      type: [String, Object, Number],
      default: () => ({}),
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
