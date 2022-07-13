
import { AuthType } from "./auth.type"

export type CategoryType = {

    _id: string,
    title: string,
    index: number,
    length: number;

}

export type TaskType = {

    _id: string,
    title: string,
    content: string,
    index: number,
    createdAt: string,
    updatedAt: string


}

export type ProjectType = {

    project: {

        project_id: string,
        title: string,
        length: number,
    },

    categories: {

        [category_id: string]: CategoryType
    },

    tasks: {

        [category_id: string]:{

            [task_id: string]: TaskType
        }

    }

}

export type StateType = {

    project: ProjectType,
    auth: AuthType

}



