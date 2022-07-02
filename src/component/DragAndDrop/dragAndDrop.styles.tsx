
import styled from "styled-components";

export const Container = styled.div`

    min-width: 16vw;
    max-height: auto;

    box-sizing: border-box;

    background-color: ${props => (props.theme.colors.grey)};

    box-shadow: 1px 1px 1px  ${props => props.theme.colors.black};

    padding-bottom: 1rem;


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

    text-align: center;
    margin: auto;
    width: 95%;

`



