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
} from "../async thunks/postThunk";
const initialState = {
  posts: [],
  loading: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
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
    [deletePost.pending]:(state)=>{
        state.loading=true;
    },
    [deletePost.fulfilled]:(state,{payload})=>{
        state.posts = payload;
        state.loading=false;
    },
    [deletePost.rejected]:(state)=>{
        state.loading=false;
    },
    [editPost.pending]:(state)=>{
        state.loading=true;
    },
    [editPost.fulfilled]:(state,{payload})=>{
        state.posts = payload;
        state.loading=false;
    },
    [editPost.rejected]:(state)=>{
        state.loading=false;
    },
    [likePost.pending]:(state)=>{
        state.loading=true;
    },
    [likePost.fulfilled]:(state,{payload})=>{
        state.posts = payload;
        state.loading=false;
    },
    [likePost.rejected]:(state)=>{
        state.loading=false;
    },
    [unlikePost.pending]:(state)=>{
        state.loading=true;
    },
    [unlikePost.fulfilled]:(state,{payload})=>{
        state.posts = payload;
        state.loading=false;
    },
    [unlikePost.rejected]:(state)=>{
        state.loading=false;
    },
    [addComment.pending]:(state)=>{
        state.loading=true;
    },
    [addComment.fulfilled]:(state,{payload})=>{
        state.posts = payload;
        state.loading=false;
    },
    [addComment.rejected]:(state)=>{
        state.loading=false;
    },
    [deleteComment.pending]:(state)=>{
        state.loading=true;
    },
    [deleteComment.fulfilled]:(state,{payload})=>{
        state.posts = payload;
        state.loading=false;
    },
    [deleteComment.rejected]:(state)=>{
        state.loading=false;
    },
  },
});

export default postSlice.reducer;