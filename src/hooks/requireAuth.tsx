
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../types/state.type";
import {getUser} from "../actions/authSlice";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import Signin from "../pages/signin/Signin";
import { useEffect } from "react";

const RequireAuth = () => {
    const dispatch = useDispatch()

    // store is Auth in localstorage
    // if it is true use dispatch(getUser)

    const isAuth = useSelector((state: StateType) => state.auth.isAuth);
    const isLoading = useSelector((state: StateType) => state.errorAndLoading.Loading.isLoading);


    // useEffect check for refresh jwt
        // If valid and vefiied
            // set user information

        useEffect(() => {

            dispatch(getUser());
            
        }, [dispatch])
        useEffect(() => {
            
        }, [isAuth])
  

    return (
           isAuth === true
           ? <Outlet />
           : isLoading === true 
           ? <LoadingPage></LoadingPage>
           : <Signin></Signin>
           
    );
}

export default RequireAuth;


