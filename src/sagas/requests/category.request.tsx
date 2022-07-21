
import { ResponseClass } from "../../types/responseClass.types";
import { CategoryErrorMessages } from "../../types/errorMessage.types";
import { processServerResponse } from "../../utils/proccessServerResponse";
import { handleChangeCategoryOrderPayloadType, HandleChangeTaskOrderPayloadType, HandleCreateCategoryPayloadType, HandleDeleteCategoryPayloadType, HandleEditCategoryPayloadType } from "../../types/category.handler.types";

export async function requestCreateCategory(body: HandleCreateCategoryPayloadType){
    /*
        Body:{
            "title",
            "project_id",
        }
    */
    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/`, {

        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    });

    const createCategoryResponse = new ResponseClass(response, CategoryErrorMessages.CREATE_CATEGORY);

    return await processServerResponse(createCategoryResponse);
}

export async function requestDeleteCategory(body: HandleDeleteCategoryPayloadType){
    /*
        Body:{
            "category_id",
            "project_id",
        }
    */
    const response =  fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/`, {

        
        method: "delete",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    });

    const deleteCategoryResponse = new ResponseClass(response, CategoryErrorMessages.DELETE_CATEGORY);

    return await processServerResponse(deleteCategoryResponse);
}

export async function requestEditCategory(body: HandleEditCategoryPayloadType){
    /*
        Body:{
            "title",
            "category_id",
            "project_id",
        }
    */
    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/`, {

        
        method: "post",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    });

    const editCategoryResponse = new ResponseClass(response, CategoryErrorMessages.UPDATE_CATEGORY);

    return await processServerResponse(editCategoryResponse);
}

export async function requestChangeTaskOrder(body: HandleChangeTaskOrderPayloadType){
  /*
        Body:{
            "title",
            "category_id",
            "project_id",
        }
    */
    const response =  fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/task/order`, {

    
        method: "post",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
        
    });

    const changeTaskOrderResponse = new ResponseClass(response, CategoryErrorMessages.CHANGING_TASK_ORDER);

    return await processServerResponse(changeTaskOrderResponse);
}

export async function requestChangeCategroyOrder(body: handleChangeCategoryOrderPayloadType){
  /*
        Body:{
            "title",
            "category_id",
            "project_id",
        }
    */
    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/order`, {

    
        method: "post",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
        
    });

    const changeCategoryOrderResponse = new ResponseClass(response, CategoryErrorMessages.CHANGE_ORDER_CATEGORY);

    return await processServerResponse(changeCategoryOrderResponse);

}
