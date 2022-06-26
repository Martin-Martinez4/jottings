
import { call, put } from "redux-saga/effects";
import { requestCreateCategory, requestEditCategory, requestDeleteCategory } from "../requests/category.request";
import { createCategory, editCategory, deleteCategory } from "../../actions/projectSlice";

export function* handleCreateCategory(action){

    try{

        const response = yield call(requestCreateCategory, action.payload);
        yield put(createCategory({...response}))
    }
    catch(err){

        console.log(err)
    }
}

export function* handleEditCategory(action){

    try{

        const response = yield call(requestEditCategory, action.payload);
        yield put(editCategory({...response}))
    }
    catch(err){

        console.log(err)
    }
}
export function* handleDeleteCategory(action){

    try{

        const response = yield call(requestDeleteCategory, action.payload);
        yield put(deleteCategory({...response}))
    }
    catch(err){

        console.log(err)
    }
}


