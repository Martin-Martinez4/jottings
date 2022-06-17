import { ReactElement } from "react";

export type Task =  { 
    id: string, 
    taskName: string;
    content: string;
    type: string;
}

export type DraggableProps = {

    task: Task;

}

export type DragAndDropProps = {

    name: string;
    draggables: ReactElement<any, string>[];
}
