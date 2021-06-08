import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initialState = {
  videos: [
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/DRPtOSJCIbc/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title: "Top 6 Trading Job Interview Questions 🙋",
      description: "Sales & Trading Interview Questions | Ho...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/YerFp7SPOE8/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title:
        "APTITUDE TEST Questions and ANSWERS! (How To Pass a JOB Aptitude Test in 2021!)",
      description: "WHAT IS AN APTITUDE TEST? An aptitude te...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/J7ENEuqXDwY/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title: "How to Shoot an Interview | Job Shadow",
      description: "Where to buy the equipment I mentioned i...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/KhCt0Rjejbw/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title:
        "Skill Assessment Tests - 5 Steps to Make them EASY (Vervoe, Hackerrank, Pymetrics)",
      description: "Today you're going to learn 5 of my favo...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/a-v32egDkCM/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title: "IELTS Speaking Interview - Practice for a Score 7",
      description: "IELTS speaking interview example high sc...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/Yo_6xhG-Bcc/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title: "IQ and Aptitude Test Questions, Answers and Explanations",
      description: "In this video, you will learn IQ and Apt...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/Ms4UuViEvqI/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title:
        "TEST LEAD Interview Questions and Answers | Test Lead Roles and Responsibilities",
      description: "Test Lead interview questions and answer...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/TUiQPTrbLZk/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title:
        "How to Pass Psychometric Test: Questions and Answers - Pass with 100 percent!",
      description: "An Psychometric Test is an pre-employmen...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/xz6mU0gOYWo/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title: "How To Beat Personality Tests In Job Interviews",
      description: "If you need more ideas for questions to ...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/umQKkcBPL08/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title: "TOP 7 Interview Questions and Answers (PASS GUARANTEED!)",
      description: "21 GREAT ANSWERS to Tough Interview Ques...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/Lg3dBv0JYwU/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title:
        "HOW TO PASS PERSONALITY TESTS! (Career Personality Test Questions &amp; Answers!)",
      description: "Do you have a personality test coming up...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/0S2HpE8zC_E/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title:
        "Excel Interview &amp; Assessment Test Questions - Types of Questions Being Asked",
      description: "Refresh your Excel skills and learn how ...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/3PCE7GalxJU/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title: "“WHAT TO SAY when you cannot ANSWER an INTERVIEW QUESTION!”",
      description: "- What do you do when you can't answer a...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/T1vTofBM_uA/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title:
        "MOCK INTERVIEW QUESTIONS &amp; ANSWERS! (10 Common Interview Questions and SAMPLE ANSWERS!)",
      description: "HERE'S WHAT IS COVERED DURING THIS MOCK ...",
    },
    {
      thumbnails: {
        url: "https://i.ytimg.com/vi/uCgcvgTR8Hs/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      title:
        "Most Brilliant IAS Interview Questions with Answers | Part - 32 | Braintastic Riddles",
      description: "Do you think you have it in you to answe...",
    },
  ],
  isLoading: false,
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    ["SET_VIDEOS"]: (state, payload) => {
      state.videos = payload;
    },
    ["SET_LOADING"]: (state, payload) => {
      state.isLoading = payload;
    },
  },
  actions: {
    async setVideos({ commit, state }, payload) {
      localStorage.setItem("videos_your_search", JSON.stringify(payload));
      commit("SET_VIDEOS", payload);
    },
    turnOnLoading({ commit, state }) {
      commit("SET_LOADING", true);
    },
    turnOffLoading({ commit, state }) {
      commit("SET_LOADING", true);
    },
  },
  getters: {
    videos: state => state.videos,
    isLoading: state => state.isLoading,
  },
});
