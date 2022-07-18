import { ErrorWithStatusCode } from "../../types/customError.type";
import { HandleChangeTypePayloadType, HandleCreateTaskPayloadType, HandleDeleteTaskPayloadType, HandleEditTaskPayloadType } from "../../types/task.handler.type";


export function requestChangeType(body: HandleChangeTypePayloadType){

    if(body.category_id === body.target_category_id){

        return "NA"
    }
    
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/task`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {

        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when getting the project")

            error.statusCode = responses.status;

            throw error;
        }
            
        return responses.json()
    })
    .catch(err => {

         return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}

export function requestDeleteTask(body: HandleDeleteTaskPayloadType){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/task/`, {
        
        method: "delete",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {

        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when getting the project")

            error.statusCode = responses.status;

            throw error;
        }
            
        return responses.json()
    })
    .catch(err => {

            return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}

export function requestCreateTask(body: HandleCreateTaskPayloadType){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/task/`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {

        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when getting the project")

            error.statusCode = responses.status;

            throw error;
        }
            
        return responses.json()
    })
    .catch(err => {

            return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}

export function requestEditTask(body: HandleEditTaskPayloadType){
    /*
        Body:{
            "content",
            "title",
            "badges",
            "category_id",
            "project_id",
            "task_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/task/update`, {

        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {

        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when getting the project")

            error.statusCode = responses.status;

            throw error;
        }
        
        return responses.json()
    })
    .catch(err => {


        return {isError: true, message: err.message, statusCode: err.statusCode}
    });
}



