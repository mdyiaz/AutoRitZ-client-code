import React, { useEffect, useState } from 'react';

const ElectricCarList = () => {

    const [electricCarList, setElectricCarList] = useState([]);

    useEffect( () => {
        fetch('electric.json')
        .then(res => res.json())
        .then(data => setElectricCarList(data))
    },[])

    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 mb-10 mt-10'>
            {
                electricCarList.map(electricCar => {
                    return (
                        <div key={electricCar._id}>


<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={electricCar.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {electricCar.name}
      <div className="badge badge-secondary">SecondHand</div>
    </h2>
    <p className='mb-3'>{electricCar.details}</p>
    <div className="card-actions justify-end">
     <div className=''>
            <div className="badge badge-outline"><span className='font-bold'>Location:_ </span> { electricCar.location}</div> 
            <div className="badge badge-outline"><span className='font-bold'>Span:_</span> {electricCar.time}</div>
            <div className="badge badge-outline"><span className='font-bold'>Sellers Name:_</span> {electricCar.sellersName}</div> <br />

     </div>

     <button className="btn btn-outline btn-primary">Uses: {electricCar.yearsOfUse}</button>


      <button className="btn btn-warning">Selling Price: {electricCar.price}</button>
      <button className="btn btn-active btn-primary">Original Price: {electricCar.originalPrice}</button>


    </div>
  </div>
</div>


                        </div>
                    )
                })
            }
        </div>
    );
};

export default ElectricCarList;