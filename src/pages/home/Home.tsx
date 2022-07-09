
import { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StateType } from "../../types/project.type";
import { HomeContentContainer, ProjectContainer, ProjectInforamtionContainer } from "./home.styles";
import { SiginPageTopNav, TopNavRight } from "../signin/Signin.styles";
import { TransparentButton } from "../../global.style";
import LogoSvg from "../../component/Svg_Icons/Logo/Logo._svg";
import Plus_Icon from "../../component/Svg_Icons/Plus_Icon/Plus_Icon";
import Edit_Icon from "../../component/Svg_Icons/Edit_Icon/Edit_Icon";
import Close_Icon from "../../component/Svg_Icons/Close_Icon/Close_Icon";
import { TopBar } from "../../component/Draggables/draggables.styles";
import { useSelector, useDispatch } from "react-redux";
import { getProject } from "../../actions/projectSlice";
import { getUser } from "../../actions/authSlice";

const Home = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state:StateType) => state.auth);

    const [userProjects, setUserProjects] = useState<JSX.Element[]
    >([]);

    function handleGoToProject(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>){

        e.preventDefault();

        const el = e.target as HTMLDivElement

        const project_id = el.getAttribute("data-id");

        if(project_id){

            dispatch(getProject(project_id));
    
            navigate("/project");
        }




        

    }


    useEffect(() => {
        
        let tempProjects: JSX.Element[] = user.projects.map(project => {

            return (
                    <ProjectInforamtionContainer key={`project_${project._id.toString()}`} data-id={project._id.toString()} onClick={(e) => handleGoToProject(e)}>
                    <TopBar>

                        <Close_Icon  data-id={project._id.toString()} clicked={(e) => {console.log("delete")}} title={"Delete Project"} ></Close_Icon>
                        <Edit_Icon data-id={project._id.toString()} clicked={() => {console.log("edit")}} title={"Edit Project"}></Edit_Icon>
                    </TopBar>
                    <div>

                        <p data-id={project._id.toString()} onClick={(e) => handleGoToProject(e)}>{project?.logo_url? project?.logo_url.toString() : ""}</p>
                        <p data-id={project._id.toString()} onClick={(e) => handleGoToProject(e)}>{project.title? project.title.toString(): ""}</p>
                        <p data-id={project._id.toString()} onClick={(e) => handleGoToProject(e)}>{project.description.toString()}</p>
                    </div>
                    </ProjectInforamtionContainer>
                

            )
        })

        setUserProjects([...tempProjects])
        
    }, [user])


    useEffect(() => {}, [user])
    useEffect(() => { dispatch(getUser()) }, []);


    return(

        <>
            <SiginPageTopNav>
                <LogoSvg></LogoSvg>
                <TopNavRight width={"10rem"}>
                    <TransparentButton width={"8rem"} height={"2rem"}>Sign Out</TransparentButton>
                </TopNavRight>
            </SiginPageTopNav>
            <HomeContentContainer>
                <div>
                    <p>Profile Pic</p>
                    <p>{user.username}</p>
                </div>
                <div>
                    <h3>{user.username}'s project</h3>
                    <ProjectContainer> 
                        <Plus_Icon title={"Create New Project"} fill="white"></Plus_Icon>
                       { userProjects}
                        {/* <ProjectInforamtionContainer>
                            <p>Logo</p>
                            <p>Project Name</p>
                            <p>description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quisquam amet quae ipsa nihil ut doloribus quasi velit fugiat consequatur.</p>
                        </ProjectInforamtionContainer> */}
                       

                    </ProjectContainer>
                </div>
                <div>
                    <h3>Team Name</h3>
                    <ProjectContainer>
                        <Plus_Icon title={"Create New Project"} fill="white"></Plus_Icon>
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

