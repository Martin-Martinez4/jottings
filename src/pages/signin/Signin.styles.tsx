import styled from "styled-components";
import { ButtonContainer } from "../../global.style";

export const SigninPage = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: calc(100vh - ${props => props.theme.sizes.top_bar_height_larger});

    background: ${props => props.theme.colors.white};
    background: linear-gradient(45deg, rgba(253,253,255,1) 8%, rgba(0,83,119,0.15449929971988796) 100%);
`;

export const SigininNav = styled.nav`

    width: 100vw;

    box-sizing: border-box;

    height: ${props => props.theme.sizes.top_bar_height_larger};
    background: ${props => props.theme.colors.quaternary_color};
    

`;

export const SiginPageTopNav = styled(SigininNav)`

    display: flex;
    justify-content: space-between;

    padding: 0rem 1rem .25rem 1rem;

    color: white;
`;


export const TopNavRight = styled(ButtonContainer)<{width?: string, height?: string}>`

    margin-right: 2rem;

    justify-content: space-between;

    width: ${props => props.width? props.width : "20rem"};
`;

export const SiginPageBottomNav = styled(SigininNav)`

    display: flex;
    justify-content: space-between;

    padding: 0rem 1rem .25rem 1rem;

    background-color: ${props => props.theme.colors.black};
`;

export const ContentArea = styled.div`

    display: flex;
    justify-content: space-around;

    width: 80vw;


`;


export const FrontPageImage = styled.img`

    width: 40rem;
    height: 20rem;

`;


