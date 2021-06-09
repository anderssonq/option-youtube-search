import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import SearchForm from "../../src/components/SearchForm.vue";
import HeaderApp from "../../src/components/HeaderApp.vue";
import Vuetify from "vuetify";

Vue.use(Vuex);
Vue.use(Vuetify);

describe("Frontend unit testing", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("is SearchForm a Vue instance", async () => {
    const store = new Vuex.Store({
      modules: {
        module: {
          getters: { isLoading: () => jest.fn() },
        },
      },
    });

    const wrapper = mount(SearchForm, {
      localVue,
      vuetify,
      mocks: {
        $vuetify: { breakpoint: { mobile: false } },
      },
      store,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("Header component span author", async () => {
    const wrapper = mount(HeaderApp, {
      localVue,
      vuetify,
    });

    const spanText = wrapper.find("span.mr-2")
    expect(spanText.text()).toEqual('by Andersson Quintero')
  });
});
