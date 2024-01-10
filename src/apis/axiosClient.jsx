import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://18.142.251.214:443",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
  timeout: 10000,
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
