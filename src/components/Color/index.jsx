import React, {useState} from 'react';

function Color(props) {

    const [color, setColor] = useState('red');

    return (
        <>
            <button onClick={()=>{setColor('blue')}}>blue</button>
            <button onClick={()=>{setColor('red')}}>red</button>

            <h1 style={{color: color}}>{color}</h1>
        </>
    )
}

export default Color;