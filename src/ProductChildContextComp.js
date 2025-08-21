import React, { useContext } from 'react'
import { productsContext } from './App'
import ProductUseEffect from './ProductUseEffect'

export default function ProductChildContextComp() {
    const data = useContext(productsContext)

    return (
        <>
            <div className='container mt-4 col-md-10'>
                <h2 className='text-center mb-4'>Product Store showed by using Context</h2>
                <div className='row'>
                    {data.map(product => <ProductUseEffect key={product.id} productDetails={product} />)}
                </div>
            </div>
        </>
    )
}