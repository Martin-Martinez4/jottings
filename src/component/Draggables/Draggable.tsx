
import React, { FC, useState } from "react";

import { Task, DraggableProps } from "../../types/draggableTypes";


const Draggable:FC<DraggableProps> = ({ task }) => {

    const [ taskInfo, setTaskInfo ] = useState<Task>();


    const onDragStart = (event: React.DragEvent<HTMLDivElement>, task: Task) => {
    
        event.dataTransfer.setData("id", task.id);
        event.dataTransfer.setData("taskName", task.taskName);
        event.dataTransfer.setData("type", task.type);

    }

    // const onIsDropped = (event: React.DragEvent<HTMLDivElement>) => {

    //     console.log(event.dataTransfer.getData("id"))
    //     console.log(event.dataTransfer.getData("taskName"))

    //     return

    // }

    return(

        <div
            key={task.id} 
            onDragStart = {(event) => onDragStart(event, task)}
            // onDrop = {(event) => onIsDropped(event)}
            draggable
            className="draggable"
        >
            <h4>{task.taskName}</h4>
            <div>
                <p>{task.content}</p>

            </div>
        </div>
    )


}

export default Draggable

