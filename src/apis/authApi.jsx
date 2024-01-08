import axiosClient from "./axiosClient";

const authApi = {
  login: (params) => {
    const url = "/login";
    return axiosClient.post(url, params);
  },
  register: (params, role) => {
    const url = `/${role}/register`;
    return axiosClient.post(url, params);
  },
  refreshToken: (params) => {
    const url = "/auth/refresh-token";
    return axiosClient.post(url, params);
  },
};

export default authApi;
