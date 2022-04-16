import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
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

  useEffect(() => {
    if (token !== null){
        getAllPost();
    } 
  }, []);

  const getAllPost = async () => {
    try {
      const response = await axios.get("/api/posts");
      if (response.status === 200) {
        postDispatch({ type: "ALL_POST", payload: response.data.posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = async (postData) => {
    try {
      const response = await axios.post("/api/posts", { postData }, auth);
      if (response.status === 201) {
        postDispatch({ type: "ADD", payload: response.data.posts.reverse() });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost=async (postId)=>{
    try{
      const response= await axios.delete(`/api/posts/${postId}`,auth);
      if(response.status ===201){
        postDispatch({type:"DELETE",payload:response.data.posts.reverse()});
      }
    }catch(error){
      console.log(error);
    }
  }

  return { postState, postDispatch, addPost, getAllPost,deletePost };
};

const usePost = () => useContext(PostContext);

export { PostProvider, usePost };
