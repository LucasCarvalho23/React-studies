import React from 'react'

export default function Clock() {
    return(

        <p>
            {new Date().toLocaleTimeString()}
        </p>

    )
}