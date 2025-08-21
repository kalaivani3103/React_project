import React from 'react';

export default function Child({ onDataReceived }) {//we can using props also but this is function so we used.

    const sendDataToParent = () => {
        const childData = "This is child class response"
        onDataReceived(childData)
    }

    return (
        <>
            <button className='mt-5' onClick={sendDataToParent}>Click here</button>
        </>
    )
}