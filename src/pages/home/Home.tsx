
import { HomeContentContainer, ProjectContainer, ProjectInforamtionContainer } from "./home.styles";
import { SiginPageTopNav, TopNavRight } from "../signin/Signin.styles";
import { TransparentButton } from "../../global.style";
import LogoSvg from "../../component/Svg_Icons/Logo/Logo._svg";

const Home = () => {

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
                    <p>user Name</p>
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

