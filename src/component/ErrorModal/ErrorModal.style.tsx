
import styled from "styled-components";

export const ErrorModalContainer = styled.div`
    
    background: ${props => props.theme.colors.red};

    width: 96vw; 
    min-height: 4vh; 

    position: absolute; 
    left: calc((100vw - 96vw)/2); 
    top: 10px;
    
    padding: 1rem;
    box-sizing: border-box;
    
    color: ${props => props.theme.colors.white};
    text-align: center;

    z-index: 3; 
`;


