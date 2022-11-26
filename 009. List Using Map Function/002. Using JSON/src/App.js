//import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css'

export default function App() { 

  const carsList = [
    {name: "Ferrari", category: "F1", position: "3"},
    {name: "McLaren", category: "F1", position: "6"},
    {name: "Willians", category: "F1", position: "7"},
    {name: "Mercedes", category: "F1", position: "2"},
    {name: "Red Bull", category: "F1", position: "1"},
    {name: "Aston Martin", category: "F1", position: "8"},
    {name: "Haas", category: "F1", position: "9"},
    {name: "Alfa Romeo", category: "F1", position: "5"},
    {name: "Alpine", category: "F1", position: "4"},
    {name: "Alpha Tauri", category: "F1", position: "10"},
  ]

  const carsListFunc = carsList.map((c) => <li>{c.name} - {c.position}º</li>)



  return (
    <>
        
        <h1>F1 Constructors</h1>

        <ul>
          {carsListFunc}
        </ul>

    </>
  );

}