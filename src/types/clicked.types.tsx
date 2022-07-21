
import { TaskType } from "./project.type";

export type withClickedType = {

    clicked?: (e: React.MouseEvent<any>) => any;
}


export interface IConfirmCancelButtons {

    clickConfirm?: (() => void )|( (arg?: any) => void);
    clickCancel?:(() => void) |( (arg?: any) => void);
    project?: any;
    task?: TaskType;
    category_id?: string;
    children?: Element[] | Element | JSX.Element | JSX.Element[];

}

