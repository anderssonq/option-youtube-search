<template>
  <v-app>
    <header-app />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
export default {
  name: 'App',
  components: {
    HeaderApp
  },
  data: () => ({
    //
  }),
};
</script>
