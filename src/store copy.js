import Vue from "vue";
import Vuex from "vuex";
import AppServices from "@/services/AppServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    query: "",
    type: "",
    page: null,
    results: [],
    totalResults: null,
    totalPages: null,
    baseUrl: "",
    itemInfo: {},
    topMovie: [],
    topTv: []
  },
  getters: {
    imgPath: state => `${state.baseUrl}w370_and_h556_bestv2`,
    backgroundPath: state => `${state.baseUrl}w780`
  },

  mutations: {
    LOAD_CONF: (state, baseUrl) => {
      state.baseUrl = baseUrl;
    },
    RESET_RESULTS: state => {
      state.results = [];
      state.totalResults = null;
      state.totalPages = null;
    },
    LOAD_RESULTS: (state, payload) => {
      state.query = payload.query;
      state.type = payload.type;
      state.page = payload.page;
      state.totalResults = payload.data.total_results;
      state.totalPages = payload.data.total_pages;
      Vue.set(state, "results", state.results.concat(payload.data.results));
    },
    RESET_ITEM: state => {
      Vue.set(state, "itemInfo", {});
    },
    LOAD_ITEM_MOVIE: (state, { info, cast }) => {
      const itemInfo = {
        title: info.title,
        year: info.release_date,
        overview: info.overview,
        homepage: info.homepage,
        genres: info.genres,
        poster_path: info.poster_path,
        backdrop_path: info.backdrop_path,
        vote_average: info.vote_average,
        cast: cast
          .map(item => item.name)
          .slice(0, 6)
          .join(", ")
      };
      Vue.set(state, "itemInfo", itemInfo);
    },
    LOAD_ITEM_TV: (state, { info, cast }) => {
      const itemInfo = {
        title: info.name,
        year: info.first_air_date,
        overview: info.overview,
        homepage: info.homepage,
        genres: info.genres,
        poster_path: info.poster_path,
        backdrop_path: info.backdrop_path,
        vote_average: info.vote_average,
        cast: cast
          .map(item => item.name)
          .slice(0, 6)
          .join(", ")
      };
      Vue.set(state, "itemInfo", itemInfo);
    },
    LOAD_TOP_MOVIE: (state, payload) => {
      Vue.set(state, "topMovie", payload);
    },
    LOAD_TOP_TV: (state, payload) => {
      Vue.set(state, "topTv", payload);
    }
  },

  actions: {
    getInitialData: async ({ commit }) => {
      const response = await AppServices.getConfiguration();
      commit("LOAD_CONF", response.data.images.secure_base_url);
    },
    getTops: async ({ commit }) => {
      const [responseMovie, responseTv] = await Promise.all([
        AppServices.getTops("movie"),
        AppServices.getTops("tv")
      ]);

      commit("LOAD_TOP_MOVIE", {
        data: responseMovie.data
      });
      commit("LOAD_TOP_TV", {
        data: responseTv.data
      });
    },
    getResults: async ({ commit, state }, payload) => {
      // Check with previous search. Isf something changes, do search
      if (
        state.query != payload.query ||
        state.type != payload.type ||
        state.page != payload.page
      ) {
        if (payload.action == "SEARCH") commit("RESET_RESULTS");

        const response = await AppServices.search(
          payload.query,
          payload.page,
          payload.type
        );
        commit("LOAD_RESULTS", {
          query: payload.query,
          type: payload.type,
          page: payload.page,
          data: response.data
        });
      }
    },
    getItem: async ({ commit, state }, id) => {
      commit("RESET_ITEM");
      const [response, responseCast] = await Promise.all([
        AppServices.getItemInfo(id, state.type),
        AppServices.getCast(id, state.type)
      ]);

      if (state.type == "movie") {
        commit("LOAD_ITEM_MOVIE", {
          info: response.data,
          cast: responseCast.data.cast
        });
      } else {
        // tv
        commit("LOAD_ITEM_TV", {
          info: response.data,
          cast: responseCast.data.cast
        });
      }
    }
  }
});
