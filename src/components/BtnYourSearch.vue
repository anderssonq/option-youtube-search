<template>
  <v-btn
    :color="color"
    elevation="2"
    large
    outlined
    class="ml-2 mr-2"
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
      default: () => false,
    },
    color: {
        type: String,
        default: () =>(`primary`)
    }
  },
};
</script>
