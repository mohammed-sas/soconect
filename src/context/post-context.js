import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { postReducer } from "../reducer";
const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  const value = usePostActions();
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

const usePostActions = () => {
  const [postState, postDispatch] = useReducer(postReducer, { posts: [] });
  const token = localStorage.getItem("token");
  const auth = {
    headers: {
      authorization: token,
    },
  };
  const addPost = async (postData) => {
    try {
      const response = await axios.post("/api/posts", {postData}, auth);
      if (response.status === 201) {
        postDispatch({ type: "ADD", payload: response.data.posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { postState, postDispatch, addPost };
};

const usePost = () => useContext(PostContext);

export { PostProvider, usePost };
