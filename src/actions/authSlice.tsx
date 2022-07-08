
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

            // email: email, 
            // username: username, 
            // projects: projects, 
            // permissions: permissions, 
            // access_token: refreshAndAccessTokens.access_token, 
            // isAuth: true 

    name: "auth",
    initialState: { email: "", username:"", profile_url:"", projects:[], permissions:{}, access_token:"", isAuth: undefined },
    reducers: {

        getLogin(state, action){},
        Login: (state, action) => {
            
            return { ...state, ...action.payload.user }
            
        },
        getUser(state){},
        User: (state, action) => {

            
            return { ...state, ...action.payload.user }
            
        },
        getLogout(state){},
        Logout: (state, action) => {


            return { ...state, ...action.payload }
        }


    }



})

export const {

    getLogin, Login,
    getLogout, Logout,
    getUser, User

} = authSlice.actions;

export default authSlice.reducer;

