
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCreateProject } from "../../actions/authSlice";
import { onInputChange } from "../../utils/onInputChange";
import { clearState } from "../../utils/clearState";
import { ButtonContainer, Input, PrimaryButton, RedButton, TextAreaParent } from "../../global.style";
import { CreateProjectPromptContainer } from "./CreateProjectPrompt.styles";

import { CKEditorEventPayload } from 'ckeditor4-react';
import CKEditor4 from "../CKEditor/CKEditor";


interface IConfirmCancelButtons {

    clickConfirm?: () => void;
    clickCancel?: () => void;
    children?: Element[] | Element | JSX.Element

}



const CreateProjectPrompt: React.FC<IConfirmCancelButtons> = ({ clickConfirm, clickCancel, children }) => {

    const dispatch = useDispatch()

    const [ newProject, setNewProject ] = useState({
        // later add team id
        title: "",
        description: "",
        logo_url: ""
    })

    
    const createProject = () => {
        
        
        const body={
                title: newProject.title,
                description: newProject.description,
                logo_url: newProject.logo_url
            }

        dispatch(getCreateProject(body))

        if(clickConfirm){

            clickConfirm()
        }

        clearState(setNewProject, newProject);

    }


    const inputHandler = (e: CKEditorEventPayload<"change">) => {
   

      setNewProject(state => ({...state, "description": e.editor.getData()}));
      

  };



    return (
        <CreateProjectPromptContainer>
            <>
                <h2>Input the project information</h2>
                <Input placeholder="Title" name="title" width={"70%"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, setNewProject, newProject)} value={newProject.title}></Input>
                <Input placeholder="Logo Url" name="logo_url" width={"70%"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, setNewProject, newProject)} value={newProject.logo_url}></Input>
           
                
                <TextAreaParent height="auto" >

                    <CKEditor4 placeholder={"Project Description"} inputHandler={inputHandler} />
                
                </TextAreaParent>

                <ButtonContainer>
                    <PrimaryButton onClick={() => createProject()} >Confirm</PrimaryButton>
                    <RedButton onClick={clickCancel? () => clickCancel() : () => {}} >Cancel</RedButton>
                </ButtonContainer>
            </>
        </CreateProjectPromptContainer>
    )

}

export default CreateProjectPrompt;


