
import { useEffect, useState } from "react";
import { StateType } from "../../types/project.type";
import { HomeContentContainer, ProjectContainer, ProjectInforamtionContainer } from "./home.styles";
import { SiginPageTopNav, TopNavRight } from "../signin/Signin.styles";
import { TransparentButton } from "../../global.style";
import CreateProjectPrompt from "../../component/CreateProjectPrompt/CreateProjectPrompt";
import LogoSvg from "../../component/Svg_Icons/Logo/Logo._svg";
import Plus_Icon from "../../component/Svg_Icons/Plus_Icon/Plus_Icon";
import ModalHOC from "../../component/ModalHOC/ModalHOC";

import { useSelector, useDispatch } from "react-redux";
import { getUser, getSignout } from "../../actions/authSlice";

import ProjectCard from "../../component/ProjectCard/ProjectCard";
import { toggleState } from "../../utils/toggleState";

const Home = () => {


    const dispatch = useDispatch();

    const user = useSelector((state:StateType) => state.auth);   

    const [ createProjectModalVisible, setCreateProjectModalVisible ] = useState(false);

    function handleSignout(){

        dispatch(getSignout());

    }

    useEffect(() => { dispatch(getUser()) }, []);


    return(

        <>
            <ModalHOC visible={createProjectModalVisible}>
                <CreateProjectPrompt clickConfirm={() => toggleState(setCreateProjectModalVisible, createProjectModalVisible)} clickCancel={() => toggleState(setCreateProjectModalVisible, createProjectModalVisible)} >

                </CreateProjectPrompt>
            </ModalHOC>

            <SiginPageTopNav>
                <LogoSvg></LogoSvg>
                <TopNavRight width={"10rem"}>
                    <TransparentButton width={"8rem"} height={"2rem"} onClick={() => handleSignout()}>Sign Out</TransparentButton>
                </TopNavRight>
            </SiginPageTopNav>

            <HomeContentContainer>
                <div>
                    <p>Profile Pic</p>
                    <p>{user.username}</p>
                </div>
                <div>
                    <div style={{display: "flex", alignItems: "center"}}>

                    <h3>{user.username}'s project</h3>
                        <Plus_Icon title={"Create New Project"} clicked={(e) => toggleState(setCreateProjectModalVisible, createProjectModalVisible)} fill="white"></Plus_Icon> 
          
          <div>
            
          </div>
        
                    </div>
                    <ProjectContainer> 

                       {
                            user.projects.map(project => {

                                    return (

                                        <ProjectCard key={`project_${project._id.toString()}`} project={project} ></ProjectCard>
                                        
                                    )
                            })
                        }
                                                
                    </ProjectContainer>
                </div>
                <div>
                    <div style={{display: "flex", alignItems: "center"}}>

                        <h3>Team Name</h3>
                        <Plus_Icon title={"Create New Project"} clicked={(e) => {}} fill="white"></Plus_Icon>
                        
                    </div>
                    <ProjectContainer>
                        <ProjectInforamtionContainer>

                            <p>Logo</p>
                            <p>Project Name</p>
                            <p>description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quisquam amet quae ipsa nihil ut doloribus quasi velit fugiat consequatur.</p>
                        </ProjectInforamtionContainer>
                        <ProjectInforamtionContainer>
                            <p>Logo</p>
                            <p>Project Name</p>
                            <p>description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quisquam amet quae ipsa nihil ut doloribus quasi velit fugiat consequatur.</p>
                        </ProjectInforamtionContainer>
                        <ProjectInforamtionContainer>
                            <p>Logo</p>
                            <p>Project Name</p>
                            <p>description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quisquam amet quae ipsa nihil ut doloribus quasi velit fugiat consequatur.</p>
                        </ProjectInforamtionContainer>

                    </ProjectContainer>
                </div>
                <div>
                    <div style={{display: "flex", alignItems: "center"}}>

                        <h3>Team Name</h3>
                        <Plus_Icon title={"Create New Project"} fill="white"></Plus_Icon>
                    </div>
                    <ProjectContainer>
                        <ProjectInforamtionContainer>

                            <p>Logo</p>
                            <p>Project Name</p>
                            <p>description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quisquam amet quae ipsa nihil ut doloribus quasi velit fugiat consequatur.</p>
                        </ProjectInforamtionContainer>
                        <ProjectInforamtionContainer>
                            <p>Logo</p>
                            <p>Project Name</p>
                            <p>description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quisquam amet quae ipsa nihil ut doloribus quasi velit fugiat consequatur.</p>
                        </ProjectInforamtionContainer>
                        <ProjectInforamtionContainer>
                            <p>Logo</p>
                            <p>Project Name</p>
                            <p>description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quisquam amet quae ipsa nihil ut doloribus quasi velit fugiat consequatur.</p>
                        </ProjectInforamtionContainer>

                    </ProjectContainer>
                </div>

            </HomeContentContainer>
        </>
    )

}

export default Home;

