
import { CreateProjectType } from "../../types/project.type";
import { ErrorWithStatusCode } from "../../types/customError.type";
import { HandleDeleteProjectPayloadType } from "../../types/project.handler.types";

export function requestGetOneProject(project_id: string){
    
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project/${project_id}`, {
        
        method: "get",
        headers: { "Content-Type": "application/json"},
       
        
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

export function requestCreateProject(body: CreateProjectType){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project`, {
        
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

export function requestEditProject(body: CreateProjectType){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project`, {
        
        method: "post",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
        
    })
    .then(responses =>  {

        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error("Authentication Error") : new Error("An error occured when editing the project")

            error.statusCode = responses.status;

            throw error;
        }
    
        return responses.json()
    })
    .catch(err => {

        return {isError: true, message: err.message, statusCode: err.statusCode}
    });

}

export function requestDeleteProject(project_id: HandleDeleteProjectPayloadType){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project`, {
        
        method: "delete",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({project_id: project_id})
       
        
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

