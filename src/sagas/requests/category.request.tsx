import { handleChangeCategoryOrderPayloadType, HandleChangeTaskOrderPayloadType, HandleCreateCategoryPayloadType, HandleDeleteCategoryPayloadType, HandleEditCategoryPayloadType } from "../../types/category.handler.types";
import { ErrorWithStatusCode } from "../../types/customError.type";

export function requestCreateCategory(body: HandleCreateCategoryPayloadType){
    /*
        Body:{
            "title",
            "project_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/`, {

        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {

        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when creating the category.")

            error.statusCode = responses.status;

            throw error;
        }
        

        return responses.json()
    })
    .catch(err => {

        return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}

export function requestDeleteCategory(body: HandleDeleteCategoryPayloadType){
    /*
        Body:{
            "category_id",
            "project_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/`, {

        
        method: "delete",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {

        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when deleting the category")

            error.statusCode = responses.status;

            throw error;
        }
        

        return responses.json()
    })
    .catch(err => {

        return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}

export function requestEditCategory(body: HandleEditCategoryPayloadType){
    /*
        Body:{
            "title",
            "category_id",
            "project_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/`, {

        
        method: "post",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when editing the category.")

            error.statusCode = responses.status;

            throw error;
        }
        

        return responses.json()
    })
    .catch(err => {

        return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}

export function requestChangeTaskOrder(body: HandleChangeTaskOrderPayloadType){
  /*
        Body:{
            "title",
            "category_id",
            "project_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/task/order`, {

    
        method: "post",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
        
    })
    .then(responses => {
        
        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when changing the task order.")

            error.statusCode = responses.status;

            throw error;
        }
        
        return responses.json()
    })
    .catch(err => {

        return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}

export function requestChangeCategroyOrder(body: handleChangeCategoryOrderPayloadType){
  /*
        Body:{
            "title",
            "category_id",
            "project_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/order`, {

    
        method: "post",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
        
    })
    .then(responses =>  {
        
        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when changing the Category order.")

            error.statusCode = responses.status;

            throw error;
        }

        return responses.json()
    })
    .catch(err => {

        return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}


