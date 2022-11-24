import React, { useEffect, useState } from 'react';
import car_1 from '../../../assets/Categories/electric_car.webp';
import car_2 from '../../../assets/Categories/Rolls_Royce.jpeg';
import car_3 from '../../../assets/Categories/microbus_car.jpeg';
import { Link } from 'react-router-dom';



const CategoriesSection = () => {

  
    
    return (
        <div className='mb-32'>
            <h1 className='text-center text-5xl font-bold mb-4 '>Let's Find Your dream Car</h1>
            <h3 className='text-center text-2xl '>We recommened the very best and newest cars today. and also a <br /> friendly price for you</h3>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 mt-20 gap-10'>


                <div>
                    <img className='rounded-xl h-64 w-11/12' src={car_1} alt="" />
                    <p className='text-3xl font-bold mt-3 text-center'>Electric Car</p>
                   <Link to="/electriccarlist"><button className="btn btn-secondary w-full mt-3">See _ More</button></Link>
                

                </div>


                <div>
                    <img className='rounded-xl h-64 w-11/12' src={car_2} alt="" />
                    <p className='text-3xl font-bold mt-3 text-center'>Luxury car</p>
                    <button className="btn btn-secondary w-full mt-3">See _ More</button>

                </div>


                <div>
                    <img className='rounded-xl h-64 w-11/12' src={car_3} alt="" />
                    <p className='text-3xl font-bold mt-3 text-center'>MicroBus Car</p>
                    <button className="btn btn-secondary w-full mt-3">See _ More</button>

                </div>


            </div>
        </div>
    );
};

export default CategoriesSection;