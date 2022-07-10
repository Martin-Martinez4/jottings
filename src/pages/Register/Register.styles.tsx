
import styled from "styled-components";

import InputContainer from "../../global.style";
import { Input } from "../../global.style";

export const RegisterPageBody = styled.div`

    width: 100vw;
    height: 100vh;

    background-color: ${props => props.theme.colors.main_color};

    display: flex;
    align-items: center;
    justify-content: center;

`;
export const RegisterContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    width: 30vw;
    height: 70vh;

    background-color: ${props => props.theme.colors.white};

`;

export const RegisterInput = styled(Input)`

    margin-top: 1.5rem;

`;

export const RegisterInputContainer = styled(InputContainer)`

    justify-content: center;
    align-items: center;
`;

