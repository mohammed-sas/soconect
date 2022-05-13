import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPost,
  addPost,
  deletePost,
  editPost,
  likePost,
  unlikePost,
  addComment,
  deleteComment,
  getHashtags,
  getHashtagPosts,
  updatePollPost
} from "../async thunks/postThunk";

const initialState = {
  posts: [],
  loading: false,
  hashtags: [],
  currentHashtagPosts:[],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.posts = [];
      state.loading = false;
    },
  },
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.loading = true;
    },
    [getAllPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [getAllPost.rejected]: (state) => {
      state.loading = false;
    },
    [addPost.pending]: (state) => {
      state.loading = true;
    },
    [addPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [addPost.rejected]: (state) => {
      state.loading = false;
    },
    [deletePost.pending]: (state) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [deletePost.rejected]: (state) => {
      state.loading = false;
    },
    [editPost.pending]: (state) => {
      state.loading = true;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [editPost.rejected]: (state) => {
      state.loading = false;
    },
    [likePost.pending]: (state) => {
      state.loading = true;
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [likePost.rejected]: (state) => {
      state.loading = false;
    },
    [unlikePost.pending]: (state) => {
      state.loading = true;
    },
    [unlikePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [unlikePost.rejected]: (state) => {
      state.loading = false;
    },
    [addComment.pending]: (state) => {
      state.loading = true;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [addComment.rejected]: (state) => {
      state.loading = false;
    },
    [deleteComment.pending]: (state) => {
      state.loading = true;
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [deleteComment.rejected]: (state) => {
      state.loading = false;
    },
    [getHashtags.pending]: (state) => {
      state.loading = true;
    },
    [getHashtags.fulfilled]: (state, { payload }) => {
      state.hashtags = payload;
      state.loading = false;
    },
    [getHashtags.rejected]: (state) => {
      state.loading = false;
    },
    [getHashtagPosts.pending]: (state) => {
      state.loading = true;
    },
    [getHashtagPosts.fulfilled]: (state, { payload }) => {
      state.currentHashtagPosts = payload;
      state.loading = false;
    },
    [getHashtagPosts.rejected]: (state) => {
      state.loading = false;
    },
    [updatePollPost.pending]: (state) => {
      state.loading = true;
    },
    [updatePollPost.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.map(p=>{
        if(p._id === payload._id){
          return payload;
        }else{
          return p;
        }
      });
      state.loading = false;
    },
    [updatePollPost.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export const { clearPosts } = postSlice.actions;
export default postSlice.reducer;
