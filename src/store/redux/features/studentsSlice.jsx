import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentsApi from "../../../apis/studentsApi";

const initialState = {
 countSession : 0,
  status: "idle", // "idle" | "loading" | "succeeded" | "failed
  students: [],
  errorMessage: "",
};

export const getStudentInClass = createAsyncThunk(
  "students/getStudentInClass",
  async (classId) => {
    const response = await studentsApi.getStudentInClass(classId);
    return response;
  }
);

export const StudentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },

    addStudent: (state, action) => {
      state.students.push(action.payload);
    },

    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (item) => item.id !== action.payload
      );
    },

    outClass: (state, action) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentInClass.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getStudentInClass.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students = action.payload.students;
        state.countSession = action.payload.numClassSessions
      })
      .addCase(getStudentInClass.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      });
  },
});

export default StudentsSlice.reducer;
