
import { SagaIterator } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { Login, Logout } from "../../actions/authSlice";
import { requestLogin, requestUser, requestSignup, requestSignout } from "../requests/auth.request";

export function* handleLogin(action: any): SagaIterator{

    try{

        const response = yield call(requestLogin, action.payload);
        yield put(Login({...response}))
        
    }
    catch(err){

        console.log(err)
    }
}

export function* handleSignup(action: any): SagaIterator{

    try{

        const response = yield call(requestSignup, action.payload);

        if(response === "NA" || response === {}){

            yield put(Logout({ 
                email: "", 
                username: "", 
                projects: [], 
                permissions: {}, 
                access_token: "", 
                isAuth: false 
            }))


        }
        else{

            yield put(Login({...response}));
        }
        
    }
    catch(err){

        console.log(err)
    }
}
export function* handleSignout(): SagaIterator{

    try{

        const response = yield call(requestSignout);
        yield put(Logout({ 
                email: "", 
                username: "", 
                projects: [], 
                permissions: {}, 
                access_token: "", 
                isAuth: false 
            }))

        
    }
    catch(err){

        console.log(err)
    }
}

export function* handleUser(): SagaIterator{

    try{

        const response = yield call(requestUser);

        if(response === "NA" || response === {}){

            yield put(Logout({ 
                email: "", 
                username: "", 
                projects: [], 
                permissions: {}, 
                access_token: "", 
                isAuth: false 
            }))


        }
        else{

            yield put(Login({...response}))
        }
        
    }
    catch(err){

        console.log(err)
    }
}


