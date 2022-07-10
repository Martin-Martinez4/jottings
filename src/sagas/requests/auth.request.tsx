
import { RegisterType, SigninType } from "../../types/auth.type";

export function requestLogin(body: SigninType){
    
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signin`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
            return responses.json()
        })
        .catch(err => {
    
            return "NA"
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
        
        return responses.json()
    })
    .catch(err => {

        return "NA"
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
        
        return responses.json()
    })
    .catch(err => {

        return "NA"
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
        
        return responses.json()
    })
    .catch(err => {

        return "NA"
    });
}

export function requestEmailAvailable(body: {"email": string}){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/email`, {
        
        method: "post",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)

    })
    .then(responses =>  {
        
        return responses.json()


    })
    .catch(err => {

        console.log(err)

        return "NA"
    });

}


