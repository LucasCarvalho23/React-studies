//import logo from './logo.svg';
import Number from './components/script-number'
import React, {useState} from 'react'
import './App.css'


export default function App() { 

  // Number = Name the state
  // setNumber = Function that will change the state
  const[number,setNumber] = useState(23)
  let numberTest = 23

  return (
    <>

      <p>Value of State - Number no App: {number}</p>

      <Number number = {23} setNumber = {setNumber}/>

      <p> Value of NumberTest: {numberTest} </p>
      <p>
        <button onClick = { () => numberTest = 100 }>Sum hundred in NumberTest</button>
      </p>

    </>
  );

}