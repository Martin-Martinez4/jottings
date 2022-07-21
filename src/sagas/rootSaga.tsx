
import { takeLatest, } from "redux-saga/effects";
import { handleClearProject, handleCreateProject, handleDeleteProject, handleEditProject, handleGetProject } from "./handler/project.handler";
import { getChangeType, getClearPoject } from "../actions/projectSlice";
import { 
        getProject, 
        getDeleteTask, getCreateTask, getEditTask,
        getCreateCategory, getEditCategory, getDeleteCategory, getChangeTaskOrder, getChangeCategoryOrder,
      } from "../actions/projectSlice";

import { getLogin, getUser, getSignup, getSignout, getCreateProject, getEditProject, getDeleteProject } from '../actions/authSlice';

import { handleChangeType, handleDeleteTask, handleCreateTask, handleEditTask } from "./handler/task.handler";
import { handleCreateCategory, handleEditCategory, handleDeleteCategory, handleChangeTaskOrder, handleChangeCategoryOrder } from "./handler/category.handler";
import { handleLogin, handleUser, handleSignup, handleSignout } from './handler/auth.handler';

export function* watcherSaga(){
    
    yield takeLatest((getProject.type as any), handleGetProject)
    yield takeLatest(getClearPoject.type, handleClearProject)
    yield takeLatest(getChangeType.type, handleChangeType)
    yield takeLatest(getDeleteTask.type, handleDeleteTask)
    yield takeLatest(getCreateTask.type, handleCreateTask)
    yield takeLatest(getEditTask.type, handleEditTask)
    yield takeLatest(getCreateCategory.type, handleCreateCategory)
    yield takeLatest(getEditCategory.type, handleEditCategory)
    yield takeLatest(getDeleteCategory.type, handleDeleteCategory)
    yield takeLatest(getChangeTaskOrder.type, handleChangeTaskOrder)
    yield takeLatest(getChangeCategoryOrder.type, handleChangeCategoryOrder)
    yield takeLatest(getLogin.type, handleLogin)
    yield takeLatest(getSignup.type, handleSignup)
    yield takeLatest(getSignout.type, handleSignout)
    yield takeLatest(getUser.type, handleUser)
    yield takeLatest(getCreateProject.type, handleCreateProject)
    yield takeLatest(getEditProject.type, handleEditProject)
    yield takeLatest(getDeleteProject.type, handleDeleteProject)
}
