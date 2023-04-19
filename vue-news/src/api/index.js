import axios from "axios";

const config = {
  baseURL: "https://api.hnpwa.com/v0/",
};

const fetchNewsList = async () => {
  return await axios.get(`${config.baseURL}news/1.json`);
};

const fetchAskList = async () => {
  return await axios.get(`${config.baseURL}ask/1.json`);
};

const fetchJobsList = async () => {
  return await axios.get(`${config.baseURL}jobs/1.json`);
};

const fetchUserInfo = async (userName) => {
  return await axios.get(`${config.baseURL}user/${userName}.json`);
};

const fetchDetailAsk = async (askId) => {
  return await axios.get(`${config.baseURL}item/${askId}.json`);
};

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchDetailAsk,
};
