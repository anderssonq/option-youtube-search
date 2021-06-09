<template>
  <v-btn
    :color="color"
    elevation="2"
    large
    outlined
    class="ma-2"
    :disabled="disabled"
    :block="block"
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
    block: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: [Boolean, Function],
      default: () => false,
    },
    color: {
      type: String,
      default: () => `primary`,
    },
  },
};
</script>
