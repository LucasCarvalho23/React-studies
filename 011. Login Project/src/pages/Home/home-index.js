import React from 'react'
import {useNavigate} from "react-router-dom"
import Button from "../../components/Button/button-index"
import useAuth from '../../hooks/useAuth'
import * as C from "./home-style"

const Home = () => {

  const {signout} = useAuth()
  const navigate = useNavigate()

  return (
    
    <C.Container>

      <C.Title>Home</C.Title>

      <Button 
        Text = "Exit" onClick = { () => [signout(), navigate("/")] }
      >
        Exit
      </Button>

    </C.Container>

  )
}

export default Home