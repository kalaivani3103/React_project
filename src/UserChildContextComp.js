import React, { useContext } from 'react'
import { userContext } from './App'
import UserUseEffect from './UserUseEffect'

export default function UserChildContextComp() {
    const data = useContext(userContext)

    return (
        <>
            <div className='container mt-4'>
                <h2 className='text-center mb-4'>User Details showed by using Context</h2>
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