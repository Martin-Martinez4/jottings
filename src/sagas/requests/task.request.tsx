
import { ResponseClass } from "../../types/responseClass.types";
import { TaskErrorMessages } from "../../types/errorMessage.types";
import { HandleChangeTypePayloadType, HandleCreateTaskPayloadType, HandleDeleteTaskPayloadType, HandleEditTaskPayloadType } from "../../types/task.handler.type";
import { processServerResponse } from "../../utils/proccessServerResponse";


export async function requestChangeType(body: HandleChangeTypePayloadType){

    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/task`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    });

    const changeTypeResponse = new ResponseClass(response, TaskErrorMessages.CHANGING_TASK_CATEGORY);

    return await processServerResponse(changeTypeResponse);

}

export async function requestDeleteTask(body: HandleDeleteTaskPayloadType){

    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/task/`, {
        
        method: "delete",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    });

    const deleteTaskResponse = new ResponseClass(response, TaskErrorMessages.DELETE_TASK);

    return await processServerResponse(deleteTaskResponse);
}

export async function requestCreateTask(body: HandleCreateTaskPayloadType){

    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/task/`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    });

    const createTaskResponse = new ResponseClass(response, TaskErrorMessages.CREATE_TASK);

    return await processServerResponse(createTaskResponse);
 
}

export async function requestEditTask(body: HandleEditTaskPayloadType){

    const response = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/task/update`, {

        
        method: "put",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    });

    const updateTaskResponse = new ResponseClass(response, TaskErrorMessages.UPDATE_TASK);

    return await processServerResponse(updateTaskResponse);
}



