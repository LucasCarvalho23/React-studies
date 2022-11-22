//import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css'
//IMGs
import GreenLed from './components/img/greenLed-img.jpg'
import RedLed from './components/img/redLed-img.png'

export default function App() { 

  const [state,funcOn] = useState (true)

  return (
    <>

      <img className = 'greenled-class' src = {state?GreenLed:RedLed}/>

      <p>
        <button onClick = { () => funcOn(!state) }>{state?'Off':'On'}</button>
      </p>

    </>
  );

}