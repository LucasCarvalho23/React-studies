//import logo from './logo.svg';
import React from 'react'
import './App.css'
import Clock from './components/script-clock'


export default function App() {

  const textCSS = {
    color: "red", 
    fontSize: "1.5em"
  }
  
  return (
    <>

      <section className = 'container-class'>
      
        <Clock/>

        <h1 style = {{color: "blue", fontSize: "3em"}}>Canal Nerdzagem</h1>
        <h2 style = {textCSS}>Walkthrough de diversos jogos</h2>
        <p className = 'textDefault-class'>Se inscreva no canal para acompanhar os jogos.</p>

      </section>

    </>
  );

}