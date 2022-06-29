
import { call, put } from "redux-saga/effects";
import { requestCreateCategory, requestEditCategory, requestDeleteCategory, requestChangeTaskOrder, requestChangeCategroyOrder } from "../requests/category.request";
import { createCategory, editCategory, deleteCategory, changeTaskOrder, changeCategoryOrder } from "../../actions/projectSlice";
import { SagaIterator } from "@redux-saga/types";

export function* handleCreateCategory(action: { payload: object; }): SagaIterator{

    try{

        const response = yield call(requestCreateCategory, action.payload);
        yield put(createCategory({...response}))
    }
    catch(err){

        console.log(err)
    }
}

export function* handleEditCategory(action: { payload: object; }): SagaIterator{

    try{

        const response = yield call(requestEditCategory, action.payload);
        yield put(editCategory({...response}))
    }
    catch(err){

        console.log(err)
    }
}
export function* handleDeleteCategory(action: { payload: object; }): SagaIterator{

    try{

        const response = yield call(requestDeleteCategory, action.payload);
        yield put(deleteCategory({...response}))
    }
    catch(err){

        console.log(err)
    }
}

export function* handleChangeTaskOrder(action: { payload: object; }): SagaIterator{

    try{

        const response = yield call(requestChangeTaskOrder, action.payload);
        yield put(changeTaskOrder({...response}))
    }
    catch(err){

        console.log(err)
    }
}

export function* handleChangeCategoryOrder(action: { payload: object; }): SagaIterator{

    try{

        const response = yield call(requestChangeCategroyOrder, action.payload);
        yield put(changeCategoryOrder({...response}))
    }
    catch(err){

        console.log(err)
    }
}


