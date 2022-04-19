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
  return { userState, addToBookmark };
};
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
