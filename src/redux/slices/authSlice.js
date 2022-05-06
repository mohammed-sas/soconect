import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../async thunks/authThunk";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.setItem("token", null);
      localStorage.setItem("user", null);
      state.loading = false;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    },
    [login.rejected]: (state) => {
      state.loading = false;
    },
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    },
    [signup.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;