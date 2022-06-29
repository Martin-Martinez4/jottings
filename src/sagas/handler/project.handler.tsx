
import { call, CallEffect, put, PutEffect } from "redux-saga/effects";
import { oneProject } from "../../actions/projectSlice";
import { requestGetOneProject } from "../requests/project.request";


export function* handleGetProject(action: { payload: string; }): Generator<
    CallEffect<any> | PutEffect<{ payload: any; type: any; }>
>{

    const project_id: string = action.payload

    try{
        
        //  takes function name, arguments
        //  srguements can be passed in on call to dispatch
        const response = yield call(requestGetOneProject, project_id);
        // console.log(response)
        yield put(oneProject({...response as object}))
    }
    catch(err){

        console.log(err)
    }
}


