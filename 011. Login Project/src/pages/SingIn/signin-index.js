import React, { useState } from 'react'
import * as C from "./signin-style"
import Input from "../../components/Input/input-index"
import Button from "../../components/Button/button-index"
import {Link, useNavigate} from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Signin = () => {

  const { signin } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState ("")
  const [error, setError] = useState ("")


  const handleLogin = () => {
    
    if (!email | !pass) {
      setError ("Fill in all the data")
      return
    }

    const res = signin (email, pass)

    if (res) {
      setError (res)
      return
    }

    navigate("/home")

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
          type = "password"
          placeholder = "Type your password"
          value = {pass}
          onChange = { (e) => [setPass(e.target.value), setError("")] }
        />

        <C.LabelError>{error}</C.LabelError>

        <Button 
          Text = "Login" 
          onClick = {handleLogin} 
        />

        <C.LabelSignup>
          Don't have an account?
          <C.Strong>
            <Link to = "/signup">&nbsp; Register</Link>
          </C.Strong>
        </C.LabelSignup>

      </C.Content>

    </C.Container>
  )
}

export default Signin















