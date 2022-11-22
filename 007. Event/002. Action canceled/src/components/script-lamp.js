import React from 'react'

import GreenLed from './img/greenLed-img.jpg'
import RedLed from './img/redLed-img.png'

export default function Lamp(props) {
    return(
        <>
        
            <p>
                <img className = 'led-class' src = {props.state?GreenLed:RedLed} />
            </p>

            <p>
                <button onClick = { () => props.funcState(!props.state) }>
                {props.state?'OFF':'ON'}
                </button>
            </p>
        
        </>
    ) 
}