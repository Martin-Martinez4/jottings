
import styled from "styled-components";

export const Container = styled.div`

    width: 27vw;

    @media screen and (maX-width: 800px) {
        &{
            width: 75vw;
        }
    }

    max-height: calc(100Vh - ${props => props.theme.sizes.top_bar_height_larger});

    overflow-y: auto;
    /* overflow-x: hidden; */

    box-sizing: border-box;

    background-color: ${props => (props.theme.colors.grey)};

    box-shadow: 1px 1px 1px  ${props => props.theme.colors.black};

    padding-bottom: 1rem;

    
      /* Works on Firefox */
      scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colors.grey_opacity_75} ${props => props.theme.colors.main_color};
  
  /* Works on Chrome, Edge, and Safari */
  &::-webkit-scrollbar {

    /* width y-axis */
    /* height x-axis */
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.main_color};
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.grey_opacity_75};
    border-radius: 2px;
    /* border: 1px solid ${props => props.theme.colors.secondary_color}; */
  }


`

export const CategoryTitle = styled.h4`
    
    margin-left: .25rem;

`

export const TopBar  = styled.div`
    
    background-color: ${props => (props.theme.colors.grey)};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0.5rem;

    height: 1.5rem;

`


export const CreateNewPrompt = styled.div`
    
    width: 95%;

    display: flex;
    flex-direction: column;

    margin: auto;
    margin-bottom: 1rem;

    padding: .5rem;

    box-sizing: border-box;
`

export const Input = styled.input`

    width: 95%;

`

export const CreateBox = styled.div`

    margin: auto;
    width: 95%;

`

export const DropDownParent = styled.div`
    position: relative; 
    display: inline-block;

    margin: .5rem;

    cursor: pointer;

`;

export const DropDownContainer = styled.span`
    position: absolute; 
    z-index: 1; 

    width: 10vw;
    display: flex;
    flex-direction: column ;
    right: 1px; 
    padding: .5rem;


    

    background-color: white;
    
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border-radius: 5px;


    @media screen and (maX-width: 800px) {
        &{
            width: 25vw;
        }
    }
    @media screen and (maX-width: 500px) {
        &{
            width: 50vw;
        }
    }


`;

export const DropDownItem = styled.div`

    /* text-decoration: underline; */

    border-bottom: 1px solid ${props => props.theme.colors.grey};

    &:hover{
        background-color: ${props => props.theme.colors.grey_opacity_50};
        color: ${props => props.theme.colors.quaternary_color};
    }
`;



