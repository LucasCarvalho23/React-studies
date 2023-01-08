import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import * as ReactDomCliente from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot (document.querySelector ("#root"))

root.render (
    <StrictMode>
        < App />
    </StrictMode>
)