
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
        red: "#BB2222"
    },
    sizes: {

        top_bar_height: "2rem",
        side_bar_width: "3.5rem",

    }


};

export const Input = styled.input`

    padding: .25rem;
    border-radius: 3px;
    border: 1px ${props => (props.theme.colors.quaternary_color)} outset;
    box-sizing: border-box;

    width: 95%;
    margin: 0 0 .5rem 0;

    font-size: .9rem;

    &:focus{

        border: ${props => (props.theme.colors.secondary_color)} inset 1.5px;

        outline: none;

    }

`

export const TextArea = styled.textarea`

    padding: .25rem;
    border-radius: 3px;
    border: 1px ${props => (props.theme.colors.quaternary_color)} outset;
    box-sizing: border-box;

    width: 95%;
    margin: 0 0 .5rem 0;


    resize: none;

    font-size: .9rem;

    &:focus{

        border: ${props => (props.theme.colors.secondary_color)} inset 1.5px;

        outline: none;

    }
`

export const ButtonContainer = styled.div`
    
    display: flex;

`

export const Button = styled.div`
    
    width: 4rem;
    height: 2rem;

    border-radius: 2px;

    border: 1px black solid;

    margin: .5rem .5rem .5rem .5rem;

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
export const PrimaryButton = styled(Button)`
    
    background-color: ${props => props.theme.colors.main_color};
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

