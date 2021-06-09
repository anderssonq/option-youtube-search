<template>
  <div class="video_list_container ma-4 d-flex flex-wrap justify-center">
    <v-card
      class="ma-12 elevation-8"
      max-width="274"
      v-for="(video, index) in videos"
      :key="index"
    >
      <v-img height="250" :src="video.thumbnails.url"></v-img>

      <v-card-title>{{ video.title }}</v-card-title>

      <v-card-text>
        <div>
          {{ video.description }}
        </div>
      </v-card-text>
    </v-card>
  </div>
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
