import { ReactElement } from "react";

export type Task =  { 
    id: string, 
    taskName: string;
    content: string;
    type: string;
    category_id: string;
}

export type DraggableProps = {

    task: Task;
    dropDownCategories: any;

}

export type DragAndDropProps = {

    name: string;
    id: string;
    draggables?: ReactElement<any, string>[];
    dropDownCategories: any,
}
