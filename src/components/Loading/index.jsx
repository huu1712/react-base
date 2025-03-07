import React from 'react';
import "./style.css"

function Loading(props) {
    const {number, color} = props
    console.log(props)
    return (
        <div className="loading" key={number} style={{color: color}}>Loading {number}</div>
    )
}

export default Loading;