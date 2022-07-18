
import { RegisterType, SigninType } from "../../types/auth.type";
import { ErrorWithStatusCode } from "../../types/customError.type";

export function requestLogin(body: SigninType){
    
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signin`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when logging in.")

            error.statusCode = responses.status;

            throw error;
        }
        

        return responses.json()
    })
    .catch(err => {

         return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}

export function requestSignup(body: RegisterType){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signup`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when registering.")

            error.statusCode = responses.status;

            throw error;
        }
        

        return responses.json()
    })
    .catch(err => {

         return {isError: true, message: err.message, statusCode: err.statusCode}
    });

}

export function requestSignout(){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signout`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
       
    })
    .then(responses =>  {
        
        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when signing out.")

            error.statusCode = responses.status;

            throw error;
        }
        

        return responses.json()
    })
    .catch(err => {

         return {isError: true, message: err.message, statusCode: err.statusCode}
    });

} 

export function requestUser(){
    
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/`, {
        
        method: "get",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
       
    })
    .then(responses =>  {
        
        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when getting user information.")

            error.statusCode = responses.status;

            throw error;
        }
        

        return responses.json()
    })
    .catch(err => {

         return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}

export function requestEmailAvailable(body: {"email": string}){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/email`, {
        
        method: "post",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)

    })
    .then(responses =>  {
        
        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when checking if email is available.")

            error.statusCode = responses.status;

            throw error;
        }
        

        return responses.json()


    })
    .catch(err => {

        return {isError: true, message: err.message, statusCode: err.statusCode}
    });

}


