
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

            // email: email, 
            // username: username, 
            // projects: projects, 
            // permissions: permissions, 
            // access_token: refreshAndAccessTokens.access_token, 
            // isAuth: true
     
    // Change to user later, auth does not describe it
    name: "auth",
    initialState: { email: "", username:"", profile_url:"", projects:[], permissions:{}, access_token:"", isAuth: undefined },
    reducers: {

        getSignup(state, action){},
        getSignout(state){},
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
        },
        getCreateProject(state, action){},
        createProject: (state,  action) => {
            

            return {...state, projects: action.payload.projects}

        },
        getDeleteProject(state, action){},
        deleteProject: (state, action) => {

            return {...state,  projects: action.payload.projects}

        },
        getEditProject(state, action){},
        editProject: (state, action) => {

            return {...state, projects: action.payload.projects}
        }


    }



})

export const {

    getLogin, Login,
    getLogout, Logout,
    getUser, User,
    getSignup,
    getSignout,
    getCreateProject, createProject,
    getEditProject, editProject,
    getDeleteProject, deleteProject


} = authSlice.actions;

export default authSlice.reducer;

