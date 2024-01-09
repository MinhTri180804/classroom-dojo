import axiosClient from "./axiosClient";

export const attendanceApi = {
  attendanceClass: (data) => {
    const url = "/teachers/classes/attendance";
    return axiosClient.post(url, data, {
      headers: {
        "Access-token": localStorage.getItem("accessToken") || null,
      },
    });
  },
};

export default attendanceApi;
