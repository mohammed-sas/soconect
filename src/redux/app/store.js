import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../slices/postSlice';
import userReducer from '../slices/userSlice';
export const store =configureStore({
    reducer:{
        posts:postsReducer,
        user:userReducer
    }
});