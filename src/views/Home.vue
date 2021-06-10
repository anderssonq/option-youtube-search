<template>
  <div
    :class="
      `home_container ${videos.length > 0 &&
        !isLoading &&
        'mt-6'} d-flex justify-center align-center flex-wrap`
    "
  >
    <search-form />
    <list-videos v-if="videos.length > 0 && !isLoading" />
    <circular-loader v-if="isLoading" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchForm from "../components/SearchForm";
import ListVideos from "../components/ListVideos.vue";
import CircularLoader from "../components/CircularLoader.vue";
export default {
  name: "Home",
  components: {
    SearchForm,
    ListVideos,
    CircularLoader,
  },
  computed: {
    ...mapGetters(["isLoading", "videos"]),
  },
};
</script>

<style>
.home_container {
  width: 100%;
  height: 100%;
}
</style>
