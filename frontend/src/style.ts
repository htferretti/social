import { createGlobalStyle } from "styled-components"

export const colors = {
    black: '#000',
    white: '#c9c9c9',
    grey: '#3f4549ff',
    dark: '#272d2eff',
    purple: '#8a7f8d',
    blue: '#91a3b0'
}

export const screen_width = {
    notebook: '1440px',
    tablet: '1024px',
    mobile: '428px'
}

export const MyFuckingGlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: none;
        text-decoration: none;
        list-style: none;
        font-family: Roboto;
        transition: 0.2s;
    }    

    body, html {
        width: 100%;
        height: 100%;
        background: ${colors.black};
    }
`