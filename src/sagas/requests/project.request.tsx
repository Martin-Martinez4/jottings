
import { CreateProjectType } from "../../types/project.type";
import { HandleDeleteProjectPayloadType } from "../../types/project.handler.types";
import { ResponseClass } from "../../types/responseClass.types";
import { processServerResponse } from "../../utils/proccessServerResponse";
import { ProjectErrorMessages } from "../../types/errorMessage.types";

export async function requestGetOneProject(project_id: string){
    
    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project/${project_id}`, {
        
        method: "get",
        headers: { "Content-Type": "application/json"},
       
        
    });

    const getProjectResponse = new ResponseClass(response, ProjectErrorMessages.GET_PROJECT);

    return await processServerResponse(getProjectResponse);
}

export async function requestCreateProject(body: CreateProjectType){

    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
        
    });

    const createProjectResponse = new ResponseClass(response, ProjectErrorMessages.CREATE_PROJECT);

    return await processServerResponse(createProjectResponse);

}

export async function requestEditProject(body: CreateProjectType){

    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project`, {
        
        method: "post",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
        
    });

    const updateProjectResponse = new ResponseClass(response, ProjectErrorMessages.UPDATE_PROJECT);

    return await processServerResponse(updateProjectResponse);

}

export async function requestDeleteProject(project_id: HandleDeleteProjectPayloadType){

    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project`, {
        
        method: "delete",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({project_id: project_id})
       
        
    });

    const deleteProjectResponse = new ResponseClass(response, ProjectErrorMessages.DELETE_PROJECT);

    return await processServerResponse(deleteProjectResponse);

}

