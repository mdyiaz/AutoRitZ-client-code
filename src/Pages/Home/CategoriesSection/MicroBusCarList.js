import React, { useEffect, useState } from 'react';

const MicroBusCarList = () => {

    const [microBusCarList, setMicroBusCarList] = useState([]);

    useEffect( () => {
        fetch('microbus.json')
        .then(res => res.json())
        .then(data => setMicroBusCarList(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 mb-10 mt-10'>
        {
            microBusCarList.map(microbusCar => {
                return (
                    <div key={microbusCar._id}>


<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={microbusCar.picture} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">
  {microbusCar.name}
  <div className="badge badge-secondary">SecondHand</div>
</h2>
<p className='mb-3'>{microbusCar.details}</p>
<div className="card-actions justify-end">
 <div className=''>
        <div className="badge badge-outline"><span className='font-bold'>Location:_ </span> { microbusCar.location}</div> 
        <div className="badge badge-outline"><span className='font-bold'>Span:_</span> {microbusCar.time}</div>
        <div className="badge badge-outline"><span className='font-bold'>Sellers Name:_</span> {microbusCar.sellersName}</div> <br />

 </div>

 <button className="btn btn-outline btn-primary">Uses: {microbusCar.yearsOfUse}</button>


  <button className="btn btn-warning">Selling Price: {microbusCar.price}</button>
  <button className="btn btn-active btn-primary">Original Price: {microbusCar.originalPrice}</button>


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

export default MicroBusCarList;