
import { call, put } from "redux-saga/effects";
import { requestCreateCategory, requestEditCategory, requestDeleteCategory, requestChangeTaskOrder, requestChangeCategroyOrder } from "../requests/category.request";
import { createCategory, editCategory, deleteCategory, changeTaskOrder, changeCategoryOrder } from "../../actions/projectSlice";
import { SagaIterator } from "@redux-saga/types";
import { handleChangeCategoryOrderType, HandleChangeTaskOrderType, HandleCreateCategoryType, HandleDeleteCategoryType, HandleEditCategoryType } from "../../types/category.handler.types";
import { errorMessage } from "../../actions/errorAndLoadingSlice";

export function* handleCreateCategory(action: HandleCreateCategoryType): SagaIterator{


    try{

        const response = yield call(requestCreateCategory, action.payload);

        yield put(createCategory({...response}))

    }
    catch(err){

        console.log(err)
    }
}

export function* handleEditCategory(action: HandleEditCategoryType): SagaIterator{

    try{

        const response = yield call(requestEditCategory, action.payload);

        yield put(editCategory({...response}))

    }
    catch(err){

        console.log(err)
    }
}
export function* handleDeleteCategory(action: HandleDeleteCategoryType): SagaIterator{


    try{

        const response = yield call(requestDeleteCategory, action.payload);

        yield put(deleteCategory({...response}))

    }
    catch(err){

        console.log(err)
    }
}

export function* handleChangeTaskOrder(action: HandleChangeTaskOrderType): SagaIterator{

    try{

        const response = yield call(requestChangeTaskOrder, action.payload);

        yield put(changeTaskOrder({...response}))

    }
    catch(err){

        console.log(err)
    }
}

export function* handleChangeCategoryOrder(action: handleChangeCategoryOrderType): SagaIterator{

    try{

        const response = yield call(requestChangeCategroyOrder, action.payload);

        yield put(changeCategoryOrder({...response}))

    }
    catch(err){

        console.log(err)
    }
}


