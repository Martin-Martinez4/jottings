
import React, { useEffect, useState, Suspense } from "react";
import { StateType } from "../../types/project.type";
import { HomeContentContainer, ProjectContainer, ProjectInforamtionContainer } from "./home.styles";
import { SiginPageTopNav, TopNavRight } from "../signin/Signin.styles";
import { TransparentButton } from "../../global.style";
// import CreateProjectPrompt from "../../component/CreateProjectPrompt/CreateProjectPrompt";
import LogoSvg from "../../component/Svg_Icons/Logo/Logo._svg";
import PlusIcon from "../../component/Svg_Icons/PlusIcon/PlusIcon";
import ModalHOC from "../../component/ModalHOC/ModalHOC";

import { useSelector, useDispatch } from "react-redux";
import { getUser, getSignout } from "../../actions/authSlice";

import ProjectCard from "../../component/ProjectCard/ProjectCard";
import { toggleState } from "../../utils/toggleState";

const CreateProjectPrompt = React.lazy(() => import("../../component/CreateProjectPrompt/CreateProjectPrompt"));

const Home = () => {

    console.log("changes")


    const dispatch = useDispatch();

    const user = useSelector((state:StateType) => state.auth);   

    const [ createProjectModalVisible, setCreateProjectModalVisible ] = useState(false);

    function handleSignout(){

        dispatch(getSignout());

    }

    useEffect(() => { dispatch(getUser()) }, [dispatch]);


    return(

        <>
            <ModalHOC visible={createProjectModalVisible}>
                <Suspense fallback={"Loading..."}>

                    <CreateProjectPrompt clickConfirm={() => toggleState(setCreateProjectModalVisible, createProjectModalVisible)} clickCancel={() => toggleState(setCreateProjectModalVisible, createProjectModalVisible)} >

                    </CreateProjectPrompt>
                </Suspense>
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
                        <PlusIcon title={"Create New Project"} clicked={(e) => toggleState(setCreateProjectModalVisible, createProjectModalVisible)} fill="white"></PlusIcon> 
          
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
                        <PlusIcon title={"Create New Project"} clicked={(e) => {}} fill="white"></PlusIcon>
                        
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
                        <PlusIcon title={"Create New Project"} fill="white"></PlusIcon>
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

