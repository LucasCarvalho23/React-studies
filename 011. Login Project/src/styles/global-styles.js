import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f2f2f2;
        width: 100vw;
        height: 100vh;
        font-family: Arial;
    }
`

export default GlobalStyle