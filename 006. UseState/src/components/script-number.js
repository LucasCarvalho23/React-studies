import React from 'react'

export default function Number(props) {

    return(
        <>

            <p>Value of State - Number em Export: {props.number}</p>
            <p>
                <button onClick = { () => props.setNumber(props.number + 100) }>Sum hundred in Number</button>
            </p>

        </>
    )
}