import { createSlice } from "@reduxjs/toolkit";

const errorAndLoading = createSlice({

            // email: email, 
            // username: username, 
            // projects: projects, 
            // permissions: permissions, 
            // access_token: refreshAndAccessTokens.access_token, 
            // isAuth: true
     
    // Change to user later, auth does not describe it
    name: "errorAndLoading",
    initialState: { error:{ isThereAnError: false, message: "" }, Loading: { isLoading: false } },
    reducers: {

        
        getErrorMessage(state, action){},
        errorMessage: (state, action) => {
            
            return { ...state, error:{isThereAnError: true,  message: action.payload.message} }
            
        },
        getResetErrorMessage(state, action){},
        resetErrorMessage: (state) => {
            
            return { ...state, error: { isThereAnError: false, message: "" } }
            
        },
        getIsLoading(state, action){},
        IsLoading: (state, action) => {
            
            return { ...state, Loading: { isLoading: action.payload} }
            
        },
        

    }



})

export const {

    getErrorMessage, errorMessage,
    getResetErrorMessage, resetErrorMessage,
    getIsLoading, IsLoading



} = errorAndLoading.actions;

export default errorAndLoading.reducer;
