
import { TaskType } from "./project.type";

export type EditTaskType = {

    type: string,
    payload: {
        category_id: string,
        message: string,
        new_task_object: {

            [task_id: string]: TaskType
        }
    }

}


