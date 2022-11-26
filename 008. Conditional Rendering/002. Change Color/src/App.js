//import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css'

export default function App() { 

  const [color, funcColor] = useState(1)

  const red = {color: '#f00'}
  const green = {color: '#0f0'}
  const blue = {color: '#00f'}

  const returnColor = (c) => {
      if (c == 1) {
          return red 
      } else if (c == 2) {
          return green 
      } else {
          return blue 
      }
  }

  const changeColor = () => {
    funcColor(color + 1)
      if (color > 2) {
        funcColor (1)
      }
  }

  
  

  return (
    <>

      <h1 style = {returnColor(color)}>Canal Nerdzagem</h1>
      
      <button onClick = { () => changeColor() }>
        Change color
      </button>

    </>
  );

}