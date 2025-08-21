import React from 'react'

export default function Functional({customer}){
    // const{name,age,designation}=customer
    return(
        <>
        <h2>Child Functional Component</h2>
        <p>Name: {customer.name}</p>
        <p>Age: {customer.age}</p>
        <p>Designation: {customer.designation}</p>
        </>
    )
}