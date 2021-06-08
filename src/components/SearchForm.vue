<template>
  <v-card class="mx-auto pa-10 elevation-8 ml-12 mr-12">
    <v-form ref="form" lazy-validation>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center font-weight-light">
            Type whatever you want, we are going to find your video!
          </h1>
        </v-col>
        <v-col cols="8">
          <input-your-search
            :label="`What videos are you looking for?`"
            :required="true"
            v-model="textSearch"
          />
        </v-col>
        <v-col cols="4">
          <select-your-search
            v-model="maxResults"
            :label="`How many results you want to see?`"
            :items="optionsMaxResults"
          />
        </v-col>
        <v-col cols="12" class="d-flex flex-row-reverse">
          <btn-your-search
            :label="`Search video!`"
            @onHandlerFunction="onSubmitSearch()"
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
export default {
  name: "SearchForm",
  components: {
    InputYourSearch,
    SelectYourSearch,
    BtnYourSearch,
  },
  data: () => ({
    textSearch: "",
    maxResults: 5,
    optionsMaxResults: [
      { text: "5 Results", value: 5 },
      { text: "10 Results", value: 10 },
      { text: "15 Results", value: 15 },
      { text: "All", value: true },
    ],
  }),
  methods: {
    onSubmitSearch: function() {
      if (this.$refs.form.validate()) {
        console.log(this.textSearch, this.maxResults);
      }
    },
  },
};
</script>
