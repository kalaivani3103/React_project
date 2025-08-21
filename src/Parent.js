import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
    const [data, setData] = useState("Default Parent class")
    const handleChildData = (data) => {
        setData(data)
    }
    return (
        <>
            <Child onDataReceived={handleChildData} />
            <p>Data: {data}</p>
        </>
    )
}