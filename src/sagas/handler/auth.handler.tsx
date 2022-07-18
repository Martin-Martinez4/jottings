
import { SagaIterator } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { Login, Logout } from "../../actions/authSlice";
import { IsLoading } from "../../actions/errorAndLoadingSlice";
import { requestLogin, requestUser, requestSignup, requestSignout } from "../requests/auth.request";

export function* handleLogin(action: any): SagaIterator{

    try{

        yield put(IsLoading(true));

        const response = yield call(requestLogin, action.payload);

        yield put(Login({...response}));

        yield put(IsLoading(false));
        
    }
    catch(err){

        console.log(err)
    }
}

export function* handleSignup(action: any): SagaIterator{

    try{

        const response = yield call(requestSignup, action.payload);

        yield put(Login({...response}));
        
    }
    catch(err){

        console.log(err)
    }
}
export function* handleSignout(): SagaIterator{

    try{

        yield put(IsLoading(true));


        const response = yield call(requestSignout);

        const body = {
            email: "", 
             username: "", 
             projects: [], 
             permissions: {}, 
             access_token: "", 
             isAuth: false 
        }
        
        
        yield put(Logout(body))

        yield put(IsLoading(false));


        
    }
    catch(err){

        console.log(err)
    }
}

export function* handleUser(): SagaIterator{

    try{

        yield put(IsLoading(true));


        const response = yield call(requestUser);

        yield put(Login({...response}))

        yield put(IsLoading(false));

        
    }
    catch(err){

        console.log(err)
    }
}


