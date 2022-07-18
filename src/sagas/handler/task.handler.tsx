
import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { ChangeType, createTask, deleteTask, editTask } from "../../actions/projectSlice";
import { Logout } from "../../actions/authSlice";
import { HandleChangeTypeType, HandleCreateTaskType, HandleDeleteTaskType, HandleEditTaskType } from "../../types/task.handler.type";
import { requestChangeType, requestDeleteTask, requestCreateTask, requestEditTask } from "../requests/task.request";
import { errorMessage } from "../../actions/errorAndLoadingSlice";

export function* handleChangeType(action: HandleChangeTypeType): SagaIterator{
    
    try{
        
        const response = yield call(requestChangeType, action.payload);

        yield put(ChangeType({...response}))

    }
    catch(err){
        
        console.log(err)
    }
}
export function* handleDeleteTask(action: HandleDeleteTaskType): SagaIterator{
    
    try{
        
        const response = yield call(requestDeleteTask, action.payload);

        yield put(deleteTask({...response}))
    }
    catch(err){

        console.log(err)
    }
}

export function* handleCreateTask(action: HandleCreateTaskType): SagaIterator{
    
    try{
        
        const response = yield call(requestCreateTask, action.payload);
    
        yield put(createTask({...response}))
    }
    catch(err){
        
        console.log(err)
    }
    
}

export function* handleEditTask(action: HandleEditTaskType): SagaIterator{
    

    try{

        const response = yield call(requestEditTask, action.payload);
            
        yield put(editTask({...response}))
    }
    catch(err){

        console.log(err)
    }
}


