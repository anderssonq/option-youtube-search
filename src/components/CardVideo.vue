<template>
  <v-card class="ma-12 elevation-8" max-width="274">
    <v-img id="img_card" height="250" :src="url"></v-img>
    <v-card-title><p id="title_card">{{ title }}</p></v-card-title>
    <v-card-text>
      <div id="description_card">
        {{ description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardVideo",
  props: {
    url: {
      type: String,
      default: () => "",
    },
    title: {
      type: String,
      default: () => "",
    },
    description: {
      type: String,
      default: () => "",
    },
  },
};
</script>
