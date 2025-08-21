import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
//import manually react-hook-form

const BASE_URL = "http://localhost:8080/users"
export default function ReactHookFormUserComp() {
    const { register, handleSubmit, setValue } = useForm()
    const [users, setUsers] = useState([])
    const [updateUserId, setUserId] = useState(null)

    const fetchusers = async () => {
        try {
            const response = await axios.get(BASE_URL)
            setUsers(response.data)
        } catch (error) {
            console.error("Error fetching data", error)
        }
    }
    //whenever we have fetch the new record after updating deleting that's only we used common method above. 
    useEffect(() => {
        fetchusers()
    }, [])

    //store data
    const onuserFormSubmit = async (formDataObj) => {
        try {
            if (updateUserId) {
                const userResponse = await axios.put(`${BASE_URL}/${updateUserId}`, formDataObj);
                setUserId(null);
                console.log("Data successfully updated", userResponse.data)
            } else {
                const userResponse = await axios.post(BASE_URL, formDataObj);
                console.log("Data successfully stored", userResponse.data)
            }
            fetchusers()
        } catch (error) {
            console.error("Error while storing/updating the data using JSON server", error)
        }
    }

    const handleEdit = (user) => {
        setUserId(user.id);
        setValue('userName', user.userName);
        setValue('userEmail', user.useEmail);
        setValue('userPassword', user.userPassword);
        setValue('userConfirmPassword', user.userConfirmPassword);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            fetchusers();
        } catch (error) {
            console.error("Error deleting user", error);
        }
    };




    //username using register function. normal pattern //i and start ^ and end $ like /^ $/i and inside /^[inside any]$/i
    return (
        <>

            <div className='container mt-4'>
                <hr></hr>
                <h2 className='text-center mb-4'>User Data using React Hook Component</h2>
                <form onSubmit={handleSubmit(onuserFormSubmit)}>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'> User Name:</label>
                        <div className='col-sm-3'><input className='form-control' {...register('userName')} /></div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Email:</label>
                        <div className='col-sm-3'><input className='form-control' type='email' {...register('useEmail')} /></div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Password:</label>
                        <div className='col-sm-3'><input className='form-control' type='password' {...register('userPassword')} /></div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Confirm Password:</label>
                        <div className='col-sm-3'><input className='form-control' type='password' {...register('userConfirmPassword')} /></div>
                    </div>

                    <div className='row mb-4'>
                        <div className='col-sm-10 offset-sm-2 text-mid'><button className='btn btn-primary' type='submit' name='submit'>Submit</button></div>
                    </div>
                </form>
                <table className='table table-striped table-bordered'>
                    <thead className='text-center'>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* colSpan="4" //Ensures the message spans all columns. */}
                        {users.length === 0 ? (<tr><td colSpan="5" className="text-center text-muted">No users found.</td></tr>) :
                            (users.map(user => <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>
                                <td>{user.userPassword}</td>
                                <td className='text-center'>
                                    <button type='button' className='btn btn-info me-3' onClick={() => handleEdit(user)}>Edit</button>
                                    <button type='button' className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>

            </div>
        </>
    )
}