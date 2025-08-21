import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductUseEffect from './ProductUseEffect'

export default function ProductListUseEffect() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(product => setData(product.data)) //because response come with status code like that.
            .catch(error=> console.log(`Error Fetching user local data ${error}`))
    }, [])

    //must declare key inside the div otherwise key error will came.
    //mb-4 margin bottom for padding
    return (
        <>
            <div className='container mt-4 col-md-10'>
                <h2 className='text-center mb-4'>Product Store</h2> 
                <div className='row'>
                    {data.map(product => <ProductUseEffect key={product.id} productDetails={product} />)}
                </div>
            </div>
        </>
    )
}