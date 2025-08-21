import React, { useEffect, useState } from 'react';
import UserUseEffect from './UserUseEffect';

export default function UserListUseEffect() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setData(users))
    }, [])

    return (
        <>
            <div className='container mt-4'>
                <h2 className='text-center mb-4'>User Details</h2>
                <table className='table table-striped table-bordered'>
                    <thead className='text-center'>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => <UserUseEffect key={user.id} userDetails={user} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}