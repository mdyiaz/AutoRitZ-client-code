import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import LuxuryCarBookingModal from './BookingModal/LuxuryCarBookingModal';

const LuxuryCarList = () => {

  useTitle('Luxury Car List');

    // const [luxuryCarList, setLuxuryCarList] = useState([]);

    const [buyLuxuryCar, setBuyLuxuryCar] = useState(null);





    const {data:luxuryCarList = [] } = useQuery({
      queryKey:['luxuryCarList'],
      queryFn: async () => {
        const res = await fetch('http://localhost:5000/luxurycarlist')
        const data = await res.json();
        return data;
        
      }
    })



    // useEffect( () => {
    //     fetch('http://localhost:5000/luxurycarlist')
    //     .then(res => res.json())
    //     .then(data => setLuxuryCarList(data))
    // },[])



    return (
    
       <section>


<div className='grid lg:grid-cols-3 sm:grid-cols-1 mb-10 mt-10'>
            {
              luxuryCarList &&
                luxuryCarList?.map(luxuryCar => {
                    return (
                        <div key={luxuryCar._id}
                        setBuyLuxuryCar={setBuyLuxuryCar}
                        >


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

     <button className="btn btn-outline btn-primary mb-2 text-white">Uses: {luxuryCar.yearsOfUse}</button>


      <button className="btn btn-warning mb-2 text-white">Selling Price: {luxuryCar.price}</button>
      <button className="btn btn-active btn-primary mb-2 text-white">Original Price: {luxuryCar.originalPrice}</button>
     
      <label htmlFor="booking-modal-2" className="btn btn-success w-full text-white" onClick={() => setBuyLuxuryCar(luxuryCar)}>Book Now</label>




    </div>
  </div>
</div>


                        </div>
                    )
                })
            }
        </div>


        {

            buyLuxuryCar &&

<LuxuryCarBookingModal
       buyLuxuryCar = {buyLuxuryCar}
       setBuyLuxuryCar={setBuyLuxuryCar}
>

</LuxuryCarBookingModal>

}




       </section>
    );
};

export default LuxuryCarList;