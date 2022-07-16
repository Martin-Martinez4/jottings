
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onInputChange } from "../../utils/onInputChange";

import { getEditProject } from "../../actions/authSlice";
import { ButtonContainer, Input, PrimaryButton, RedButton, TextAreaParent } from "../../global.style";
import { EditPromptContainer } from "./EditProjectPrompt.styles";

import { CKEditor, CKEditorEventPayload } from 'ckeditor4-react';


interface IConfirmCancelButtons {

    clickConfirm?: (arg0?: any) => any;
    clickCancel?: (arg0?: any) => any;
    project: any;
    children?: Element[] | Element | JSX.Element;

}



const EditProjectPrompt: React.FC<IConfirmCancelButtons> = ({ clickConfirm, clickCancel, project, children }) => {

    const dispatch = useDispatch()

    const [ editValues, setEditValues ] = useState({

        project_id: project._id,
        title: project.title,
        logo_url: project.logo_url, 
        description: project.description
    })

    const inputHandler = (e: CKEditorEventPayload<"change">) => {

    setEditValues(state => ({...state, ["description"]: e.editor.getData()}));

    // setFunc((CurrentState: object) => ({...CurrentState, [e.target.name]: (e.target.value).toString()}))

    // e.preventDefault();

  };

  const editProject = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        e.preventDefault();
        e.stopPropagation();

        const body = {...editValues}

        dispatch(getEditProject(body));

        if(clickConfirm){

            clickConfirm()
        }

    }

    return (
        <EditPromptContainer>
            <>
                <h2>Input the project information</h2>
                <Input placeholder="Title" name="title" width={"70%"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, setEditValues, editValues)} value={editValues.title}></Input>
                <Input placeholder="Logo Url" name="logo_url" width={"70%"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, setEditValues, editValues)} value={editValues.logo_url}></Input>
              
                <TextAreaParent height="auto" >
                <CKEditor 
                    initData={editValues.description} 
                    onChange={(e) => inputHandler(e)}
                    type="classic"
                    config={{
                    toolbar: [
                        ['Table'],
                        [ 'Format', 'Font', 'FontSize' ],
                        [ 'Bold', 'Italic' ],
                        ['BulletedList', 'NumberedList'], 
                        [ 'Undo', 'Redo' ],
            
                    ],
                    width: '75%',
                    
                    }} 
                />
                </TextAreaParent>

                <ButtonContainer>
                    <PrimaryButton onClick={(e) => editProject(e)} >Confirm</PrimaryButton>
                    <RedButton onClick={clickCancel? () => clickCancel() : () => {}} >Cancel</RedButton>
                </ButtonContainer>
            </>
        </EditPromptContainer>
    )

}

export default EditProjectPrompt;
