import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async (userId) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    console.log(error);
  }
});

export const addToBookmark = createAsyncThunk(
  "user/addBookmark",
  async (postId) => {
    try {
      const token = localStorage.getItem("token");
      const auth = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        auth
      );
      if (response.status === 200) {
        return response.data.bookmarks;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteBookmark = createAsyncThunk(
  "user/deleteBookmark",
  async (postId) => {
    try {
      const token = localStorage.getItem("token");
      const auth = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        auth
      );
      if (response.status === 200) {
        return response.data.bookmarks;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const followUser = createAsyncThunk("user/follow", async (userId) => {
  try {
    const token = localStorage.getItem("token");
    const auth = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.post(`/api/users/follow/${userId}`, {}, auth);
    if (response.status === 200) {
      const { user } = response.data;
      const res = await axios.get(`/api/users/${user._id}`);
      return res.data.user.following;
    }
  } catch (error) {
    console.log(error);
  }
});

export const unFollowUser = createAsyncThunk(
  "user/unfollow",
  async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const auth = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(
        `/api/users/unfollow/${userId}`,
        {},
        auth
      );
      if (response.status === 200) {
        const { user } = response.data;
        const res = await axios.get(`/api/users/${user._id}`);
        return res.data.user.following;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const editUser = createAsyncThunk("user/editUser", async (userBio) => {
  try {
    const token = localStorage.getItem("token");
    const auth = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.post("/api/users/edit", { userData:userBio }, auth);
    if (response.status === 201) {
      return response.data.user;
    }
  } catch (error) {
    console.log(error);
  }
});

export const addToHashtag=createAsyncThunk("user/addHashtag",async (tag)=>{
  try{
    const token = localStorage.getItem("token");
    const auth = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.post(`/api/user/addHashtag/${tag}`, {}, auth);
    if(response.status === 201){
      return response.data.hashtag;
    }
  }catch(error){
    console.log(error);
  }
})

export const deleteHashtag=createAsyncThunk("user/removeHashtag",async (tag)=>{
  try{
    const token = localStorage.getItem("token");
    const auth = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.post(`/api/user/removeHashtag/${tag}`, {}, auth);
    if(response.status === 201){
      return response.data.hashtag;
    }
  }catch(error){
    console.log(error);
  }
})

export const getAllStories=createAsyncThunk("users/stories",async ()=>{
  try{
    const response = await axios.get("api/users/stories");
    if(response.status === 200){
      return response.data.stories;
    }
  }catch(error){
    console.log(error);
  }
})