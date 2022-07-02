
import { take, takeLatest } from "redux-saga/effects";
import { handleGetProject } from "./handler/project.handler";
import { getChangeType } from "../actions/projectSlice";
import { 
        getProject, 
        getDeleteTask, getCreateTask, getEditTask,
        getCreateCategory, getEditCategory, getDeleteCategory, getChangeTaskOrder, getChangeCategoryOrder
        } from "../actions/projectSlice";

import { handleChangeType, handleDeleteTask, handleCreateTask, handleEditTask } from "./handler/task.handler";
import { handleCreateCategory, handleEditCategory, handleDeleteCategory, handleChangeTaskOrder, handleChangeCategoryOrder } from "./handler/category.handler";
export function* watcherSaga(){
    
    yield takeLatest(getProject.type, handleGetProject)
    yield takeLatest(getChangeType.type, handleChangeType)
    yield takeLatest(getDeleteTask.type, handleDeleteTask)
    yield takeLatest(getCreateTask.type, handleCreateTask)
    yield takeLatest(getEditTask.type, handleEditTask)
    yield takeLatest(getCreateCategory.type, handleCreateCategory)
    yield takeLatest(getEditCategory.type, handleEditCategory)
    yield takeLatest(getDeleteCategory.type, handleDeleteCategory)
    yield takeLatest(getChangeTaskOrder.type, handleChangeTaskOrder)
    yield takeLatest(getChangeCategoryOrder.type, handleChangeCategoryOrder)
}


