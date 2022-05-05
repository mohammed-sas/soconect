import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../slices/postSlice';
import userReducer from '../slices/userSlice';
import authReducer from '../slices/authSlice';
export const store =configureStore({
    reducer:{
        posts:postsReducer,
        user:userReducer,
        auth:authReducer
    }
});