

export type CategoryType = {

    _id: string,
    title: string,
    index: number,

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
        title: string
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

    project: ProjectType

}



