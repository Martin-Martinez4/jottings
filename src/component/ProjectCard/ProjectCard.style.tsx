
import styled from "styled-components";

export const ProjectInforamtionContainer = styled.div<{width?: string, height?: string}>`

    min-width: 30rem;
    width: 30rem;

    @media screen and (max-width: 800px){

      &{
        min-width: 60vw;
        width: 60vw;
        height: 50vh;
      }

    }

    height: 13rem;

    margin: .5rem;

    padding: .5rem;

    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};


    box-shadow: 1px 1px 1px 1px ${props => props.theme.colors.black};
    border: 1px solid ${props => props.theme.colors.grey_opacity_50};
    border-radius: 4px;
    
    overflow: hidden;
    
    cursor: pointer;
    
    
    &:hover{
        
        opacity: .95;
        border: 1px solid ${props => props.theme.colors.secondary_color};

    }

`;