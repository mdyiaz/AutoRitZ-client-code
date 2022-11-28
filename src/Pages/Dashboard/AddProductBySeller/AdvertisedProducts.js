import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

const AdvertisedProducts = () => {

    const {data: advertized = [], isLoading} = useQuery({
        queryKey: ['advrtized'],
        queryFn: async () => {
            try{
                const res = await fetch('https://b612-used-products-resale-server-side-mdyiaz.vercel.app/advrtized')
                const data = await res.json();
                return data;
            }
            catch(error){
                

            }
        }

    });

    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div className='mb-10 mt-10 '>

            <h1 className='text-6xl text-center text-amber-700 mb-4 font-bold'>Advertized Item</h1>
            <p className='text-2xl text-center font-bold mb-10'>Presented Your Most Favourite Car</p>

            


            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            {
                advertized.map(add => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={add.addPhoto} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{add.productName}</h2>
                  <p className='font-bold'>Location: {add.area}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Price:{add.sellingPrice}</button>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
            </div>
            
        </div>
    );
};

export default AdvertisedProducts;