
export enum TaskErrorMessages{
    
    CREATE_TASK= "An error occured when getting the project",
    CHANGING_TASK_CATEGORY= "An error occured when changing the task's category",
    DELETE_TASK= "An error occured when deleting the task",
    UPDATE_TASK= "An error occured when updating the task",

}


export enum ProjectErrorMessages{
    
    GET_PROJECT = "An error occured when getting the project",
    CREATE_PROJECT = "An error occured when creating the project",
    UPDATE_PROJECT = "An error occured when updating the project",
    DELETE_PROJECT = "An error occured when deleting the proejct",


}

export enum CategoryErrorMessages{

    CREATE_CATEGORY= "An error ocurred when creating the category",
    UPDATE_CATEGORY= "An error ocurred when updating the category",
    DELETE_CATEGORY= "An error ocurred when deleting the category",
    CHANGE_ORDER_CATEGORY= "An error ocurred when reordering categories",
    CHANGING_TASK_ORDER= "An error occured when changing the task order",

    
}

export enum AuthErrorMessages{

    GENERIC_AUTH_ERROR= "An Authentication Error has occured",
    SIGN_OUT= "An error occured when signing out",
    SIGN_IN= "An error occured when signing in"

    
}

export enum UserInfoErrorMessages{

    EMAIL_AVAILABLE = "An error occured when checking if email is available",
    USER_INFO = "An error occured when getting user information."

}


