import React from 'react';
import User from './User';

export default function UserList() {

    const users = [
        { id: 10131, name: "Geetha", salery: 30000, designation: "Software Engineer" },
        { id: 10132, name: "Raja", salery: 20000, designation: "Backend Developer" },
        { id: 10133, name: "Kannan", salery: 25000, designation: "Software Engineer" },
        { id: 10134, name: "Kiruthika", salery: 27000, designation: "Automation Tester" },
        { id: 10135, name: "Gowri", salery: 30000, designation: "Software Engineer" },
        { id: 10136, name: "Harsha", salery: 40000, designation: "Software Engineer" },
        { id: 10137, name: "Parthipan", salery: 450000, designation: "Software Engineer" },
    ]
    return (
        <>
            <div className='container mt-4'>
                <h2 className='text-center mb-4'>User Details</h2>
                <table className='table table-striped table-bordered'>
                    <thead className='text-center'>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>Salery</th>
                            <th>Designation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <User key={user.id} userDetails={user} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}