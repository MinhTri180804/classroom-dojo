import axiosClient from "./axiosClient";

const classesApi = {
  getClasses: (role) => {
    const url = `/${role}/classes`;
    return axiosClient.get(url, {
      headers: {
        "Access-token": localStorage.getItem("accessToken") || null,
      },
    });
  },

  createClass: (data) => {
    const url = "/teachers/classes";
    return axiosClient.post(url, data, {
      headers: {
        "Access-token": localStorage.getItem("accessToken") || null,
      },
    });
  },

  joinClass: (data) => {
    const url = "/classes";
    return axiosClient.post(url, data, {
      headers: {
        "Access-token": localStorage.getItem("accessToken") || null,
      },
    });
  },

  deleteClass: (id) => {
    const url = `/teachers/classes/${id}`;
    return axiosClient.delete(url, {
      headers: {
        "Access-token": localStorage.getItem("accessToken") || null,
      },
    });
  },

  modifiedStatusClass: (id, data) => {
    const url = `/teachers/classes/${id}/status`;
    return axiosClient.post(url, data, {
      headers: {
        "Access-token": localStorage.getItem("accessToken") || null,
      },
    });
  },
};

export default classesApi;
