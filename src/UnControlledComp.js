import React, { useRef } from 'react'

export default function UnControlledComp() {
    const userNameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)


    const submitHandler = (e) => {
        e.preventDefault()
        const userName = userNameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value

        if (userName.length < 6) {
            alert('username should be atleast 6 characters...')
        } else if (password !== confirmPassword) {
            alert('password are not matching...')
        } else if (password.length === 0) {
            alert('password should not be empty...')
        } else {
            console.log(userName, email, password, confirmPassword)
            //axios.post(url,data) // in future we will use to submit data and stored in database.
        }

    }

    return (
        <>
            <div className='container mt-4'>
                <h2 className='text-center mb-4'>Un Controlled Component</h2>
                <form onSubmit={submitHandler}>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'> Product ID:</label>
                        <div className='col-sm-3'><input className='form-control' type='text' name='userName' ref={userNameRef} /></div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Product Name:</label>
                        <div className='col-sm-3'><input className='form-control' ref={emailRef} /></div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Price:</label>
                        <div className='col-sm-3'><input className='form-control' ref={passwordRef} /></div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Description:</label>
                        <div className='col-sm-3'><input className='form-control' ref={confirmPasswordRef} /></div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-10 offset-sm-2 text-mid'><button className='btn btn-primary' type='submit' name='submit'>Sumbit</button></div>
                    </div>
                </form >
            </div>

        </>
    )
}