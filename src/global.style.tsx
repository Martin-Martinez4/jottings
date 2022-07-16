
import React from "react";
import styled, { ThemeProvider } from "styled-components";


// const theme = css`
//   :root, .light-theme {
//     --primary-color: #ff0000;
//     --primary-bg: #fff;
//   }

//   .dark-theme {
//     --primary-color: #ff0000;
//     --primary-bg: #212121;
//   }
// `

export const theme = {
    colors: {

        fg: "palevioletred",
        bg: "white",
        main_color: "#005377",
        secondary_color: "#F1A208",
        tertiary_color: "#4ABDAC",
        quaternary_color: "#052F5F",
        white: "#fdfdff",
        black: "#0c0c13",
        grey: "#e7e7f3",
        grey_opacity_50 : "rgba(231, 231, 243, .5)",
        grey_opacity_75 : "rgba(231, 231, 243, .75)",
        red: "#BB2222"
    },
    sizes: {

        top_bar_height: "2rem",
        top_bar_height_larger: "3rem",
        side_bar_width: "0rem",

    }


};

export const Input = styled.input<{width?: string, height?: string}>`

    padding: .25rem;
    border-radius: 3px;
    border: 1px ${props => (props.theme.colors.quaternary_color)} outset;
    box-sizing: border-box;

    width: ${props => props.width? props.width : "95%"};
    height: ${props => props.height? props.height : ""};
    margin: 0 0 .5rem 0;

    font-size: .9rem;

    &:focus{

        border: ${props => (props.theme.colors.secondary_color)} inset 1.5px;

        outline: none;

    }

`

export const InputContainer = styled.div`
    display: flex; 
    flex-direction: column;

    width: 100%;
`;

export const InputLabelLeft = styled.label`

    align-self: start;
    padding: 1rem 0 0 1rem;

`;

export const TextArea = styled.textarea<{width?: string, height?: string}>`

    padding: .25rem;
    border-radius: 3px;
    border: 1px ${props => (props.theme.colors.quaternary_color)} outset;
    box-sizing: border-box;

    width: ${props => props.width? props.width : "95%"};
    height: ${props => props.height? props.height : ""};
    margin: 0 0 .5rem 0;


    resize: none;

    font-size: .9rem;

    &:focus{

        border: ${props => (props.theme.colors.secondary_color)} inset 1.5px;

        outline: none;

    }
`

export const TextAreaParent = styled.div<{width?: string, height?: string}>`
        width: ${props => props.width? props.width : "95%"};
        height: ${props => props.height? props.height : ""};

        overflow: auto;

        display: flex;
        justify-content: center;

    & > :first-child{

        padding: .25rem;
        border-radius: 3px;
        border: 1px ${props => (props.theme.colors.main_color)} outset;
        box-sizing: border-box;

        color: ${props => props.theme.colors.black};

        text-align: left;

        overflow: auto;


        /* width: ${props => props.width? props.width : "100%"}; */
        width: 100%;
        height: ${props => props.height? props.height : ""};
        margin: 0 0 .5rem 0;


        resize: none;

        font-size: .9rem;

        &:focus{

            border: ${props => (props.theme.colors.secondary_color)} inset 1.5px;

            outline: none;

        }

    }

`;

export const ButtonContainer = styled.div`
    
    display: flex;

`

export const Button = styled.div<{width?: string, height?: string}>`
    
    width: ${props => props.width? props.width : '4rem'};
    height: ${props => props.height? props.height : '2rem'};

    border-radius: 2px;

    border: 1px black solid;

    margin: .5rem .5rem .5rem .5rem;
    padding: .1rem;

    text-align: center;
    vertical-align: middle;
    line-height: 2rem;

    font-size: .9rem;

    cursor: pointer;

    &:hover{

        opacity: .90;

        transform: scale(1.05);

    }


`

export const PromptContainer = styled.div`

    text-align: center;

    background-color: white; 
    color: black;
    overflow: hidden;
    width: 50%; 
    height: 70%; 
    position: relative; 
    left: 25vw; 
    top: 10vh;

    padding: .5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    box-shadow: 1px 1px 10px ${props => props.theme.colors.quaternary_color};
    box-sizing: border-box;

    @media screen and (max-width: 800px){

        &{

            width: 90%; 
            height: 90%; 
            position: relative; 
            left: 1rem; 
            top: 1rem;
        }

    }

`;

export const ThinnerPromptContainer = styled(PromptContainer)`

    width: 25%;
    left: calc(25% + 14%);   
`;

export const ShorterPromptContainer = styled(PromptContainer)`

    height: 25%; 
`;

export const ThinnerShorterPromptContainer = styled(PromptContainer)`

    height: 25%;
    width: 25%;
    left: calc(25% + 14%);  
`;

export const PrimaryButton = styled(Button)`
    
    background-color: ${props => props.theme.colors.main_color};
    color: ${props => props.theme.colors.white};

`
export const TransparentButton = styled(Button)`
    
    /* background-color: ${props => props.theme.colors.main_color}; */
    color: ${props => props.theme.colors.white};

    border: none;
    

`
export const SecondaryButton = styled(Button)`
    
    background-color: ${props => props.theme.colors.secondary_color};
    color: ${props => props.theme.colors.quaternary_color};
    font-weight: bold;

`
export const QuaternaryButton = styled(Button)`
    
    background-color: ${props => props.theme.colors.quaternary_color};
    color: ${props => props.theme.colors.white};

`
export const RedButton = styled(Button)`
    
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};

`
  
  // This theme swaps `fg` and `bg`
export const invertTheme = ({ fg, bg }: {[key: string]: string}) => ({
    fg: bg,
    bg: fg
});


const Theme = ({ children }: {[key:string|symbol]: any}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
  
export default Theme;

