
import React, { useEffect, useState, Suspense } from "react";
import { StateType } from "../../types/state.type";
import { HomeContentContainer, ProjectContainer } from "./home.styles";
import { SiginPageTopNav, TopNavRight } from "../signin/Signin.styles";
import { TransparentButton } from "../../global.style";
// import CreateProjectPrompt from "../../component/CreateProjectPrompt/CreateProjectPrompt";
import LogoSvg from "../../component/Svg_Icons/Logo/Logo._svg";
import PlusIcon from "../../component/Svg_Icons/PlusIcon/PlusIcon";
import ModalHOC from "../../component/ModalHOC/ModalHOC";
import { PromptContainer, FlexAlignItemsCenter } from "../../global.style";
import Circles from "../../component/Svg_Icons/LoadingIcons/Circles";

import { useSelector, useDispatch } from "react-redux";
import { getUser, getSignout } from "../../actions/authSlice";

import ProjectCard from "../../component/ProjectCard/ProjectCard";
import { toggleState } from "../../utils/toggleState";
import { getClearPoject } from "../../actions/projectSlice";

const CreateProjectPrompt = React.lazy(() => import("../../component/CreateProjectPrompt/CreateProjectPrompt"));

const Home = () => {


    const dispatch = useDispatch();

    const user = useSelector((state:StateType) => state.auth);   

    const [ createProjectModalVisible, setCreateProjectModalVisible ] = useState(false);

    function handleSignout(){

        dispatch(getSignout());

    }

    useEffect(() => { dispatch(getClearPoject()); }, [dispatch]);


    return(

        <>
            <ModalHOC visible={createProjectModalVisible}>
                <Suspense fallback={<PromptContainer><Circles></Circles></PromptContainer>}>

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
                    <FlexAlignItemsCenter>

                    <h3>{user.username}'s project</h3>
                        <PlusIcon title={"Create New Project"} clicked={(e) => toggleState(setCreateProjectModalVisible, createProjectModalVisible)} fill="white"></PlusIcon> 
        
                    </FlexAlignItemsCenter>
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

            </HomeContentContainer>
        </>
    )

}

export default Home;


