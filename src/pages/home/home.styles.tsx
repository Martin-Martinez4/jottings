
import styled from "styled-components";

export const HomeContentContainer = styled.div`

    display: flex;
    flex-direction: column;

    padding: 2rem;
    box-sizing: border-box;

    min-height: calc(100vh - ${props => props.theme.sizes.top_bar_height});
    width: 100vw;
    overflow-x: none;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.main_color};

  

`;

export const ProjectContainer = styled.div`

    display: flex;

    padding-bottom: 1rem;
    box-sizing: border-box;

    /* height: max-content; */
    height: max-content;

    overflow-y: auto;
    overflow-x: auto;

    border-bottom: dashed 1px ${props => props.theme.colors.secondary_color};

      /* Works on Firefox */
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colors.grey_opacity_75} ${props => props.theme.colors.main_color};
  
  /* Works on Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.main_color};
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.grey_opacity_75};
    border-radius: 2px;
    /* border: 1px solid ${props => props.theme.colors.secondary_color}; */
  }

`;

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



