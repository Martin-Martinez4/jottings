
import { call, CallEffect, put, PutEffect } from "redux-saga/effects";
import { oneProject } from "../../actions/projectSlice";
import { createProject, deleteProject, editProject } from "../../actions/authSlice";
import { requestGetOneProject, requestCreateProject, requestEditProject, requestDeleteProject } from "../requests/project.request";
import { HandleCreateProjectPayloadType, HandleCreateProjectType } from "../../types/project.handler.types";
import { SagaIterator } from "@redux-saga/types";


export function* handleGetProject(action: { payload: string; }): Generator<
    CallEffect<any> | PutEffect<{ payload: any; type: any; }>
>{

    const project_id: string = action.payload

    try{
        
        //  takes function name, arguments
        //  arguements can be passed in on call to dispatch
        const response = yield call(requestGetOneProject, project_id);
        yield put(oneProject({...response as object}))
    }
    catch(err){

        console.log(err)
    }
}

export function* handleCreateProject(action: HandleCreateProjectType): SagaIterator{

    try{

        const body: HandleCreateProjectPayloadType = action.payload
        
        const response = yield call((requestCreateProject as any), body);
        yield put(createProject({...response }))
    }
    catch(err){

        console.log(err)
    }
}

export function* handleEditProject(action: HandleCreateProjectType): SagaIterator{

    try{

        const body: HandleCreateProjectPayloadType = action.payload
        
        const response = yield call((requestEditProject as any), body);
        
        yield put(editProject({...response }))
    }
    catch(err){

        console.log(err)
    }
}

export function* handleDeleteProject(action: HandleCreateProjectType): SagaIterator{

    try{

        const body: HandleCreateProjectPayloadType = action.payload

        console.log(body)
        
        const response = yield call((requestDeleteProject as any), body);
        console.log(response)
        yield put(deleteProject({...response }))
    }
    catch(err){

        console.log(err)
    }
}


