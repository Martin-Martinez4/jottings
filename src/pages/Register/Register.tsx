
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSignup } from "../../actions/authSlice";
import { ButtonContainer, PrimaryButton, RedButton } from "../../global.style";
import { RegisterPageBody, RegisterContainer, RegisterInputContainer, RegisterInput } from "./Register.styles";
import { requestEmailAvailable } from "../../sagas/requests/auth.request";
import LogoSVGAlt from "../../component/Svg_Icons/Logo/Logo._svg alt";
import { onInputChange } from "../../utils/onInputChange";

const RegisterPage:FC = () => {

    const [ registrationInputValues, setRegistrationInputValues ] = useState({

        email: '',
        username: '',
        password: '',
        password2: ''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateSignin = () => {

        navigate("/");

    }

    const handleValidateRegister = async () => {

        const { email, username, password ,password2 } = registrationInputValues;

        if(email === '' || username === "" || password === "" || password2 === "" ){

            return 
        }

        const emailAvaialble = await checkIfEmailAvailable(email)
        
        if(password === password2 && emailAvaialble.available){

            // dispatch(getSignup(registrationInputValues));

            // navigateSignin();

        }
        else{

            return
        }


    }

    const checkIfEmailAvailable = async (email: string) => {

        const emailAvailable = await requestEmailAvailable({email}).then(emailAvailable => {

            return emailAvailable;

        })
        .catch(err=> {

            console.log(err)

            return "An Error has occured"

        })

        return emailAvailable

    }

    return(

        <RegisterPageBody>

            <RegisterContainer>
                <LogoSVGAlt></LogoSVGAlt>

                <RegisterInputContainer>

                    <RegisterInput type="email" width={"80%"} height={"2.5rem"} placeholder="email" value={registrationInputValues.email} name="email" onChange={(e) => onInputChange(e, setRegistrationInputValues, registrationInputValues)}></RegisterInput>
                </RegisterInputContainer>

                <RegisterInputContainer>

                    <RegisterInput width={"80%"} height={"2.5rem"} placeholder="username" value={registrationInputValues.username} name="username" onChange={(e) => onInputChange(e, setRegistrationInputValues, registrationInputValues)}></RegisterInput>
                </RegisterInputContainer>

                <RegisterInputContainer>

                    <RegisterInput type="password" width={"80%"} height={"2.5rem"} placeholder="password" value={registrationInputValues.password} name="password" onChange={(e) => onInputChange(e, setRegistrationInputValues, registrationInputValues)}></RegisterInput>
                </RegisterInputContainer>

                <RegisterInputContainer>

                    <RegisterInput type="password" width={"80%"} height={"2.5rem"} placeholder="confirm password" value={registrationInputValues.password2} name="password2" onChange={(e) => onInputChange(e, setRegistrationInputValues, registrationInputValues)}></RegisterInput>
                </RegisterInputContainer>

                

                <ButtonContainer>
                    <PrimaryButton onClick={() => handleValidateRegister()}>Confirm</PrimaryButton>
                    <RedButton onClick={() => navigateSignin()}>Cancel</RedButton>
                </ButtonContainer>
            </RegisterContainer>

        </RegisterPageBody>

    )

}

export default RegisterPage;
