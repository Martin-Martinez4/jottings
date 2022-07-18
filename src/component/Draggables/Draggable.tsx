
import React, { FC, Suspense, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getChangeType, getChangeTaskOrder, getDeleteTask } from "../../actions/projectSlice";

import { TopBar, DraggableContainer } from "./draggables.styles";

import { Task, DraggableProps } from "../../types/draggableTypes";
import { toggleState } from "../../utils/toggleState";

import { DropDownParent, DropDownContainer } from "../DragAndDrop/dragAndDrop.styles";

import { Input, ButtonContainer, PrimaryButton, RedButton, ThinnerShorterPromptContainer } from "../../global.style";

import ModalHOC from "../ModalHOC/ModalHOC";
import CloseIcon from "../Svg_Icons/CloseIcon/CloseIcon";
import EditIcon from "../Svg_Icons/EditIcon/EditIcon";
import MoveIcon from "../Svg_Icons/MoveIcon/MoveIcon";

import "./draggable.css"
import { StateType } from "../../types/state.type";

const EditTaskPrompt = React.lazy(() => import("../EditTaskPrompt/EditTaskPrompt"));
    
const Draggable:FC<DraggableProps> = ({ task, dropDownCategories }) => {


    
    const [ menuVisible, setMenuVisible ] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [ buttonMoveIndexAndCategory, setButtonMoveIndexAndCategory ] = useState<{target_index: undefined | number, target_category_id: string}>({

        target_index: undefined,
        target_category_id: ""
    })

    
    const task2 = useSelector((state: StateType) => state.project.tasks[task.category_id][task.id]);
    const category = useSelector((state: StateType) => state.project.categories[task.category_id])
    const categories = useSelector((state: StateType) => state.project.categories)
  

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

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {

        e.preventDefault();
        e.stopPropagation();
        
        const component_type = e.dataTransfer.getData("component_type")
        const id = e.dataTransfer.getData("id");
        const old_category_id = e.dataTransfer.getData("category_id");
        const original_index = parseInt(e.dataTransfer.getData("original_index"));

        // const newType =  e.currentTarget.getAttribute("data-name");
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

    const moveByButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        e.preventDefault();
        e.stopPropagation();
        
        const component_type = "task"
        const id = task2._id
        const old_category_id = task.category_id
        const original_index = task2.index;

        const target_category_id =  buttonMoveIndexAndCategory.target_category_id;
        const target_index = buttonMoveIndexAndCategory.target_index;

        if((target_category_id === undefined && target_index === undefined) || (target_index === undefined) || (target_index >= categories[target_category_id]["length"]) || (target_index < 0)){

            return


        }

        if(component_type === "task"){

            if(old_category_id === target_category_id || target_category_id === undefined){
    
                dispatch(getChangeTaskOrder({ project_id: project.project_id, task_id: id, category_id: old_category_id, target_category_id: target_category_id, original_index: original_index, target_index: target_index }));
            }
            else{
    
                dispatch(getChangeType({ project_id: project.project_id, task_id: id, category_id: old_category_id, target_category_id: target_category_id, original_index: original_index, target_index: target_index }));
            }
        }


        return
      };

      const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        setButtonMoveIndexAndCategory(state => ({...state, "target_category_id": e.target.value}))

      }

      const onIndexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const target_index= e.target.value === undefined ? undefined : parseInt(e.target.value);

        setButtonMoveIndexAndCategory(state => ({...state, "target_index": target_index}))

      }

    return(
        <>

        {
            deleteVisible
            ?
                <ModalHOC visible={deleteVisible}>
                    <ThinnerShorterPromptContainer>
                        <p style={{ wordBreak: "break-word" }}>Delete Task: {task2.title}?</p>
                        <ButtonContainer>

                            <PrimaryButton onClick={() => onDelete() }>Delete</PrimaryButton>
                            <RedButton onClick={() => toggleVisible(setDeleteVisible, deleteVisible)} >Cancel</RedButton>
                        </ButtonContainer>
                    </ThinnerShorterPromptContainer>
                </ModalHOC>
            : ""

        }
        {
            editVisible
            ?
                <ModalHOC visible={editVisible}>
                    <Suspense  fallback={<div>Loading...</div>}>

                        <EditTaskPrompt 
                            task={task2} 
                            category_id={task.category_id }
                            clickConfirm={(e) => toggleState(setEditVisible, editVisible, e)} 
                            clickCancel={(e) => toggleState(setEditVisible, editVisible, e)}
                            >

                        </EditTaskPrompt>
                    </Suspense>
                </ModalHOC>
            : ""

        }

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

                    <CloseIcon clicked={() => toggleVisible(setDeleteVisible, deleteVisible)} title={"Delete Task"} ></CloseIcon>
                    <EditIcon clicked={() => toggleVisible(setEditVisible, editVisible)} title={"Edit Task"}></EditIcon>

                    <MoveIcon clicked={() => toggleState(setMenuVisible, menuVisible)} title={"Move Task"}></MoveIcon>
                    <DropDownParent>
                        {
                        menuVisible === true
                        ?

                            <DropDownContainer>
                                <div>

                                    <p>Choose a category to move the task to</p>
                                    <select name="categories" id="categories" onChange={(e) => onSelectChange(e)}>

                                    {
                                        dropDownCategories
                                    }
                                    </select>

                                    <div>
                                        
                                        <p>Pick an index between 0 and {buttonMoveIndexAndCategory.target_category_id ? categories[buttonMoveIndexAndCategory.target_category_id]["length"] : category.length} to change position</p>
                                        <div style={{ display: "flex", justifyContent: "space-around",  }}>

                                            <Input type="number" width="3rem" min="0" max={`${category.length}`} onChange={(e) => onIndexInputChange(e)}></Input>
                                        </div>
                                    </div>

                                    <ButtonContainer style={{ display: "flex", justifyContent: "center",  }}>
                                        <PrimaryButton onClick={(e) => moveByButton(e)}>Confirm</PrimaryButton>
                                        <RedButton onClick={() => toggleState(setMenuVisible, menuVisible)}>Cancel</RedButton>
                                    </ButtonContainer>

                                </div>
                                
                            </DropDownContainer>

                        :
                            ""
                        }
                    </DropDownParent>
                </TopBar>
                
                <span style={{ wordBreak: "break-word" }}>{task2.title}</span>
            </div>
            <div style={{overflow: "hidden"}}>
                    
                <div dangerouslySetInnerHTML={{__html: `${task2.content}`}} />

            </div>
        </DraggableContainer>
        </>
    )


}

export default Draggable

