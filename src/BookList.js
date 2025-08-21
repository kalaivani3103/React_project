import React from 'react'
import BookChild from './BookChild'

export default function BookList() {
    const books = [
        { id: "SKU101", name: "React Js", price: 300.00, image: "./ReactJSImage.png" },
        { id: "SKU102", name: "Java", price: 400.00, image: "./JavaImage.png" },
        { id: "SKU103", name: "Angular", price: 350.00, image: "./AngularImage.png" },
        { id: "SKU104", name: "Data Structure", price: 300.00, image: "./DataStructureImage.png" },
        { id: "SKU105", name: "Python", price: 250.00, image: "./PythonImage.png" },
        { id: "SKU106", name: "C Programming", price: 500.00, image: "./CProgramImage.png" },
        { id: "SKU107", name: "MySQL", price: 400.00, image: "./MySQLImage.png" }

    ]
    //must declare key inside the div otherwise key error will came.
    //mb-4 margin bottom for padding
    return (
        <>
            <div className='container mt-4 col-md-10'>
                <h2 className='text-center mb-4'>Book Store</h2> 
                <div className='row'>
                    {books.map(book => <BookChild key={book.id} bookDetails={book} />)}
                </div>
            </div>
        </>
    )
}