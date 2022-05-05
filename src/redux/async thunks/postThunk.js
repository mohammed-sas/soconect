import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = localStorage.getItem("token");
const auth = {
  headers: {
    authorization: token,
  },
};
export const getAllPost = createAsyncThunk("users/allUsers", async () => {
  try {
    const response = await axios.get("/api/posts");
    if (response.status === 200) {
      return response.data.posts;
    }
  } catch (error) {
    console.log(error);
  }
});

export const addPost = createAsyncThunk("user/addPost", async (postData) => {
  try {
    const response = await axios.post("/api/posts", { postData }, auth);
    if (response.status === 201) {
      return response.data.posts;
    }
  } catch (error) {
    console.log(error);
  }
});

export const deletePost = createAsyncThunk(
  "user/deletePost",
  async (postId) => {
    try {
      const response = await axios.delete(`/api/posts/${postId}`, auth);
      if (response.status === 201) {
        return response.data.posts;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "user/editPost",
  async (postData, id) => {
    try {
      const response = await axios.post(
        `/api/posts/edit/${id}`,
        { postData },
        auth
      );
      if (response.status === 201) {
        return response.data.posts;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const likePost = createAsyncThunk("user/posts/like", async (postId) => {
  try {
    const response = await axios.post(`/api/posts/like/${postId}`, {}, auth);
    if (response.status === 201) {
      return response.data.posts;
    }
  } catch (error) {
    console.log(error);
  }
});

export const unlikePost = createAsyncThunk(
  "user/posts/unlike",
  async (postId) => {
    try {
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        auth
      );
      if (response.status === 201) {
        return response.data.posts;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSinglePost = createAsyncThunk(
  "user/singlePost",
  async (postId) => {
    try {
      const response = await axios.get(`/api/posts/${postId}`);
      if (response.status === 200) {
        return response.data.post;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "user/posts/addComment",
  async (comment, postId) => {
    try {
      const response = await axios.post(
        `/api/posts/comment/${postId}`,
        { comment },
        auth
      );
      if (response.status === 201) {
        return response.data.posts;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "user/posts/deleteComment",
  async (commentId, postId) => {
    try {
      const response = await axios.post(
        `/api/posts/${postId}/${commentId}`,
        {},
        auth
      );
      if (response.status === 201) {
        return response.data.posts;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
