import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";

// components to test
import SearchForm from "../../src/components/SearchForm.vue";
import CardVideo from "../../src/components/CardVideo.vue";
import HeaderApp from "../../src/components/HeaderApp.vue";

// settings
Vue.use(Vuex);
Vue.use(Vuetify);

describe("Frontend unit testing", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Header component - span author should be Andersson Quintero", async () => {
    const expected = 'by Andersson Quintero'

    const wrapper = mount(HeaderApp, {
      localVue,
      vuetify,
    });

    const spanText = wrapper.find("span.mr-2")
    expect(spanText.text()).toEqual(expected)
  });

  it("Card Video component - check if props is showing well", async () => {
    const expected = {
      title: 'Option Cl',
      description: 'Postulacion software developer',
      url: 'https://www.option.cl/'
    }

    const wrapper = mount(CardVideo, {
      localVue,
      vuetify,
      propsData: {
        ...expected
      }
    });
    
    const pTitle = wrapper.find("p#title_card")
    const divDescription = wrapper.find("#description_card")
    const imgCard = wrapper.find("#img_card")

    expect(pTitle.html()).toContain(expected.title)
    expect(imgCard.props('src')).toEqual(expected.url)
    expect(divDescription.html()).toContain(expected.description)
  });

  it("SearchForm component - is SearchForm a Vue instance", async () => {
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

});
