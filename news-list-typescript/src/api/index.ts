import axios from "axios"; // axios 모듈을 import 합니다.

const config = {
  // baseURL을 설정합니다.
  baseURL: "https://api.hnpwa.com/v0/",
};

const fetchNewsList = () => {
  // 뉴스 리스트를 가져오는 함수입니다.
  return axios.get(`${config.baseURL}news/1.json`); // axios를 이용해 baseURL과 함께 뉴스 리스트를 가져옵니다.
};

const fetchAskList = () => {
  // 질문 리스트를 가져오는 함수입니다.
  return axios.get(`${config.baseURL}ask/1.json`); // axios를 이용해 baseURL과 함께 질문 리스트를 가져옵니다.
};

const fetchJobsList = () => {
  // 구인 정보 리스트를 가져오는 함수입니다.
  return axios.get(`${config.baseURL}jobs/1.json`); // axios를 이용해 baseURL과 함께 구인 정보 리스트를 가져옵니다.
};

const fetchUserInfo = (userName: string) => {
  // 유저 정보를 가져오는 함수입니다.
  return axios.get(`${config.baseURL}user/${userName}.json`); // axios를 이용해 baseURL과 함께 유저 정보를 가져옵니다.
};

const fetchDetailAsk = (askId: string) => {
  // 질문 상세 정보를 가져오는 함수입니다.
  return axios.get(`${config.baseURL}item/${askId}.json`); // axios를 이용해 baseURL과 함께 질문 상세 정보를 가져옵니다.
};

export {
  // 함수들을 모듈로 export 합니다.
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchDetailAsk,
};
