//import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css'

export default function App() { 

  const [name, nameFunc] = useState('')

  return (
    <>
        
        <label>Type your name </label>
        <input 
            type = "text"
            name = "name-name" 
            value = {name}
            onChange = { (e) => nameFunc(e.target.value) }
        />

        <p>Name typed: {name}</p>

    </>
  );

}