
import styled from "styled-components";

export const LoadingPageContainer = styled.div`

    width: 100vw; 
    height: 100vh; 
    /* background-color: beige;  */
    background-color: ${props => props.theme.colors.quaternary_color}; 
    display: flex; 
    justify-content: center; 
    align-items: center;
`;

