import React, { useState } from 'react'

export default function ControlledComponent() {
    const [data, setData] = useState({ userName: '', email: '', password: '', confirmPassword: '' })
    const { userName, email, password, confirmPassword } = data //destructuring

    //if we want to give single method for onChange we can create a common method and put the target value and name.
    //js computing property name, so we can achieve this.
    const changeHandler = (e) => {
        // setData({...data,userName:'Kalai'}) //for dynmaic but key not.
        setData({ ...data, [e.target.name]: e.target.value }) //dynmically we can get the key and value.
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (userName.length < 6) {
            alert('username should be atleast 6 characters...')
        } else if (password !== confirmPassword) {
            alert('password are not matching...')
        } else if (password.length === 0) {
            alert('password should not be empty...')
        } else {
            console.log(data)
            //axios.post(url,data) // in future we will use to submit data and stored in database.
        }

    }

    return (
        <>
            <div className='container mt-4'>
                 <h2 className='text-center mb-4'>Controlled Component</h2>
                <form onSubmit={submitHandler}>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'> Product ID:</label>
                        <div className='col-sm-3'><input className='form-control' type='text' name='userName' value={userName} onChange={changeHandler} /></div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Product Name:</label>
                        <div className='col-sm-3'><input className='form-control' type='email' name='email' value={email} onChange={changeHandler} /></div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Price:</label>
                        <div className='col-sm-3'><input className='form-control' type='password' name='password' value={password} onChange={changeHandler} /></div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Description:</label>
                        <div className='col-sm-3'><input className='form-control' type='password' name='confirmPassword' value={confirmPassword} onChange={changeHandler} /></div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-10 offset-sm-2 text-mid'><button className='btn btn-primary' type='submit' name='submit'>Submit</button></div>
                    </div>
                </form >
            </div>
        </>
    )
}