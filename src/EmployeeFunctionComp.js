import React, { useState } from 'react'

export default function EmployeeFunctionComp(){
    const[employee, setEmployee]=useState({
    employer:"HCL",
    name:"kalai",
    salery:25000
    })

    const changeEmployeeDetails=() =>{
        setEmployee({
            ...employee,employer:"HCL Tech",name:"Kalaivani R"
        })
    }



    return(
        <>
        <h2>Function Component Employee Details: </h2>
        <p>Employer: {employee.employer}</p>
        <p>Name: {employee.name}</p>
        <p>Salery: {employee.salery}</p>
        <button onClick={changeEmployeeDetails}>ChangeEmpDetails</button>
        </>
    )
}