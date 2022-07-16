
import { Outlet } from "react-router-dom";
import { StateType } from "../types/project.type";
import {getUser} from "../actions/authSlice";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import Signin from "../pages/signin/Signin";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const RequireAuth = () => {
    const dispatch = useDispatch()

    // store is Auth in localstorage
    // if it is true use dispatch(getUser)

    const isAuth = useSelector((state: StateType) => state.auth.isAuth);


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
           : isAuth === undefined
           ? <><LoadingPage></LoadingPage></>
           : <Signin />
    );
}

export default RequireAuth;


