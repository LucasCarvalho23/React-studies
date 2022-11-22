//import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css'
import Lamp from './components/script-lamp'

export default function App() { 

  const [state, funcState] = useState(true)
  
  const cancelFunc = (e) => {
    return e.preventDefault()
  }

  return (
    <>

      <Lamp state = {state} funcState = {funcState}/>

      <a href = "https://youtube.com/@canalnerdzagem" target = "_blank"  onClick = { (e) => cancelFunc(e) }>
        Canal Nerdzagem
      </a>

    </>
  );

}