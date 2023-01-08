import React from "react"
import GlobalStyle from "./styles/global-styles"
import RoutesApp from "./Routes/routes-index"
import { AuthProvider } from "./contexts/auth"

const App = () => {
    return (
        <AuthProvider>
            < RoutesApp />
            < GlobalStyle />
        </AuthProvider>
    )
}

export default App