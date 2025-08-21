import React, { useContext } from 'react'
import { productsContext } from './App'


//we can use useContext method instead of consumer 
export default function GrandChildContextComp() {
    const data = useContext(productsContext)

    return (
        <>
            {/* <productsContext.Consumer>
                {
                    data => <div> Data getting from App: {data}</div>
                }
            </productsContext.Consumer> */}
            { /* or */}

            {/* <div> Data getting from App: {data}</div> */}

            {/* or list of data */}

            {
                data.map(product => <li key={product.id}>{product.id} - {product.name} - {product.price}</li>)
            }
        </>
    )
}