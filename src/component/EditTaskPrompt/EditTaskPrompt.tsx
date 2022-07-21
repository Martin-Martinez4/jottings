
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEditTask } from "../../actions/projectSlice";

import { onInputChange } from "../../utils/onInputChange";

import { ButtonContainer, Input, PrimaryButton, RedButton, TextAreaParent } from "../../global.style";
import { EditPromptContainer } from "./EditTaskPrompt.styles";

import { IConfirmCancelButtons } from "../../types/clicked.types";
import { StateType } from "../../types/state.type";

import CKEditor4 from "../CKEditor/CKEditor";

import { CKEditorEventPayload } from 'ckeditor4-react';


const EditTaskPrompt: React.FC<IConfirmCancelButtons> = ({ clickConfirm, clickCancel, task, category_id }) => {

    const dispatch = useDispatch()

    const project = useSelector((state: StateType) => state.project.project)

    const [ editTaskValues, setEditTaskValues ] = useState({

        project_id: project.project_id,
        category_id: category_id,
        task_id: task?._id,
        title: task?.title,
        content: task?.content,

    });

    // console.log(editTaskValues)


    const inputHandler = (e: CKEditorEventPayload<"change">) => {

    setEditTaskValues(state => ({...state, "content": e.editor.getData()}));



  };

  const editProject = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        e.preventDefault();
        e.stopPropagation();

        const body = {...editTaskValues}

        dispatch(getEditTask(body));

        if(clickConfirm){

            clickConfirm()
        }

    }

    return (
        <EditPromptContainer>
            <>
                <h2>Input the project information</h2>
                <Input placeholder="Title" name="title" width={"70%"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, setEditTaskValues, editTaskValues)} value={editTaskValues.title}></Input>
               
              
                <TextAreaParent height="auto" >
                    <CKEditor4 initData={editTaskValues.content} inputHandler={inputHandler} ></CKEditor4>
                </TextAreaParent>

                <ButtonContainer>
                    <PrimaryButton onClick={(e) => editProject(e)} >Confirm</PrimaryButton>
                    <RedButton onClick={clickCancel? () => clickCancel() : () => {}} >Cancel</RedButton>
                </ButtonContainer>
            </>
        </EditPromptContainer>
    )

}

export default EditTaskPrompt;

