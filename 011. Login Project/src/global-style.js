import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #f2f2f2;
    }

`

export default GlobalStyle