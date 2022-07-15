
import { CreateProjectType } from "../../types/project.type";

export function requestGetOneProject(project_id: string){
    
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project/${project_id}`, {
        
        method: "get",
        headers: { "Content-Type": "application/json"},
       
        
    })
    .then(responses =>  {
    
        return responses.json()
    })
    .catch(err => {

        return "NA"
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
    
        return responses.json()
    })
    .catch(err => {

        return "NA"
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
    
        return responses.json()
    })
    .catch(err => {

        return "NA"
    });

}

export function requestDeleteProject(project_id: string){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project`, {
        
        method: "delete",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({project_id: project_id})
       
        
    })
    .then(responses =>  {
    
        return responses.json()
    })
    .catch(err => {

        return "NA"
    });

}

