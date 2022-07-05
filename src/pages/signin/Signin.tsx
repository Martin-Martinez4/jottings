
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { getLogin } from "../../actions/authSlice"
import { SigninPage, SiginPageTopNav, SiginPageBottomNav,ContentArea, TopNavRight } from "./Signin.styles";
import { PrimaryButton, SecondaryButton, QuaternaryButton, ButtonContainer, TransparentButton } from "../../global.style";
import LogoSvg from "../../component/Svg_Icons/Logo/Logo._svg";
import { useEffect } from "react";

const Signin = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth)

    useEffect(() => {
        console.log(user)

        if(user.isAuth){

            navigate("/home")

        }

    }, [user])

    const handleSignin = () => {

        const body = {

            email: "guest@guest.com",
            name: "Guest",
            password: "Password@2222"

        }

        dispatch(getLogin(body))

    }

    return (
        <>
        <SiginPageTopNav>
            <LogoSvg></LogoSvg>
            <TopNavRight width={"14rem"}>
                <TransparentButton width={"6rem"} height={"2rem"}>Sign in</TransparentButton>
                <TransparentButton width={"6rem"}>Register</TransparentButton>
            </TopNavRight>
        </SiginPageTopNav>
        <SigninPage>

                <ContentArea>
                    <div>
                        <h1 >Think It, Dream It, Do It</h1>
                        <p>Manage projects from anywhere in the world.  Set managable goals for yourself and your team to get stuff done faster.  </p>
                    </div>

                    {/* <FrontPageImage src="https://freepngimg.com/thumb/graphic/53739-2-abstract-wave-images-free-hd-image.png" alt="image goes here"></FrontPageImage> */}

                </ContentArea>

                <ButtonContainer>

                    <PrimaryButton width={"6.5rem"} height={"2rem"} onClick={() => handleSignin()}>Sign in</PrimaryButton>
                    <SecondaryButton width={"6.5rem"} height={"2rem"}>Guest Sigin in</SecondaryButton>
                    <QuaternaryButton width={"6.5rem"} height={"2rem"}>Register</QuaternaryButton>
                </ButtonContainer>


        </SigninPage>
        <SiginPageBottomNav></SiginPageBottomNav>
        </>

    )

}

export default Signin;

