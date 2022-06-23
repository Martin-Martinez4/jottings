
import { call, put } from "redux-saga/effects";
import { oneProject } from "../../actions/projectSlice";
import { requestGetOneProject } from "../requests/project.request";

export function* handleGetProject(action){

    const project_id = action.payload

    try{
        
        //  takes function name, arguments
        //  srguements can be passed in on call to dispatch
        const response = yield call(requestGetOneProject, project_id);
        const { data } = response;
        // console.log(response)
        yield put(oneProject({...response}))
    }
    catch(err){

        console.log(err)
    }
}


