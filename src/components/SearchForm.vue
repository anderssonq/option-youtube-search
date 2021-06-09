<template>
  <v-card class="mx-auto pa-10 elevation-4 ml-12 mr-12 animate__animated animate__backInUp">
    <v-form ref="form" lazy-validation>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center font-weight-light">
            Type whatever you want, <strong>we are going to find your video!</strong>
          </h1>
        </v-col>
        <v-col cols="12" md="8">
          <input-your-search
            :label="`What videos are you looking for?`"
            :required="true"
            v-model="textSearch"
          />
        </v-col>
        <v-col cols="12" md="4">
          <select-your-search
            v-model="maxResults"
            :required="true"
            :label="`How many results do you want to see?`"
            :items="optionsMaxResults"
          />
        </v-col>
        <v-col
          cols="12"
          class="d-flex justify-space-around flex-wrap btn_control"
        >
          <btn-your-search
            :label="`Search video!`"
            :block="$vuetify.breakpoint.mobile"
            :disabled="isLoading"
            @onHandlerFunction="onSubmitSearch()"
          />
          <btn-your-search
            :label="`Start again (Clear data)`"
            :block="$vuetify.breakpoint.mobile"
            :color="`secondary`"
            @onHandlerFunction="onRestart()"
          />
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import InputYourSearch from "../components/InputYourSearch.vue";
import SelectYourSearch from "../components/SelectYourSearch.vue";
import BtnYourSearch from "../components/BtnYourSearch.vue";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchForm",
  components: {
    InputYourSearch,
    SelectYourSearch,
    BtnYourSearch,
  },
  computed: {
    ...mapGetters(['isLoading']),
    axiosParams() {
      const params = new URLSearchParams();
      params.append("searchString", this.textSearch);
      params.append("maxResults", this.maxResults);
      return params;
    },
  },
  data: () => ({
    textSearch: "",
    maxResults: 5,
    optionsMaxResults: [
      { text: "5 Results", value: 5 },
      { text: "10 Results", value: 10 },
      { text: "15 Results", value: 15 },
      { text: "I don't know", value: 99999 },
    ],
  }),
  methods: {
    ...mapActions([
      "setVideos",
      "turnOnLoading",
      "turnOffLoading",
      "clearData",
    ]),
    onSubmitSearch: async function() {
      if (this.$refs.form.validate()) {
        this.turnOnLoading();
        const response = await axios.get(
          `${process.env.VUE_APP_API_BACKEND_URL}/youtube-search`,
          {
            params: this.axiosParams,
          }
        );

        const { data, status } = response.data;
        if (status === 200) {
          this.setVideos(data);
        } else {
          alert("Something is wrong!!");
        }
        this.turnOffLoading();
      }
    },
    onRestart: function() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.clearData();
    },
  },
};
</script>
