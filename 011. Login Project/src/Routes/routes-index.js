import React from 'react'
import {Fragment} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/home-index'
import SignIn from '../pages/SingIn/signin-index'
import SignUp from '../pages/SignUp/signup-index'
import useAuth from '../hooks/useAuth'

const Private = ({Item}) => {
    const signed = useAuth()
    return signed > 0 ? < Item /> : < SignIn />
}

const RoutesApp = () => {
  return (
    <>
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route
                        exact path = "/home"
                        element = {<Private Item = {Home}/>}
                    />
                    <Route
                        path = "/"
                        element = {<SignIn/>}
                    />
                    <Route
                        exact path = "/signup"
                        element = {<SignUp/>}
                    />
                    <Route
                        path = "*"
                        element = {<SignIn/>}
                    />
                </Routes>
            </Fragment>
        </BrowserRouter>
    </>
  )
}

export default RoutesApp