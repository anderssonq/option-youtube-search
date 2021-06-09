<template>
  <v-app>
    <header-app />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    HeaderApp,
  },
  mounted() {
    setTimeout(() => {
      this.restoreData();
    }, 2000);
  },
  methods: {
    ...mapActions(["restoreData"]),
  },
};
</script>
