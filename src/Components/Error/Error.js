import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center fs-1 my-4">
            <h1>404!!!</h1>
            <h4>Page Not Found!!!!</h4>
            <Link to='/home'>
            <button className="btn btn-success fw-bold">Back to home</button>
            </Link>
        </div>
    );
};

export default Error;