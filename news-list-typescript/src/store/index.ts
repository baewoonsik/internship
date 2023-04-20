import { defineStore } from "pinia";
import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchDetailAsk,
} from "../api/index";

interface State {
  news: Array<any>; // 뉴스 리스트
  asks: Array<any>; // 질문 리스트
  jobs: Array<any>; // 구인 정보 리스트
  userInfo: any; // 사용자 정보
  askDetail: any; // 질문 상세 정보
}

export const useStore = defineStore({
  id: "store",
  state: (): State => ({
    news: [],
    asks: [],
    jobs: [],
    userInfo: {},
    askDetail: {},
  }),
  actions: {
    async fetchNews(): Promise<void> {
      // 뉴스 리스트 가져오기
      try {
        // ES6의 구조 분해 할당 문법을 사용하여 리턴되는 response 객체에서 data를 추출
        const { data } = await fetchNewsList();
        this.news = data;
        console.log(this.news);
      } catch (error) {
        console.log("Error in fetchNews:", error);
      }
    },
    async fetchAsks(): Promise<void> {
      // 질문 리스트 가져오기
      try {
        const { data } = await fetchAskList();
        this.asks = data;
        console.log(this.asks);
      } catch (error) {
        console.log("Error in fetchAsks:", error);
      }
    },
    async fetchJobs(): Promise<void> {
      // 구인 정보 리스트 가져오기
      try {
        const { data } = await fetchJobsList();
        this.jobs = data;
        console.log(this.jobs);
      } catch (error) {
        console.log("Error in fetchJobs:", error);
      }
    },
    async fetchUserInfo(name: string): Promise<void> {
      // 사용자 정보 가져오기
      try {
        const { data } = await fetchUserInfo(name);
        this.userInfo = data;
        console.log(this.userInfo);
      } catch (error) {
        console.log(`Error in fetchUserInfo for ${name}:`, error);
      }
    },
    async fetchDetailAsk(askId: string): Promise<void> {
      // 질문 상세 정보 가져오기
      try {
        const { data } = await fetchDetailAsk(askId);
        this.askDetail = data;
        console.log(this.askDetail);
      } catch (error) {
        console.log(`Error in fetchDetailAsk for ${askId}:`, error);
      }
    },
  },
});
