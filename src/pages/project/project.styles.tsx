
import styled from "styled-components";

export const CategoriesContainer  = styled.div`
    
    display: flex;
    /* flex-wrap: wrap; */
    overflow-y: hidden;
    overflow-x: auto;
    gap: 2rem;

    height: calc((100vh - 1rem) - ${props => props.theme.sizes.top_bar_height});
    width: calc(100vw - ${props => props.theme.sizes.side_bar_width});

    padding: 2rem; 

    box-sizing: border-box;

    background-color: ${props => (props.theme.colors.main_color)};
`;

export const TopBar = styled.nav`

    height: ${props => props.theme.sizes.top_bar_height_larger};
    background-color: ${props => props.theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: space-between;

    

`
export const SideBar = styled.nav`

    width: ${props => props.theme.sizes.side_bar_width};
    background-color: ${props => props.theme.colors.quaternary_color};

`



