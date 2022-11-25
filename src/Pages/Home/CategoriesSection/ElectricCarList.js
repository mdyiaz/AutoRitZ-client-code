import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import BookingModal from './BookingModal/BookingModal';

const ElectricCarList = () => {

    // const [electricCarList, setElectricCarList] = useState([]);

    const [buyElectricCar, setBuyElectricCar] = useState(null);

// useQuery Start____

    const {data:electricCarList = [] } = useQuery({
      queryKey:['electricCarList'],
      queryFn: async () => {
        const res = await fetch('http://localhost:5000/electriccarlist')
        const data = await res.json();
        return data;
        
      }
    })

// useQuery End____



    // useEffect( () => {
    //     fetch('http://localhost:5000/electriccarlist')
    //     .then(res => res.json())
    //     .then(data => setElectricCarList(data))
    // },[])

    return (
       <section>

<div className='grid lg:grid-cols-3 sm:grid-cols-1 mb-10 mt-10'>
            {
                electricCarList.map(electricCar => {
                    return (
                        <div key={electricCar._id}
                        setBuyElectricCar={setBuyElectricCar}
                        
                        >


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

     <button className="btn btn-outline btn-primary text-white mb-2">Uses: {electricCar.yearsOfUse}</button>


      <button className="btn btn-warning text-white mb-2">Selling Price: {electricCar.price}</button>
      <button className="btn btn-active btn-primary text-white mb-2">Original Price: {electricCar.originalPrice}</button>


     
      <label htmlFor="booking-modal" className="btn btn-success w-full text-white" onClick={() => setBuyElectricCar(electricCar)}>Book Now</label>



    </div>
  </div>
</div>


                        </div>
                    )
                })
            }
        </div>

{

buyElectricCar &&
        <BookingModal
        
        buyElectricCar = {buyElectricCar}
        setBuyElectricCar={setBuyElectricCar}
        >
        </BookingModal>
}

       </section>
    );
};

export default ElectricCarList;