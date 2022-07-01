
import React, { FC, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getChangeType, getChangeTaskOrder, getDeleteTask, getEditTask } from "../../actions/projectSlice";

import { TopBar, DraggableContainer } from "./draggables.styles";

import { Task, DraggableProps } from "../../types/draggableTypes";

import { Input, TextArea, ButtonContainer, PrimaryButton, RedButton } from "../../global.style";

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
    const [deleteVisible, setDeleteVisible] = useState(false);

    
    const task2 = useSelector((state: StateType) => state.project.tasks[task.category_id][task.id]);
    const project_id = useSelector((state: StateType) => state.project.project.project_id);

    const [ editContent, setEditContent ] = useState({

        content: `${task2.content}`,
        title: `${task2.title}`
    })

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
      };
    
      const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
      };
    
      const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
      };

    

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

        if(component_type === "task"){

            if(old_category_id === target_category_id){
    
                dispatch(getChangeTaskOrder({ project_id: project.project_id, task_id: id, category_id: old_category_id, target_category_id: target_category_id, original_index: original_index, target_index: target_index }));
            }
            else{
    
                dispatch(getChangeType({ project_id: project.project_id, task_id: id, category_id: old_category_id, target_category_id: target_category_id, original_index: original_index, target_index: target_index }));
            }
        }



        

        
        return
      };

    return(

        <DraggableContainer
            key={task2._id}
            onDrop={e => handleDrop(e)} 
            onDragStart = {(event) => onDragStart(event, task)}
            draggable
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}
            >
            <div className="draggable-heading-area">
                <TopBar>

                    <Close_Icon clicked={() => toggleVisible(setDeleteVisible, deleteVisible)} title={"Delete Task"} ></Close_Icon>
                    <Edit_Icon clicked={(e) => toggleVisible(setEditVisible, editVisible)} title={"Edit Task"}></Edit_Icon>
                    <div className="close"></div>
                    <div className="math-plus"></div>
                    <div className="close"></div>
                </TopBar>
                {
                    editVisible
                    ?
                        <Input name="title" value={`${editContent.title}`}  onChange={(e) => onInputChange(e, setEditContent, editContent)}></Input>
                    :
                    <span>{task2.title}</span>
                }
            </div>
            <div>
                    {
                        editVisible
                        ?
                        <div>
                            <TextArea name="content" value={`${editContent.content}`} onChange={(e) => onInputChange(e, setEditContent, editContent)} cols={20} rows={10}></TextArea>
                            <ButtonContainer>

                                <PrimaryButton onClick={() => onEdit() }>Save</PrimaryButton>
                                <RedButton onClick={() => toggleVisible(setEditVisible, editVisible)} >Cancel</RedButton>
                            </ButtonContainer>
                        </div>
                        :
                        <p>
                           {task2.content}
                        </p>
                    }
                    {
                        deleteVisible
                        ?
                        <div>
                            <p>Delete Task?</p>
                            <ButtonContainer>

                                <PrimaryButton onClick={() => onDelete() }>Delete</PrimaryButton>
                                <RedButton onClick={() => toggleVisible(setDeleteVisible, deleteVisible)} >Cancel</RedButton>
                            </ButtonContainer>
                        </div>
                        :
                        ""
                    }

            </div>
        </DraggableContainer>
    )


}

export default Draggable

