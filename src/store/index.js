import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initialState = {
  videos: [],
  isLoading: false,
};

export default new Vuex.Store({
  state: { ...initialState },
  mutations: {
    ["CLEAR"]: (state, payload) => {
      state.videos = payload.videos;
      state.isLoading = payload.isLoading;
    },
    ["SET_VIDEOS"]: (state, payload) => {
      state.videos = payload;
    },
    ["SET_LOADING"]: (state, payload) => {
      state.isLoading = payload;
    },
  },
  actions: {
    async clearData({ commit, state }) {
      if (state.videos.length > 0) {
        localStorage.clear("videos_your_search");
        alert("Data cleared successfully!");
        commit("CLEAR", initialState);
      }
    },
    async restoreData({ commit }) {
      const oldData = JSON.parse(localStorage.getItem("videos_your_search"));
      try {
        if (oldData.length > 0) {
          commit("SET_VIDEOS", oldData);
          alert("Data loaded successfully!");
        }
      } catch (error) {}
    },
    async setVideos({ commit }, payload) {
      localStorage.setItem("videos_your_search", JSON.stringify(payload));
      commit("SET_VIDEOS", payload);
    },
    turnOnLoading({ commit }) {
      commit("SET_LOADING", true);
    },
    turnOffLoading({ commit }) {
      commit("SET_LOADING", false);
    },
  },
  getters: {
    videos: (state) => state.videos,
    isLoading: (state) => state.isLoading,
  },
});
