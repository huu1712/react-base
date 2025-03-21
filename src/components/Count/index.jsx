import React, {useState} from 'react';

function Count() {
    const [count, setCount] = useState(0);

    function decrease() {
        if (count <= 0){
            alert('phai lon hon 0')
            return
        }

        setCount(count - 1)
    }

    function increase() {
        if (count >= 10){
            alert('phai nho hon 10')
            return
        }

        setCount(count + 1)
    }

    return (
        <>
            <button onClick={decrease}>decrease</button>
            <button onClick={increase}>increase</button>
            <h1>{count}</h1>

        </>
    )
}

export default Count;