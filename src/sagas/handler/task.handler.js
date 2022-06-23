
import { call, put } from "redux-saga/effects";
import { ChangeType } from "../../actions/taskSlice";
import { requestChangeType } from "../requests/task.request";

export function* handleChangeType(action){

    console.log(action)

    try{

        const response = yield call(requestChangeType, action.payload);
        const { data } = response;
        console.log(response)
        yield put(ChangeType({...response}))
    }
    catch(err){

        console.log(err)
    }
}


