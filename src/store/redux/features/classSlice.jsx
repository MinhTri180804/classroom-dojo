import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import classesApi from "../../../apis/classesApi";

const initialState = {
  status: "idle", // "idle" | "loading" | "succeeded" | "failed
  totalClasses: 0,
  classes: [],
  errorMessage: "",
};

export const ClassSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    setClasses: (state, action) => {
      state.classes = action.payload;
    },

    addClass: (state, action) => {
      state.classes.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllClasses.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllClasses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classes = action.payload;
      })
      .addCase(getAllClasses.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      })
      .addCase(createClass.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createClass.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classes.push(action.payload);
      })
      .addCase(createClass.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      })
      .addCase(joinClass.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(joinClass.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classes.push(action.payload);
      })
      .addCase(joinClass.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      })
      .addCase(deleteClass.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteClass.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classes = state.classes.filter(
          (classItem) => classItem.classId !== action.payload
        );
      })
      .addCase(deleteClass.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      })
      .addCase(modifiedStatusClass.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(modifiedStatusClass.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.classes.findIndex(
          (classItem) => classItem.classId === action.payload
        );
        state.classes[index].status = state.classes[index].status === "active" ? "inactive" : "active";
      }),
});

export const { setClasses, addClass, removeClass } = ClassSlice.actions;
export default ClassSlice.reducer;

export const getAllClasses = createAsyncThunk(
  "classes/getAllClasses",
  async (role) => {
    try {
      const request = await classesApi.getClasses(role);
      return request;
    } catch (error) {
      throw error;
    }
  }
);

export const createClass = createAsyncThunk(
  "classes/createClass",
  async (data) => {
    try {
      const request = await classesApi.createClass(data);
      return request;
    } catch (error) {
      throw error;
    }
  }
);

export const joinClass = createAsyncThunk("classes/joinClass", async (data) => {
  try {
    const request = await classesApi.joinClass(data);
    return request;
  } catch (error) {
    throw error;
  }
});

export const deleteClass = createAsyncThunk(
  "classes/deleteClass",
  async (id) => {
    try {
      const request = await classesApi.deleteClass(id);
      return id;
    } catch (error) {
      throw error;
    }
  }
);

export const modifiedStatusClass = createAsyncThunk(
  "classes/modifiedStatusClass",
  async (id, data) => {
    try {
      const request = await classesApi.modifiedStatusClass(id, data);
      return id;
    } catch (error) {
      throw error;
    }
  }
);
