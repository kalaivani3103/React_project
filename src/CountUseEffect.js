import React, { useEffect, useState } from 'react'

export default function CountUseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])
    
    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div> count {count} time</div>
            <button onClick={handleClick}>Click Here</button>
        </>
    )
}