
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const authSlice = createSlice({

    name: "auth",
    initialState: {username:"", profile_url:"", projects:[]},
    reducers: {

        getLogin(state, action){},
        Login: (state, action) => {

            return { ...state, ...action.payload.user }

        }

    }



})

export const {

    getLogin, Login

} = authSlice.actions;

export default authSlice.reducer;

