import { api } from "./../../api";
import router from "../../router";

const state = {
  loading: false,
  data: null,
  err: null
};

const mutations = {
  storeStationRequest(state) {
    state.loading = true;
    state.data = null;
    state.err = null;
  },
  storeStationSuccess(state, payload) {
    state.loading = false;
    state.data = payload;
    state.err = null;
  },
  storeStationFailed(state, payload) {
    state.loading = false;
    state.data = null;
    state.err = payload;
  }
};

const actions = {
  fetchListStations({ commit }) {
    commit("storeStationRequest");
    api
      .get("/stations")
      .then(result => {
        commit("storeStationSuccess", result.data);
      })
      .catch(err => {
        commit("storeStationFailed", err);
      });
  },
  fetchDetailStation({ commit }, id) {
    commit("storeStationRequest");
    api
      .get(`/stations/${id}`)
      .then(result => {
        commit("storeStationSuccess", result.data);
      })
      .catch(err => {
        commit("storeStationFailed", err);
      });
  },
  fetchDeleteStation({ commit, dispatch }, id) {
    commit("storeStationRequest");
    api
      .delete(`/stations/${id}`)
      .then(() => {
        dispatch("fetchListStations");
      })
      .catch(err => {
        commit("storeStationFailed", err);
      });
  },
  fetchCreateStation({ commit }, station) {
    commit("storeStationRequest");
    api
      .post('/stations', station)
      .then((result) => {
        commit("storeStationSuccess", result.data);
        router.replace("/admin/stations");
      })
      .catch(err => {
        commit("storeStationFailed", err);
      })

  },
  fetchEditStation({ commit }, data) {
    commit("storeStationRequest");
    api
      .put(`/stations/${data._id}`, data.station)
      .then((result) => {
        commit("storeStationSuccess", result.data);
        router.replace("/admin/stations");
      })
      .catch(err => {
        commit("storeStationFailed", err);
      })
  }
};

export default { state, mutations, actions };
