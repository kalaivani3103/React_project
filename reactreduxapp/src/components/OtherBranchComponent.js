import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { buyBook } from "../redux/actions/bookAction";
import { fetchUsers } from '../redux/actions/userAction';

export default function OtherBranchComponent() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);

    const numOfBooks = useSelector(state => state.book.numOfBooks);
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">📚 HCL Sample Store</h2>
                <div className="row">
                    {/* Books Section */}
                    <div className="col-md-6 text-center">
                        <h4>Number of Books available: {numOfBooks}</h4>
                        <button className="btn btn-success mt-2" onClick={() => dispatch(buyBook())}>Buy Book</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <h4>Number of users available: {JSON.stringify(users)}</h4>
                        <button className="btn btn-success mt-2" onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
                    </div>
                </div>
            </div>
        </>
    );
}