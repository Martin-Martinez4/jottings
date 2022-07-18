
import { call, CallEffect, put, PutEffect } from "redux-saga/effects";
import { oneProject } from "../../actions/projectSlice";
import { createProject, deleteProject, editProject, Logout } from "../../actions/authSlice";
import { requestGetOneProject, requestCreateProject, requestEditProject, requestDeleteProject } from "../requests/project.request";
import { HandleCreateProjectPayloadType, HandleCreateProjectType, HandleDeleteProjectPayloadType, HandleDeleteProjectType } from "../../types/project.handler.types";
import { SagaIterator } from "@redux-saga/types";
import { errorMessage, IsLoading } from "../../actions/errorAndLoadingSlice";


export function* handleGetProject(action: { payload: string; }): Generator<
    CallEffect<any> | PutEffect<{ payload: any; type: any; }>
>{

    const project_id: string = action.payload

    try{
        
        //  takes function name, arguments

        yield put(IsLoading(true));
        
        const response = yield call(requestGetOneProject, project_id);

        yield put(oneProject(response as object))

    }
    catch(err){

        console.log(err)
    }
    finally{
        yield put(IsLoading(false));

    }
}

export function* handleCreateProject(action: HandleCreateProjectType): SagaIterator{

    try{

        const body: HandleCreateProjectPayloadType = action.payload
        
        const response = yield call((requestCreateProject as any), body);

        yield put(createProject(response));

    }
    catch(err){

        console.log(err)
    }
}

export function* handleEditProject(action: HandleCreateProjectType): SagaIterator{

    try{

        const body: HandleCreateProjectPayloadType = action.payload
        
        const response = yield call((requestEditProject as any), body);

        yield put(editProject(response));
        
    }
    catch(err){

        console.log(err)
    }
}

export function* handleDeleteProject(action: HandleDeleteProjectType): SagaIterator{

    try{

        const body: HandleDeleteProjectPayloadType = action.payload
        
        const response = yield call(requestDeleteProject, body);

        yield put(deleteProject(response));

    }
    catch(err){

        console.log(err)
    }
}


