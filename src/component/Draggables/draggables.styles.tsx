
import styled from "styled-components";

export const DraggableContainer = styled.div`

    width: 95%;

    background-color: ${props => (props.theme.colors.white)};

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: auto;

    margin-bottom: 1rem;
    /* overflow: hidden; */

    padding: .5rem;

    
    /* overflow:hidden;  */
    text-overflow: ellipsis;
    
    box-sizing: border-box;
    border: 1px outset ${props => props.theme.colors.tertiary_color};
    box-shadow: 1px 1px 1px  ${props => props.theme.colors.tertiary_color};

`

export const TopBar  = styled.div`
    
    background-color: ${props => (props.theme.colors.white)};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0.5rem;

    height: 1.5rem;


`


