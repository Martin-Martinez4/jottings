
import { ResponseClass } from "../../types/responseClass.types";
import { processServerResponse } from "../../utils/proccessServerResponse";
import { AuthErrorMessages, UserInfoErrorMessages } from "../../types/errorMessage.types";
import { RegisterType, SigninType } from "../../types/auth.type";
import { ErrorWithStatusCode } from "../../types/customError.type";

export async function requestLogin(body: SigninType){
    
    const response =  fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signin`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    });
    
    const loginResponse = new ResponseClass(response, AuthErrorMessages.SIGN_IN);

    return await processServerResponse(loginResponse);

}

export async function requestSignup(body: RegisterType){

    const response =  fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signup`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    });

    const signupResponse = new ResponseClass(response, AuthErrorMessages.SIGN_IN);

    return await processServerResponse(signupResponse);

}

export async function requestSignout(){

    const response =  fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signout`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
       
    });

    const signoutResponse = new ResponseClass(response, AuthErrorMessages.SIGN_OUT);

    return await processServerResponse(signoutResponse);

} 

export async function requestUser(){
    
    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/`, {
        
        method: "get",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
       
    });

    const userInfoResponse = new ResponseClass(response, UserInfoErrorMessages.USER_INFO);

    return await processServerResponse(userInfoResponse);
}

export async function requestEmailAvailable(body: {"email": string}){

    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/email`, {
        
        method: "post",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)

    });

    const emailAvailableResponse = new ResponseClass(response, UserInfoErrorMessages.EMAIL_AVAILABLE);

    return await processServerResponse(emailAvailableResponse);

}


