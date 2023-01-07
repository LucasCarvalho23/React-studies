import { Fragment } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home/home-index"
import SignIn from "../pages/SignIn/signin-index"
import SignUp from "../pages/SignUp/signup-index"

const Private = ({Item}) => {
        const signed = true
        return signed > 0 ? < Item /> : < SignIn />
}

const RouterApp = () => {
    return (
        <>
            <BrowserRouter>
                <Fragment>
                    <Routes>
                        <Route 
                            exact path = "/home"
                            element = { < Private Item = {Home} /> }
                        />
                        <Route 
                            path = "/"
                            element = { < SignIn /> }
                        />
                        <Route 
                            exact path = "/signup"
                            element = { < SignUp /> }
                        />
                        <Route 
                            path = "*"
                            element = { < SignIn /> }
                        />
                    </Routes>
                </Fragment>
            </BrowserRouter>    
        </>
    )
}

export default RouterApp