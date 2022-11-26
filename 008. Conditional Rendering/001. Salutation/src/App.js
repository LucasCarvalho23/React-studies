//import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css'

export default function App() { 

  const [log,funcLog] = useState(false)

  const msgLogin = () => {
    return 'User logged'
  }

  const msgLogoff = () => {
    return 'User logout'
  }

  const satulation = () => {
    const hour = new Date().getHours()

    if (hour >= 0 && hour < 13) {
      return <p>Good Morning!</p>
    } else if (hour >= 13 && hour < 18){
      return <p>Good Afternoon!</p>
    } else {
      return <p>Good Evening!</p>
    }
  }

  return (
    <>

      <h1>Vasco</h1>
      
      {satulation()}

      <p>{ log ? msgLogin() : msgLogoff() }</p>

      <button onClick = {()=>funcLog(!log)}>
        {log?'Logoff':'Login'} 
      </button>

    </>
  );

}