
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCreateProject } from "../../actions/authSlice";
import { onInputChange } from "../../utils/onInputChange";
import { clearState } from "../../utils/clearState";
import { ButtonContainer, Input, PrimaryButton, RedButton, TextArea } from "../../global.style";
import { CreateProjectPromptContainer } from "./CreateProjectPrompt.styles";

interface IConfirmCancelButtons {

    clickConfirm?: (arg0?: any) => any;
    clickCancel?: (arg0?: any) => any;
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


    return (
        <CreateProjectPromptContainer>
            <>
                <h2>Input the project information</h2>
                <Input placeholder="Title" name="title" width={"70%"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, setNewProject, newProject)} value={newProject.title}></Input>
                <Input placeholder="Logo Url" name="logo_url" width={"70%"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, setNewProject, newProject)} value={newProject.logo_url}></Input>
                <TextArea placeholder="Description" name="description" width={"70%"} cols={20} rows={10} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onInputChange(e, setNewProject, newProject)} value={newProject.description}></TextArea>
                <ButtonContainer>
                    <PrimaryButton onClick={() => createProject()} >Confirm</PrimaryButton>
                    <RedButton onClick={clickCancel? () => clickCancel() : () => {}} >Cancel</RedButton>
                </ButtonContainer>
            </>
        </CreateProjectPromptContainer>
    )

}

export default CreateProjectPrompt;


