
import { takeLatest } from "redux-saga/effects";
import { handleGetProject } from "./handler/project.handler";
import { getChangeType } from "../actions/taskSlice";
import { getProject } from "../actions/projectSlice";
import { handleChangeType } from "./handler/task.handler";
export function* watcherSaga(){

    yield takeLatest(getProject.type, handleGetProject)
    yield takeLatest(getChangeType.type, handleChangeType)
}


