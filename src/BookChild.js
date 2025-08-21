import React from 'react'

export default function BookChild({ bookDetails }) {
//d-block mx-auto -> to center the image in tha top position.
    return (
        <>
            <div className="col-sm-4 mb-4">
                <div className="card h-100 text-center">
                    <img src={bookDetails.image} className='card-image-top d-block mx-auto'  width={'50%'} height={'80%'} alt={bookDetails.name} />
                    <div className="card-body">
                        <h5 className="card-title">{bookDetails.name}</h5>
                        <p className="card-text">ID: {bookDetails.id}</p>
                        <p className="card-text">Price: {bookDetails.price}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-around">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-outline-secondary">MoreInfo</button>
                    </div>
                </div>
            </div>
        </>
    )
}