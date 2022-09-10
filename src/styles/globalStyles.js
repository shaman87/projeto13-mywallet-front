import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway', sans-serif;
        box-sizing: border-box;
    }

    body {
        background-color: #8C11BE;
        font-family: 'Raleway', sans-serif;
    }

    a {
        color: #FFFFFF;
        text-decoration: none;
    }
`;

export default GlobalStyle;