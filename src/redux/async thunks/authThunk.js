import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("user/login", async (user) => {
  try {
    const response = await axios.post("/api/auth/login", user);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      return response.data.foundUser;
    }
  } catch (error) {
    console.log(error);
  }
});

export const signup = createAsyncThunk("user/signup", async (user) => {
  try {
    const response = await axios.post("/api/auth/signup", user);
    if (response.status === 201) {
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.createdUser));
      return response.data.createdUser;
    }
  } catch (error) {
    console.log(error);
  }
});
