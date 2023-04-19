import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchDetailAsk,
} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        console.log(response.data);
        context.commit("SET_NEWS", response.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASKS(context) {
    fetchAskList()
      .then((response) => {
        console.log(response.data);
        context.commit("SET_ASKS", response.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        console.log(data);
        commit("SET_JOBS", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_USER_INFO({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        console.log(data);
        commit("SET_USER_INFO", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_DETAIL_ASK({ commit }, askId) {
    fetchDetailAsk(askId)
      .then(({ data }) => {
        console.log(data);
        commit("SET_DETAIL_ASK", data);
      })
      .catch((error) => console.log(error));
  },
};
