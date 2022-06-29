
import React, { FC, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getChangeType, getChangeTaskOrder, getDeleteTask, getEditTask } from "../../actions/projectSlice";

import { Task, DraggableProps } from "../../types/draggableTypes";

import Close_Icon from "../Svg_Icons/Close_Icon/Close_Icon";
import Plus_Icon from "../Svg_Icons/Plus_Icon/Plus_Icon";
import Edit_Icon from "../Svg_Icons/Edit_Icon/Edit_Icon";

import "./draggable.css"
import { StateType } from "../../types/project.type";

// category_id and task _id are passed in
// useSelect to get task info
// store content and title in a temp local state
    //  Will be used for editing

const Draggable:FC<DraggableProps> = ({ task }) => {
    
    const [ taskInfo, setTaskInfo ] = useState<Task>();

    const [editVisible, setEditVisible] = useState(false);
    
    const task2 = useSelector((state: StateType) => state.project.tasks[task.category_id][task.id]);
    const project_id = useSelector((state: StateType) => state.project.project.project_id);

    const [ editContent, setEditContent ] = useState({

        content: `${task2.content}`,
        title: `${task2.title}`
    })

    

    const dispatch = useDispatch();

    const project = useSelector((state: StateType) => state.project.project)


    const onDragStart = (e: React.DragEvent<HTMLDivElement>, task: Task) => {

        e.stopPropagation();

        e.dataTransfer.setData("component_type", "task");
        e.dataTransfer.setData("id", task.id);
        e.dataTransfer.setData("taskName", task.taskName);
        e.dataTransfer.setData("type", task.type);
        e.dataTransfer.setData("category_id", task.category_id);
        e.dataTransfer.setData("original_index", task2.index.toString());


    }

    const onDelete = () => {

        if(project.project_id && task.id && task.category_id){

            dispatch(getDeleteTask({ project_id: project.project_id, task_id: task.id, category_id: task.category_id }));
        }
        else{

            return
        }

    }

    const toggleVisible = (setFunc: React.Dispatch<React.SetStateAction<any>>, currentState: boolean) => {

        setFunc(!currentState);

    }

    const onInputChange = (e: React.ChangeEvent<any>, setFunc: React.Dispatch<React.SetStateAction<any>>, CurrentState: object) => {


        setFunc((CurrentState: object) => ({...CurrentState, [e.target.name]: (e.target.value).toString()}))
    
        e.preventDefault();
    
        
    }

    const onEdit = async () => {

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

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {

        e.preventDefault();
        e.stopPropagation();
        
        const component_type = e.dataTransfer.getData("component_type")
        const id = e.dataTransfer.getData("id");
        const old_category_id = e.dataTransfer.getData("category_id");
        const original_index = parseInt(e.dataTransfer.getData("original_index"));

        const newType =  e.currentTarget.getAttribute("data-name");
        const target_category_id =  task.category_id;
        const target_index = task2.index

        // console.log("task_id: ", id);
        // console.log("old_category_id: ", old_category_id);
        // console.log("target_category_id: ", target_category_id);
        // console.log("original_index: ", original_index);
        // console.log("target_index: ", target_index);

        console.log(component_type)

        // if(component_type === "task"){

            if(old_category_id === target_category_id){
    
                dispatch(getChangeTaskOrder({ project_id: project.project_id, task_id: id, category_id: old_category_id, target_category_id: target_category_id, original_index: original_index, target_index: target_index }));
            }
            else{
    
                dispatch(getChangeType({ project_id: project.project_id, task_id: id, category_id: old_category_id, target_category_id: target_category_id, original_index: original_index, target_index: target_index }));
            }
        // }



        

        
        return
      };

    // const onIsDropped = (event: React.DragEvent<HTMLDivElement>) => {

    //     console.log(event.dataTransfer.getData("id"))
    //     console.log(event.dataTransfer.getData("taskName"))

    //     return

    // }

    return(

        <div
            key={task2._id}
            onDrop={e => handleDrop(e)} 
            onDragStart = {(event) => onDragStart(event, task)}
            draggable
            className="draggable"
        >
            <div className="draggable-heading-area">
                <div className="draggable-heading-top-bar">

                    <Close_Icon clicked={() => onDelete()} ></Close_Icon>
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
                            <span onClick={() => onEdit() }>Save</span><span>Cancel</span>
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

