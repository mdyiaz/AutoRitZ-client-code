import React from 'react';

const ExtraSection = () => {
    return (
        <div className='pb-10'>
            <h1 className='text-5xl font-bold text-center pb-5'>What Our Serve For You</h1>
            <p className='text-center text-2xl pb-36'>We provide many of the best services for you and you will get the <br /> best benefits here</p>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-20'>

                <div>
                    <h1 className='text-3xl font-bold'>Top Buy & Sell Car</h1>
                    <p className='text-xl'>Buy and sell the best and most trusted cars. We provide the best platform for you and easy to use</p>
                </div>

                <div>
                    <h1 className='text-3xl font-bold '>Easy Payment</h1>
                    <p className='text-xl'>Transactions are very easy and safe, you can pay using anything. and the money will be received by us first.</p>
                </div>

                <div>
                    <h1 className='text-3xl font-bold'>Easy To Use</h1>
                    <p className='text-xl'>We will make it easier for you to use our platform and be able to sell or but the car of your dreams.</p>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection;