
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toggleState } from "../../utils/toggleState";
import { onInputChange } from "../../utils/onInputChange";

import CloseIcon from "../Svg_Icons/CloseIcon/CloseIcon";
import Edit_Icon from "../Svg_Icons/Edit_Icon/Edit_Icon";

import { ButtonContainer, RedButton, PrimaryButton, Input, TextArea } from "../../global.style";
import { CreateNewPrompt } from "../DragAndDrop/dragAndDrop.styles";

import { TopBar } from "../../component/Draggables/draggables.styles";
import { ProjectInforamtionContainer } from "./ProjectCard.style";
import { ProjectDescriptionType } from "../../types/auth.type";

import { getProject } from "../../actions/projectSlice";
import { getDeleteProject, getEditProject } from "../../actions/authSlice";

interface IWithProject {
    project: ProjectDescriptionType;
}

const ProjectCard: React.FC<IWithProject> = ({ project }) => {

    const dispatch =useDispatch();
    const navigate = useNavigate();

    const [ deletePromptVisible, setDeletePromptVisible ] = useState(false);
    const [ editPromptVisible, setEditPromptVisible ] = useState(false);
    const [ editValues, setEditValues ] = useState({

        project_id: project._id,
        title: project.title,
        logo_url: project.logo_url, 
        description: project.description
    })

    function handleGoToProject(e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>){

        e.preventDefault();
        e.stopPropagation();

        const el = e.target as HTMLDivElement

        const project_id = el.getAttribute("data-id");

        if(project_id){

            dispatch(getProject(project_id));
    
            navigate("/project");
        }   

    }

    const deleteProject = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        e.preventDefault();
        e.stopPropagation();
        
        const project_id = editValues.project_id;

        dispatch(getDeleteProject(project_id));

        toggleState(setDeletePromptVisible, deletePromptVisible);




    }

    const editProject = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        e.preventDefault();
        e.stopPropagation();

        const body = {...editValues}

        dispatch(getEditProject(body));

        toggleState(setEditPromptVisible, editPromptVisible)

    }

    return (
        <ProjectInforamtionContainer data-id={project._id.toString()} onClick={(e) => handleGoToProject(e)}>
            <TopBar>

                <CloseIcon  data-id={project._id.toString()} clicked={(e) => toggleState(setDeletePromptVisible, deletePromptVisible, e)} title={"Delete Project"} ></CloseIcon>
                <Edit_Icon data-id={project._id.toString()} clicked={(e) => toggleState(setEditPromptVisible, editPromptVisible, e)}></Edit_Icon>
            </TopBar>
            {
                editPromptVisible 
                ?
                <CreateNewPrompt>
                <Input name="title" value={`${editValues.title}`} onChange={(e) => onInputChange(e, setEditValues, editValues)}></Input>
                <Input name="logo_url" value={`${editValues.logo_url}`} onChange={(e) => onInputChange(e, setEditValues, editValues)}></Input>
                <TextArea name="description" value={`${editValues.description}`} onChange={(e) => onInputChange(e, setEditValues, editValues)}></TextArea>
                <ButtonContainer>

                    <PrimaryButton onClick={(e) => editProject(e)} >Save</PrimaryButton>
                    <RedButton onClick={(e) => toggleState(setEditPromptVisible, editPromptVisible, e)}>Cancel</RedButton>

                </ButtonContainer>
                </CreateNewPrompt>
                :
                <div>

                    <p data-id={project._id.toString()} onClick={(e) => handleGoToProject(e)}>{project?.logo_url? project?.logo_url.toString() : ""}</p>
                    <p data-id={project._id.toString()} onClick={(e) => handleGoToProject(e)}>{project.title? project.title.toString(): ""}</p>
                    <p data-id={project._id.toString()} onClick={(e) => handleGoToProject(e)}>{project.description.toString()}</p>
                </div>
            }
            {
                deletePromptVisible
                ?
                <div>
                    <p>Delete Task?</p>
                    <ButtonContainer>

                        <PrimaryButton onClick={(e) => deleteProject(e) }>Delete</PrimaryButton>
                        <RedButton onClick={() => toggleState(setDeletePromptVisible, deletePromptVisible)} >Cancel</RedButton>
                    </ButtonContainer>
                </div>
                :
                ""
            }
        </ProjectInforamtionContainer>
    )
}

export default ProjectCard;

