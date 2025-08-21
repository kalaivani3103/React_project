import React from 'react'

export default function ProductUseEffect({ productDetails }) {
    //d-block mx-auto -> to center the image in tha top position.
    //text-trucncate little bit only show and Shows full title in a tooltip on hover. 
    return (
        <>
            <div className="col-sm-4 mb-4">
                <div className="card h-100">
                    <img src={productDetails.image} className='card-image-top d-block mx-auto' width={'50%'} height={'80%'} alt={productDetails.name} />
                    <div className="card-body">
                        <h5 className="card-title text-truncate"
                            style={{ maxWidth: '300px' }}
                            title={productDetails.title}
                        >{productDetails.title}</h5>
                        <p className="card-text"> <span className='fw-bold'>ID:</span> {productDetails.id}</p>
                        <p className="card-text"><span className='fw-bold'>Price:</span> {productDetails.price}</p>
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