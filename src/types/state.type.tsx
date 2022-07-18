
import { ProjectType } from "./project.type";
import { AuthType } from "./auth.type";
import { errorAndLoadingType } from "./errorAndLoading.type";


export type StateType = {

    project: ProjectType,
    auth: AuthType,
    errorAndLoading: errorAndLoadingType,

}

