import React, { useEffect, useState } from 'react';

const LuxuryCarList = () => {

    const [luxuryCarList, setLuxuryCarList] = useState([]);

    useEffect( () => {
        fetch('luxury.json')
        .then(res => res.json())
        .then(data => setLuxuryCarList(data))
    },[])
    return (
    
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 mb-10 mt-10'>
            {
                luxuryCarList.map(luxuryCar => {
                    return (
                        <div key={luxuryCar._id}>


<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={luxuryCar.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {luxuryCar.name}
      <div className="badge badge-secondary">SecondHand</div>
    </h2>
    <p className='mb-3'>{luxuryCar.details}</p>
    <div className="card-actions justify-end">
     <div className=''>
            <div className="badge badge-outline"><span className='font-bold'>Location:_ </span> { luxuryCar.location}</div> 
            <div className="badge badge-outline"><span className='font-bold'>Span:_</span> {luxuryCar.time}</div>
            <div className="badge badge-outline"><span className='font-bold'>Sellers Name:_</span> {luxuryCar.sellersName}</div> <br />

     </div>

     <button className="btn btn-outline btn-primary">Uses: {luxuryCar.yearsOfUse}</button>


      <button className="btn btn-warning">Selling Price: {luxuryCar.price}</button>
      <button className="btn btn-active btn-primary">Original Price: {luxuryCar.originalPrice}</button>


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

export default LuxuryCarList;