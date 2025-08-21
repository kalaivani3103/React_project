import React from 'react'

export default function CalculatorChild({ value1, value2, onDataReceive }) {
    // const value1 = 4; //we can pass value from parent using , separate like {num1,num2,onDataReceive}
    // const value2 = 2;
    const sendAddDataToParent = () => {
        const childData = value1 + value2;
        onDataReceive(childData)
    }
    const sendMulDataToParent = () => {
        const childData = value1 * value2;
        onDataReceive(childData)
    }
    const sendDivDataToParent = () => {
        const childData = value1 / value2;
        onDataReceive(childData)
    }
    const sendSubDataToParent = () => {
        const childData = value1 - value2;
        onDataReceive(childData)
    }
    return (
        <>
            <div>
                <button type="button" className='btn btn-primary me-2' onClick={sendAddDataToParent}> Add </button>

                <button type="button" className='btn btn-primary me-2' onClick={sendSubDataToParent}> Sub </button>

                <button type="button" className='btn btn-primary me-2' onClick={sendMulDataToParent}> Mul </button>

                <button type="button" className='btn btn-primary me-2' onClick={sendDivDataToParent}> Div </button>
            </div>
        </>
    )
}