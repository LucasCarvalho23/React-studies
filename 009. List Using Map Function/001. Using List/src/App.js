//import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css'

export default function App() { 

  const carsList = ['Ferrari','McLaren','Willians','Mercedes','Red Bull', 'Aston Martin', 'Haas', 'Alfa Romeo', 'Alpine', 'Alpha Tauri']

  const carsListFunc = carsList.map((c) =><li>{c}</li>)



  return (
    <>
        
        <h1>F1 Constructors</h1>

        <ul>
          {carsListFunc}
        </ul>

    </>
  );

}