
import styled from "styled-components";

export const CreateCategoryPromptContainer = styled.div`

    text-align: center;

    background-color: white; 
    color: black;
    width: 25%; 
    height: 20%; 
    position: relative; 
    left: calc(50vw - 20%); 
    top: 10vh;

    padding: .5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    box-shadow: 1px 1px 10px ${props => props.theme.colors.quaternary_color};
    box-sizing: border-box;

    @media screen and (max-width: 800px){

        &{

            width: 90%; 
            height: 90%; 
            position: relative; 
            left: 1rem; 
            top: 1rem;
        }

    }

`;

