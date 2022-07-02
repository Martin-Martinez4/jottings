
import styled from "styled-components";

export const CategoriesContainer  = styled.div`
    
    display: flex;
    /* flex-wrap: wrap; */
    overflow: auto;
    gap: 2rem;

    min-height: calc(100vh - ${props => props.theme.sizes.top_bar_height});
    min-width: calc(100vw - ${props => props.theme.sizes.side_bar_width});

    padding: 2rem; 

    box-sizing: border-box;

    background-color: ${props => (props.theme.colors.main_color)};
`;

export const TopBar = styled.nav`

    height: ${props => props.theme.sizes.top_bar_height};
    background-color: ${props => props.theme.colors.white};

    

`
export const SideBar = styled.nav`

    width: ${props => props.theme.sizes.side_bar_width};
    background-color: ${props => props.theme.colors.quaternary_color};

`



