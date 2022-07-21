
import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { ChangeType, createTask, deleteTask, editTask } from "../../actions/projectSlice";

import { TaskType } from "../../types/project.type";
import { ErrorType } from "../../types/errorAndLoading.type";
import { HandleChangeTypeType, HandleCreateTaskType, HandleDeleteTaskType, HandleEditTaskType } from "../../types/task.handler.type";
import { requestChangeType, requestDeleteTask, requestCreateTask, requestEditTask } from "../requests/task.request";

type handleChangeResponseType = {

    message: string,
    new_category_id: string,
    new_category_length: number,
    old_category_id: string,
    old_category_length: number,
    success: boolean,
    tasks: {[category_id: string]:{ [task_id: string]: TaskType } }

}

export function* handleChangeType(action: HandleChangeTypeType): SagaIterator{
    
    try{
        
        const response: handleChangeResponseType | ErrorType = yield call(requestChangeType, action.payload);

        console.log(response)

        // message: "Category edited!"
        // new_category_id: "62d5a8b2495a6e29e893dafa"
        // new_category_length: 3
        // old_category_id: "62d5a8b7495a6e29e893db03"
        // old_category_length: 1
        // success: true
        // tasks: {
        //     62d5a8b2495a6e29e893dafa:
        //                 62d5a9528c09c1e39ae4cd9b:
        //                 content: "<p>reas</p>\n"
        //                 createdAt: "2022-07-18T18:41:22.303Z"
        //                 index: 0
        //                 title: "read"
        //                 updatedAt: "2022-07-18T18:43:19.352Z"
        //                 _id: "62d5a9528c09c1e39ae4cd9b"
        // }

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


