import { configureStore } from "@reduxjs/toolkit";
import ClassSlice from "./features/classSlice";
import studentsSlice from "./features/studentsSlice";
import AuthSlice from "./features/authSlice";

export const store = configureStore({
  reducer: {
    ClassSlice,
    studentsSlice,
    AuthSlice,
  },
});
