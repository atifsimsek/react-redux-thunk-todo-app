import React from 'react'
import { useSelector } from "react-redux"

const Erors = ({ message }) => {

    return (
        <div style={{ padding: 18, fontSize: 15, color: "red" }}>Eror: {message} </div>
    )
}

export default Erors