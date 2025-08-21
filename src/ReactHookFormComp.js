import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
//import manually react-hook-form

const BASE_URL = "http://localhost:8080/products"
export default function ReactHookFormComp() {
    const { register, handleSubmit, setValue } = useForm()
    const [products, setProducts] = useState([])
    const [updateProductId, setProductId] = useState(null)

    const fetchProducts = async () => {
        try {
            const response = await axios.get(BASE_URL)
            setProducts(response.data)
        } catch (error) {
            console.error("Error fetching data", error)
        }
    }
    //whenever we have fetch the new record after updating deleting that's only we used common method above. 
    useEffect(() => {
        fetchProducts()
    }, [])

    //store data
    const onProductFormSubmit = async (formDataObj) => {
        try {
            if (updateProductId) {
                const productResponse = await axios.put(`${BASE_URL}/${updateProductId}`, formDataObj);
                setProductId(null);
                console.log("Data successfully updated", productResponse.data)
            } else {
                const productResponse = await axios.post(BASE_URL, formDataObj);
                console.log("Data successfully stored", productResponse.data)
            }
            fetchProducts()
        } catch (error) {
            console.error("Error while storing/updating the data using JSON server", error)
        }
    }

    const handleEdit = (product) => {
        setProductId(product.id);
        setValue('productName', product.productName);
        setValue('productPrice', product.productPrice);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product", error);
        }
    };




    //username using register function. normal pattern //i and start ^ and end $ like /^ $/i and inside /^[inside any]$/i
    return (
        <>
            <div className='container mt-4'>
                <h2 className='text-center mb-4'>Product Data React Hook Component</h2>
                <form onSubmit={handleSubmit(onProductFormSubmit)}>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label me-1'> Product Name:</label>
                        <div className='col-sm-3'><input className='form-control' {...register('productName')} /></div>
                        <label className='col-sm-2 col-form-label me-1'> Product Price:</label>
                        <div className='col-sm-3'><input className='form-control' {...register('productPrice')} /></div>

                        {/* Bellow code using validations.

                        <div className='col-sm-3'><input className='form-control' {...register('userName', { required: true, pattern: /^[a-zA-Z\s]{5,15}$/i })} /></div>
                        {errors.userName?.type === "required" && <p className='text text-danger'>* UserName is required</p>}
                        {errors.userName?.type === "pattern" && <p className='text text-danger'>* UserName is Invlaid, It should between 5 to 15 characters</p>} */}

                    </div>
                    <div className='row mb-4'>
                        <div className='col-sm-10 offset-sm-2 text-mid'><button className='btn btn-primary' type='submit' name='submit'>Submit</button></div>
                    </div>
                </form>
                <table className='table table-striped table-bordered'>
                    <thead className='text-center'>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* colSpan="4" //Ensures the message spans all columns. */}
                        {products.length === 0 ? (<tr><td colSpan="4" className="text-center text-muted">No products found.</td></tr>) :
                            (products.map(product => <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.productPrice}</td>
                                <td className='text-center'>
                                    <button type='button' className='btn btn-info me-3' onClick={() => handleEdit(product)}>Edit</button>
                                    <button type='button' className='btn btn-danger' onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>

            </div>
        </>
    )
}