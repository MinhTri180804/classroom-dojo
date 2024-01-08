import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../../apis/axiosClient";
import authApi from "../../../apis/authApi";
import { redirect } from "react-router-dom";
import { formatRole } from "../../../utils/format";

const initialState = {
  status: "idle", // "idle" | "loading" | "succeeded" | "failed
  isAuthenticated: false,
  errorMessage: "",
  user: {
    fullName: "",
    email: "",
    phone: "",
    role: "",
  },
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("accessToken");
      return initialState;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        const role = formatRole(action.payload.role);
        state.user = {
          fullName: action.payload.fullName,
          email: action.payload.email,
          phone: action.payload.phone,
          role: role,
        };
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = false;
        state.errorMessage = action.error.message;
      }),
});

export default AuthSlice.reducer;
export const { logout } = AuthSlice.actions;

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const request = await authApi.login(data);
    localStorage.setItem("accessToken", request.token);
    return request;
  } catch (error) {
    throw error;
  }
});
