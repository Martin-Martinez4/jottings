
export type HandleChangeTypePayloadType = {

    category_id: string,
    original_index: number,
    project_id: string
    target_category_id: string,
    target_index: number,
    task_id: string


}
export type HandleChangeTypeType = {

    type: "project/getChangeType",
    payload: HandleChangeTypePayloadType

    
}

export type HandleDeleteTaskPayloadType = {

    category_id: string,
    project_id: string,
    task_id: string


}
export type HandleDeleteTaskType = {

    type: "project/getDeleteTask",
    payload: HandleDeleteTaskPayloadType

    
}

export type HandleCreateTaskPayloadType = {

    category_id: string,
    content: string,
    project_id: string,
    title: string,


}
export type HandleCreateTaskType = {

    type: "project/getCreateTask",
    payload: HandleCreateTaskPayloadType

    
}

export type HandleEditTaskPayloadType = {

        badges: [],
        category_id: string,
        content: string,
        project_id: string,
        task_id: string,
        title: string,


}
export type HandleEditTaskType = {

    type: "project/getEditTask",
    payload: HandleEditTaskPayloadType

    
}


