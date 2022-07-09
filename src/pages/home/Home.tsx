
import { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StateType } from "../../types/project.type";
import { HomeContentContainer, ProjectContainer, ProjectInforamtionContainer } from "./home.styles";
import { SiginPageTopNav, TopNavRight } from "../signin/Signin.styles";
import { TransparentButton } from "../../global.style";
import LogoSvg from "../../component/Svg_Icons/Logo/Logo._svg";
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

        dispatch(getProject(project_id));

        navigate("/project")



        

    }


    useEffect(() => {
        
        let tempProjects: JSX.Element[] = user.projects.map(project => {

            return (
                    <ProjectInforamtionContainer key={`project_${project._id.toString()}`} data-id={project._id.toString()} onClick={(e) => handleGoToProject(e)}>
                        <p>{project?.logo_url? project?.logo_url.toString() : ""}</p>
                        <p>{project.title? project.title.toString(): ""}</p>
                        <p>{project.description.toString()}</p>
                    </ProjectInforamtionContainer>
                

            )
        })

        setUserProjects([...tempProjects])
        
    }, [user])


    useEffect(() => {console.log("user", user, "userProjects", userProjects)}, [user])
    useEffect(() => { dispatch(getUser()) }, []);


    return(

        <>
            <SiginPageTopNav>
                <LogoSvg></LogoSvg>
                <TopNavRight width={"2rem"}>
                    <TransparentButton width={"6rem"} height={"2rem"}>...</TransparentButton>
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

