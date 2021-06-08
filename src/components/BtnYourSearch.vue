<template>
  <v-btn
    color="primary"
    elevation="2"
    large
    outlined
    :disabled="disabled"
    @click="$emit('onHandlerFunction')"
  >
    {{ label }}</v-btn
  >
</template>

<script>
export default {
  name: "BtnYourSearch",
  props: {
    label: {
      type: String,
      default: () => `Click me!`,
    },
    disabled: {
      type: Boolean,
      default: () => (false),
    },
  },
};
</script>
