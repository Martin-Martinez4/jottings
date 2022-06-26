
import React, { FC, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getDeleteTask, getEditTask } from "../../actions/projectSlice";

import { Task, DraggableProps } from "../../types/draggableTypes";

import Close_Icon from "../Svg_Icons/Close_Icon/Close_Icon";
import Plus_Icon from "../Svg_Icons/Plus_Icon/Plus_Icon";
import Edit_Icon from "../Svg_Icons/Edit_Icon/Edit_Icon";

import "./draggable.css"

// category_id and task _id are passed in
// useSelect to get task info
// store content and title in a temp local state
    //  Will be used for editing

const Draggable:FC<DraggableProps> = ({ task }) => {
    
    const [ taskInfo, setTaskInfo ] = useState<Task>();

    const [editVisible, setEditVisible] = useState(false);
    
    const task2 = useSelector(state => state.project.tasks[task.category_id][task.id]);
    const project_id = useSelector(state => state.project.project.project_id);

    const [ editContent, setEditContent ] = useState({

        content: `${task2.content}`,
        title: `${task2.title}`
    })

    

    const dispatch = useDispatch();

    const project = useSelector(state => state.project.project)


    const onDragStart = (event: React.DragEvent<HTMLDivElement>, task: Task) => {
    
        event.dataTransfer.setData("id", task.id);
        event.dataTransfer.setData("taskName", task.taskName);
        event.dataTransfer.setData("type", task.type);
        event.dataTransfer.setData("category_id", task.category_id);

    }

    const onDelete = (e) => {

        if(project.project_id && task.id && task.category_id){

            dispatch(getDeleteTask({ project_id: project.project_id, task_id: task.id, category_id: task.category_id }));
        }
        else{

            return
        }

    }

    const toggleVisible = (setFunc, currentState) => {

        setFunc(!currentState);

    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, setFunc, CurrentState) => {


        setFunc(CurrentState => ({...CurrentState, [e.target.name]: (e.target.value).toString()}))
    
        e.preventDefault();
    
        
    }

    const onEdit = async (e) => {

        const body = {

            content: editContent.content,
            title: editContent.title,
            project_id: project_id,
            category_id: task.category_id,
            task_id: task.id,
            badges: []
        }


        dispatch(getEditTask(body))

        toggleVisible(setEditVisible ,editVisible)

        return

    }

    // const onIsDropped = (event: React.DragEvent<HTMLDivElement>) => {

    //     console.log(event.dataTransfer.getData("id"))
    //     console.log(event.dataTransfer.getData("taskName"))

    //     return

    // }

    return(

        <div
            key={task2._id} 
            onDragStart = {(event) => onDragStart(event, task)}
            // onDrop = {(event) => onIsDropped(event)}
            draggable
            className="draggable"
        >
            <div className="draggable-heading-area">
                <div className="draggable-heading-top-bar">

                    <Close_Icon clicked={(e) => onDelete(e)} ></Close_Icon>
                    <Edit_Icon clicked={(e) => toggleVisible(setEditVisible, editVisible)} ></Edit_Icon>
                    <div className="close"></div>
                    <div className="math-plus"></div>
                    <div className="close"></div>
                </div>
                {
                    editVisible
                    ?
                        <input name="title" value={`${editContent.title}`}  onChange={(e) => onInputChange(e, setEditContent, editContent)}></input>
                    :
                    <h4>{task2.title}</h4>
                }
            </div>
            <div>
                    {
                        editVisible
                        ?
                        <div>
                            <textarea name="content" value={`${editContent.content}`} onChange={(e) => onInputChange(e, setEditContent, editContent)} cols={20} rows={10}></textarea>
                            <span onClick={(e) => onEdit(e) }>Save</span><span>Cancel</span>
                        </div>
                        :
                        <p>
                           {task2.content}
                        </p>
                    }

            </div>
        </div>
    )


}

export default Draggable

