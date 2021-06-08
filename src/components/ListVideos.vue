<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ListVideos",
  computed: {
    ...mapGetters(["videos"]),
  },
};
</script>
