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
    /**
     * If users did a search before, app will save it at localstore, with this action we are going take them back to the session.
     */
    const indexTime = setTimeout(() => {
      this.restoreData();
      clearTimeout(indexTime);
    }, 1000);
  },
  methods: {
    ...mapActions(["restoreData"]),
  },
};
</script>
