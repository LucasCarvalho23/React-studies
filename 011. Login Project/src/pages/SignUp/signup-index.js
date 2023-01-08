import React, { useState } from 'react'
import * as C from "./signup-style"
import Input from '../../components/Input/input-index'
import Button from '../../components/Button/button-index'
import {Link, useNavigate} from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Signup = () => {

    const [email, setEmail] = useState("")
    const [emailConf, setEmailConf] = useState("")
    const [pass, setPass] = useState ("")
    const [error, setError] = useState ("")
    const navigate = useNavigate()
    const { signup } = useAuth()


    const handleSignup = () => {
        
        if (!email | !emailConf | !pass) {
            setError ("Fill in all the data")
            return
        } else if (email !== emailConf) {
            setError ("Emails aren't the same")
            return
        }

        const res = signup (email, pass)

        if (res) {
            setError (res)
            return
        }

        alert ("Successfully registered user!")
        navigate ("/")

    }


    return (

        <C.Container>

            <C.Label>LOGIN SYSTEM</C.Label>

            <C.Content>

                <Input 
                    type = "email"
                    placeholder = "Type your E-mail"
                    value = {email}
                    onChange = { (e) => [setEmail(e.target.value), setError("")] }
                />

                <Input 
                    type = "email"
                    placeholder = "Type your E-mail again"
                    value = {emailConf}
                    onChange = { (e) => [setEmailConf(e.target.value), setError("")] }
                />

                <Input 
                    type = "password"
                    placeholder = "Type your password"
                    value = {pass}
                    onChange = { (e) => [setPass(e.target.value), setError("")] }
                />

                <C.LabelError>{error}</C.LabelError>

                <Button 
                Text = "Sign Up" 
                onClick = {handleSignup} 
                />

                <C.LabelSignup>
                Do you have an account?
                <C.Strong>
                    <Link to = "/signin">&nbsp; Login</Link>
                </C.Strong>
                </C.LabelSignup>

            </C.Content>

        </C.Container>
    )
}

export default Signup










