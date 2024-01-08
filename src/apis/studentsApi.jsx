import axiosClient from "./axiosClient";

const studentsApi = {
  getStudentInClass: (classId) => {
    const url = `/teacher/classes/${classId}/students`;
    return axiosClient.get(url, {
      headers: {
        "Access-token": localStorage.getItem("accessToken") || null,
      },
    });
  },

  getStudent: (data, studentId) => {
    const url = `/students/${studentId}`;
    return axiosClient.get(
      url,
      { data },
      {
        headers: {
          "Access-token": localStorage.getItem("accessToken") || null,
        },
      }
    );
  },
};

export default studentsApi;
