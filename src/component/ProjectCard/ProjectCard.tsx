
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toggleState } from "../../utils/toggleState";

import CloseIcon from "../Svg_Icons/CloseIcon/CloseIcon";
import EditIcon from "../Svg_Icons/EditIcon/EditIcon";

import ModalHOC from "../ModalHOC/ModalHOC";
import EditProjectPrompt from "../EditProjectPrompt/EditProjectPrompt";
import { ButtonContainer, RedButton, PrimaryButton, ThinnerShorterPromptContainer } from "../../global.style";

import { TopBar } from "../../component/Draggables/draggables.styles";
import { ProjectInforamtionContainer } from "./ProjectCard.style";
import { ProjectDescriptionType } from "../../types/auth.type";

import { getProject } from "../../actions/projectSlice";
import { getDeleteProject } from "../../actions/authSlice";

interface IWithProject {
    project: ProjectDescriptionType;
}

const ProjectCard: React.FC<IWithProject> = ({ project }) => {

    const dispatch =useDispatch();
    const navigate = useNavigate();

    const [ deletePromptVisible, setDeletePromptVisible ] = useState(false);
    const [ editPromptVisible, setEditPromptVisible ] = useState(false);
   
    function handleGoToProject(e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>){

        e.preventDefault();
        e.stopPropagation();


        const project_id = project._id.toString();

        if(project_id){

            dispatch(getProject(project_id));
    
            navigate(`/project/${project_id}`);
        }   

    }

    const deleteProject = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLDivElement>) => {

        e.preventDefault();
        e.stopPropagation();
        
        const project_id = project._id;

        dispatch(getDeleteProject(project_id));

        toggleState(setDeletePromptVisible, deletePromptVisible);




    }

    return (
        <>
        
        <ModalHOC visible={editPromptVisible}>
                <EditProjectPrompt project={project} clickConfirm={() => toggleState(setEditPromptVisible, editPromptVisible)} clickCancel={() => toggleState(setEditPromptVisible, editPromptVisible)} >

                </EditProjectPrompt>
        </ModalHOC>

        <ModalHOC visible={deletePromptVisible}>
                <ThinnerShorterPromptContainer>
                    <p>Delete Project?</p>
                    <ButtonContainer>

                        <PrimaryButton onClick={(e) => deleteProject(e) }>Delete</PrimaryButton>
                        <RedButton onClick={() => toggleState(setDeletePromptVisible, deletePromptVisible)} >Cancel</RedButton>
                    </ButtonContainer>
                </ThinnerShorterPromptContainer>
        </ModalHOC>
        
        <ProjectInforamtionContainer  onClick={(e) => handleGoToProject(e)}>
            <TopBar>

                <CloseIcon   clicked={(e) => toggleState(setDeletePromptVisible, deletePromptVisible, e)} title={"Delete Project"} ></CloseIcon>
                <EditIcon  clicked={(e) => toggleState(setEditPromptVisible, editPromptVisible, e)}></EditIcon>
            </TopBar>
         
                <div onClick={(e) => handleGoToProject(e)}>

                    <p  >{project?.logo_url? project?.logo_url.toString() : ""}</p>
                    <p  >{project.title? project.title.toString(): ""}</p>

                    <div onClick={(e) => handleGoToProject(e)} dangerouslySetInnerHTML={{__html: `${project.description.toString()}`}} />
                </div>
            
        </ProjectInforamtionContainer>
        </>
    )
}

export default ProjectCard;

