import React from 'react';
import error from '../assets/error.jpg';

const Error404Page = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
            <img className='' src={error} alt="" />
            <div className='mt-20 text-6xl font-bold text-center text-pink-600'>
                <p>You are in the Wrong Page</p>
                <p>Please go back to the Home Page</p>
            </div>
        </div>
    );
};

export default Error404Page;