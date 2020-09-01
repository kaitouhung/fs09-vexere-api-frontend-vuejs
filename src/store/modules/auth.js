import { api } from "./../../api";
import jwtDecode from "jwt-decode";
import router from "./../../router";
import setHeader from "./../../utils/setHeader";

const state = {
  loading: false,
  token: null,
  err: null
};

const mutations = {
  clearAuthData(state) {
    state.loading = false;
    state.token = null;
    state.err = null;
  },
  storeLoginRequest(state) {
    state.loading = true;
    state.token = null;
    state.err = null;
  },
  storeLoginSuccess(state, payload) {
    state.loading = false;
    state.token = payload;
    state.err = null;
  },
  storeLoginFaild(state, payload) {
    state.loading = false;
    state.token = null;
    state.err = payload;
  }
};

const actions = {
  setLogoutTimer({ dispatch },exp) {
    setTimeout(() => {
      dispatch("logout");
    }, exp);
  },
  logout({ commit }) {
    commit("clearAuthData");
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    router.replace("/auth");
  },
  login({ commit,dispatch }, authUser) {
    commit("storeLoginRequest");
    api
      .post("/users/login", authUser)
      .then(result => {
        const decode = jwtDecode(result.data.token);
        if (decode.userType === "client") {
          return Promise.reject({
            response: { data: { message: "Ban k co quyen truy cap" } }
          });
        }
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("exp", decode.exp);
        setHeader(result.data.token);

        commit("storeLoginSuccess", result.data.token);
        dispatch('setLogoutTimer',decode.exp);
        router.replace("/admin/dashboard");
      })
      .catch(err => {
        commit("storeLoginFaild", err);
      });
  },
  tryAutoLogin({ commit, dispatch }) {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const exp = localStorage.getItem("exp");
    const date = new Date().getTime() / 1000;
    if (date > exp) {
      dispatch("logout");
    }
    setHeader(token);
    commit("storeLoginSuccess", token);
  }
};

export default { state, mutations, actions };
