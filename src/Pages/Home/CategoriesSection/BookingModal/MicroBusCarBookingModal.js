  import React, { useContext } from 'react';
  import toast from 'react-hot-toast';
  import { AuthContext } from '../../../../Contexts/Authprovider'
  
  
  const MicroBusCarBookingModal = ({setBuyMicroBusCar,  buyMicroBusCar}) => {
  
   const {user} = useContext(AuthContext)
  
    const handleBooking = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const phone = form.number.value;
      const location = form.location.value;
      const price = form.price.value;
  
     
  
      const booking = {
        name,
        productName: buyMicroBusCar.name,
        service: buyMicroBusCar._id,
        productImg: buyMicroBusCar.picture,
        email,
        phone,
        location,
        price
      }
      console.log(booking);
  
  
      fetch('https://b612-used-products-resale-server-side-mdyiaz.vercel.app/microbusbookings', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
       
        if (data.acknowledged){
          setBuyMicroBusCar(null);
          toast.success('Booking Confirmed')
        }
      })
     
     
    }
      return (
          <>
              <input type="checkbox" id="booking-modal-3" className="modal-toggle" />
  <div className="modal">
    <div className="modal-box relative">
      <label htmlFor="booking-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <h3 className="text-xl text-amber-700 font-bold">{buyMicroBusCar.name}</h3>
     
  
     <form className='grid grid-cols-1 gap-3 mt-5' onSubmit={handleBooking}>
  
     <p className="text-xl text-amber-700 font-bold">{buyMicroBusCar.name}</p>
              {/* <input name='car' type="text" className="input input-bordered w-full  " value={buyMicroBusCar.name} disabled />  */}
  
             
              <p className='font-bold'>Name</p>
              <input name='name' type="text"  className="input input-bordered w-full " defaultValue={user?.displayName}  disabled />
  
              <p className='font-bold'>Email</p>
              <input name='email' type="email" className="input input-bordered w-full " defaultValue={user?.email} disabled />
  
              <p className='font-bold'>Price</p>
              <input name='price' type="text" className="input input-bordered w-full  " value={buyMicroBusCar.price} disabled />
  
              <p className='font-bold'>Phone Number</p>
              <input name='number' type="number" placeholder="Phone Number" className="input input-bordered w-full " />
  
              <p className='font-bold'>Meeting Location</p>
              <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered w-full " />
  
            <br />
              <button type='submit' className="btn btn-active btn-primary w-full">Submit</button>
  
  
  
     </form>
  
  
    </div>
  </div>
          </>
      );
  };
  
  export default MicroBusCarBookingModal;