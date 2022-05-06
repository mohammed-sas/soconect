import { createSlice } from "@reduxjs/toolkit";
import {
  addToBookmark,
  deleteBookmark,
  followUser,
  unFollowUser,
  editUser,
  getUser
} from "../async thunks/userThunk";

const initialState = {
  bookmarks: [],
  followers: [],
  following: [],
  bio: { info: "", website: "" },
  posts:[],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [addToBookmark.pending]: (state) => {
      state.loading = true;
    },
    [addToBookmark.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload;
      state.loading = false;
    },
    [addToBookmark.rejected]: (state) => {
      state.loading = false;
    },
    [deleteBookmark.pending]: (state) => {
      state.loading = true;
    },
    [deleteBookmark.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload;
      state.loading = false;
    },
    [deleteBookmark.rejected]: (state) => {
      state.loading = false;
    },
    [followUser.pending]: (state) => {
      state.loading = true;
    },
    [followUser.fulfilled]: (state, { payload }) => {
      state.following = payload;
      state.loading = false;
    },
    [followUser.rejected]: (state) => {
      state.loading = false;
    },
    [unFollowUser.pending]: (state) => {
      state.loading = true;
    },
    [unFollowUser.fulfilled]: (state, { payload }) => {
      state.following = payload;
      state.loading = false;
    },
    [unFollowUser.rejected]: (state) => {
      state.loading = false;
    },
    [editUser.pending]: (state) => {
      state.loading = true;
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.bio = payload;
      state.loading = false;
    },
    [editUser.rejected]: (state) => {
      state.loading = false;
    },
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.bookmarks=payload.bookmarks;
      state.followers=payload.followers;
      state.following=payload.following;
      state.posts=payload.posts;
      state.bio = payload.bio;
      state.loading = false;
    },
    [getUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
