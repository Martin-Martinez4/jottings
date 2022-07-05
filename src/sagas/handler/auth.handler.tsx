
import { SagaIterator } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { Login } from "../../actions/authSlice";
import { requestLogin } from "../requests/auth.request";

export function* handleLogin(action: any): SagaIterator{

    try{

        const response = yield call(requestLogin, action.payload);
        console.log(response)
        yield put(Login({...response}))
        
    }
    catch(err){

        console.log(err)
    }
}


