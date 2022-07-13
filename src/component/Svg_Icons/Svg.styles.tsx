
import styled from "styled-components";

export const BaseSVG = styled.svg`

        height: 1.1rem;
        width: 1.1rem;

        margin: 0 .5rem 0 .5rem;

        box-sizing: border-box;

        cursor: pointer;

`

export const LogoSVG = styled(BaseSVG)`

    height: 2.25rem;
    width: 2.25rem;

    margin: .5rem;

`;

export const RedSVG = styled(BaseSVG)`

    &:hover{

        fill: ${props => props.theme.colors.red};

        transform: scale(1.1)
    }


`

export const PrimarySvg = styled(BaseSVG)`

    &:hover{

        fill: ${props => props.theme.colors.main_color};

        transform: scale(1.1)
    }


`

export const SecondarySvg = styled(BaseSVG)`

    &:hover{

        fill: ${props => props.theme.colors.secondary_color};

        transform: scale(1.1)
    }


`

export const TertiarySvg = styled(BaseSVG)`

    &:hover{

        fill: ${props => props.theme.colors.tertiary_color};

        transform: scale(1.1)
    }


`

export const WhiteSvg = styled(BaseSVG)`

    fill: ${props => props.theme.colors.white};

    &:hover{

        opacity: .95;

        transform: scale(1.1)
    }


`


