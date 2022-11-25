import React, { useEffect, useState } from 'react';
import MicroBusCarBookingModal from './BookingModal/MicroBusCarBookingModal';

const MicroBusCarList = () => {

    const [microBusCarList, setMicroBusCarList] = useState([]);

    const [buyMicroBusCar, setBuyMicroBusCar] = useState(null);

    useEffect( () => {
        fetch('http://localhost:5000/microbuscarlist')
        .then(res => res.json())
        .then(data => setMicroBusCarList(data))
    },[])
    return (
       <section>


<div className='grid lg:grid-cols-3 sm:grid-cols-1 mb-10 mt-10'>
        {
            microBusCarList.map(microbusCar => {
                return (
                    <div key={microbusCar._id}
                    setBuyMicroBusCar={setBuyMicroBusCar}
                    >


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

 <button className="btn btn-outline btn-primary mb-2 text-white">Uses: {microbusCar.yearsOfUse}</button>


  <button className="btn btn-warning mb-2 text-white">Selling Price: {microbusCar.price}</button>
  <button className="btn btn-active btn-primary mb-2 text-white">Original Price: {microbusCar.originalPrice}</button>
  <label htmlFor="booking-modal-3" className="btn btn-success w-full text-white" onClick={() => setBuyMicroBusCar(microbusCar)} >Book Now</label>


</div>
</div>
</div>


                    </div>
                )
            })
        }
    </div>

    {
        buyMicroBusCar &&
        
        <MicroBusCarBookingModal
        buyMicroBusCar={buyMicroBusCar}
        setBuyMicroBusCar={setBuyMicroBusCar}
        >
    
        </MicroBusCarBookingModal>
    }

       </section>
    );
};

export default MicroBusCarList;