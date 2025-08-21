import React, { useState } from 'react'
import CalculatorChild from './CalculatorChild'

export default function CalculatorParent() {
    const [result, setData] = useState(0);
    const [firstNumber, setFirstNumber] = useState('');

    const [secondNumber, setSecondNumber] = useState('');



    const handleOperation = (value) => { //we can provide declare variable 'result' also.
        setData(value)
    }
    return (
        <>
            <div className='containder mt-4 mb-3'>
                <h2>Calculator</h2>
                <div className='row'>
                    <div className="col-md-5 mb-4">
                        <label className="form-label">First Number </label>

                        <input type="number" className='form-control me-3'
                            value={firstNumber}
                            onChange={(e) => setFirstNumber(e.target.value)} />
                    </div>
                    <div className='col-md-5 mb-4'>
                        <label className="form-label">Second Number </label>

                        <input type="number" className='form-control me-3' value={secondNumber}
                            onChange={(e) => setSecondNumber(e.target.value)} />
                    </div>
                </div>

                <CalculatorChild value1={parseFloat(firstNumber)} value2={parseFloat(secondNumber)} onDataReceive={handleOperation} />
                <div className='containder mt-4'>Result: {result}</div>
                {/* <CalculatorChild num1={value1} num2={value2} onDataReceive = {handleOperation} />  */}

            </div>
        </>
    )
}




