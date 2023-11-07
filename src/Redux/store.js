import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as User from "./Reducers/userReducers";
// import * as User from "./Reducers/userReducers";

const rootReducer = combineReducers({
    // Add your reducers here
    // user reducer
    userLogin: User.userLoginReducer,
    userRegister: User.userRegisterReducer,
    userUpdateProfile: User.userUpdateProfileReducer,
    userDeleteProfile: User.userDeleteProfileReducer,
    userChangePassword: User.userChangPasswordReducer,
    userGetFavoriteMovies: User.userGetFavoriteMoviesReducer,
    userDeleteFavoriteMovies: User.userDeleteFavoriteMoviesReducer,

});

// get userInfo from localStorage
const userInfoFromStorage = localStorage.getItem("userInfo") 
    ? JSON.parse(localStorage.getItem("userInfo")) 
    : null;

// initialState 
const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});