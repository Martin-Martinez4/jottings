

import styled from "styled-components";

export const EditPromptContainer = styled.div`

    text-align: center;

    background-color: white; 
    color: black;
    width: 50%; 
    height: 70%; 
    position: relative; 
    left: 25vw; 
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



