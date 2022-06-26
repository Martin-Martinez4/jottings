
import { call, put } from "redux-saga/effects";
import { ChangeType, deleteTask, editTask } from "../../actions/projectSlice";
import { requestChangeType, requestDeleteTask, requestCreateTask, requestEditTask } from "../requests/task.request";

export function* handleChangeType(action){

    try{

        const response = yield call(requestChangeType, action.payload);
        const { data } = response;
        yield put(ChangeType({...response}))
    }
    catch(err){

        console.log(err)
    }
}
export function* handleDeleteTask(action){

    try{

        const response = yield call(requestDeleteTask, action.payload);
        yield put(deleteTask({...response}))
    }
    catch(err){

        console.log(err)
    }
}

export function* handleCreateTask(action){

    try{

        const response = yield call(requestCreateTask, action.payload);
        yield put(deleteTask({...response}))
    }
    catch(err){

        console.log(err)
    }

}

export function* handleEditTask(action){

    try{

        const response = yield call(requestEditTask, action.payload);
        yield put(editTask({...response}))
    }
    catch(err){

        console.log(err)
    }
}


