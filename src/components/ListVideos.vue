<template>
  <div class="video_list_container ma-4 d-flex flex-wrap justify-center">
    <card-video
      v-for="(video, index) in videos"
      :key="index"
      :url="video.thumbnails.url"
      :title="video.title"
      :description="video.description"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardVideo from "./CardVideo.vue";

export default {
  name: "ListVideos",
  components: {
    CardVideo,
  },
  computed: {
    ...mapGetters(["videos"]),
  },
};
</script>
