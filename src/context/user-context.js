import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { userReducer } from "../reducer";
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const value = useUserActions();
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUserActions = () => {
  const [userState, userDispatch] = useReducer(userReducer, {
    bookmarks: [],
    followers: [],
    following: [],
  });
  const token = localStorage.getItem("token");
  const auth = {
    headers: {
      authorization: token,
    },
  };

  const addToBookmark = async (postId) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        auth
      );
      if (response.status === 200) {
        userDispatch({
          type: "ADD_BOOKMARK",
          payload: response.data.bookmarks,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookmark = async (postId) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        auth
      );
      if (response.status === 200) {
        userDispatch({
          type: "DELETE_BOOKMARK",
          payload: response.data.bookmarks,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPost = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const followUser = async (userId) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${userId}`,
        {},
        auth
      );
      if (response.status === 200) {
        const { user } = response.data;
        const updateUser = await getUser(user._id);
        userDispatch({ type: "FOLLOWING", payload: updateUser.following });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const unFollowUser = async (userId) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${userId}`,
        {},
        auth
      );
      if (response.status === 200) {
        const { user } = response.data;
        const updateUser = await getUser(user._id);
        userDispatch({ type: "UNFOLLOWING", payload: updateUser.following });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return response.data.user;
    } catch (error) {
      console.log(error);
    }
  };

  const editUser=async (userBio)=>{
    try{
      const userData={
        bio:{
          ...userBio
        }
      }
      const response= await axios.post('/api/users/edit',{userData},auth);
      if(response.status === 201){

      }

    }catch(error){

    }
  }
  return {
    userState,
    addToBookmark,
    deleteBookmark,
    getUserPost,
    followUser,
    getUser,
    unFollowUser,
    editUser
  };
};
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
