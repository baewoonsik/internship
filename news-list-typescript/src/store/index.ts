import { defineStore } from "pinia";
import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchDetailAsk,
} from "../api/index";

export const useStore = defineStore("store", {
  state: () => ({
    news: [],
    asks: [],
    jobs: [],
    userInfo: {},
    askDetail: {},
  }),

  actions: {
    FETCH_NEWS() {
      // 뉴스 리스트를 가져오는 API 호출
      fetchNewsList()
        .then((response) => {
          //   console.log(response.data);
          // 뉴스 리스트를 store에 저장
          this.news = response.data;
          console.log(this.news);
        })
        .catch((error) => console.log(error));
    },
    FETCH_ASKS() {
      // 질문 리스트를 가져오는 API 호출
      fetchAskList()
        .then(({ data }) => {
          //   console.log(data);
          // 질문 리스트를 store에 저장
          this.asks = data;
          console.log(this.asks);
        })
        .catch((error) => console.log(error));
    },
    FETCH_JOBS() {
      // 구인 정보 리스트를 가져오는 API 호출
      fetchJobsList()
        .then(({ data }) => {
          // 구인 정보 리스트를 store에 저장
          this.jobs = data;
          console.log(this.jobs);
        })
        .catch((error) => console.log(error));
    },
    FETCH_USER_INFO(name: string) {
      // 사용자 정보를 가져오는 API 호출
      fetchUserInfo(name)
        .then(({ data }) => {
          console.log(data);
          // 사용자 정보를 store에 저장
          this.userInfo = data;
        })
        .catch((error) => console.log(error));
    },
    FETCH_DETAIL_ASK(askId: string) {
      // 질문 상세 정보를 가져오는 API 호출
      fetchDetailAsk(askId)
        .then(({ data }) => {
          console.log(data);
          // 질문 상세 정보를 store에 저장
          this.askDetail = data;
        })
        .catch((error) => console.log(error));
    },
  },
});
