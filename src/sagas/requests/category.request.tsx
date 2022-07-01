import { handleChangeCategoryOrderPayloadType, HandleChangeTaskOrderPayloadType, HandleCreateCategoryPayloadType, HandleDeleteCategoryPayloadType, HandleEditCategoryPayloadType } from "../../types/category.handler.types";

export function requestCreateCategory(body: HandleCreateCategoryPayloadType){
    /*
        Body:{
            "title",
            "project_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/`, {

        
        method: "put",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
            return responses.json()
        })
        .catch(err => {
    
            return "NA"
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
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
            return responses.json()
        })
        .catch(err => {
    
            return "NA"
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
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
            return responses.json()
        })
        .catch(err => {
    
            return "NA"
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
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
        
    })
    .then(responses =>  {
        
            return responses.json()
    })
    .catch(err => {

        return "NA"
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
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
        
    })
    .then(responses =>  {
        
            return responses.json()
    })
    .catch(err => {

        return "NA"
    });
}


