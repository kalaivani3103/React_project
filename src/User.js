import React from 'react'

export default function User({ userDetails }) {
    return (
        <>
            <tr>
                <td>{userDetails.id}</td>
                <td>{userDetails.name}</td>
                <td>{userDetails.salery}</td>
                <td>{userDetails.designation}</td>
                <td className='text-center'>
                    <button type='button' className='btn btn-info me-3'>Edit</button>
                    <button type='button' className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        </>
    )
}