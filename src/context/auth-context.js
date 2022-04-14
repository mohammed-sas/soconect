import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import {authReducer} from '../reducer';
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const value = useAuthProvide();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthProvide = () => {
  const [authState,authDispatch] = useReducer(authReducer,{user:null});

  useEffect(()=>{
        const existingUser = JSON.parse(localStorage.getItem("user"));
        authDispatch({type:"INITIAL_STATE",payload:existingUser});
  },[])

  const login = async (user) => {
    try {
      
      const response = await axios.post("/api/auth/login",user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user",JSON.stringify(response.data.foundUser));
        authDispatch({type:"LOGIN",payload:response.data.foundUser});
      }
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };
  const signup = async (user) => {
    try {
      const response = await axios.post("/api/auth/signup",user);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user",JSON.stringify(response.data.createdUser));
        authDispatch({type:"SIGNUP",payload:response.data.createdUser});
      }
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.setItem("token", null);
    localStorage.setItem("user",null);
    authDispatch({type:"LOGOUT"});
  };

  return { authState, login, signup, logout };
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
