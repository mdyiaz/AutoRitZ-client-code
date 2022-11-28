import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider';
import useTitle from '../../../hooks/useTitle';

const MyOrders = () => {

  const { user } = useContext(AuthContext);

  useTitle('My Orders');




// useQuery start____

  const url = `http://localhost:5000/electricbookings?email=${user?.email}`;

  const {data: electricbookings = [] } = useQuery({
    queryKey: ['electricbookings', user?.email],
    queryFn: async () =>{
      const res = await fetch(url,{
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })

// useQuery End____




const url1 = `http://localhost:5000/luxurybookings?email=${user?.email}`;

  const {data: luxurybookings = [] } = useQuery({
    queryKey: ['luxurybookings', user?.email],
    queryFn: async () =>{
      const res = await fetch(url1,{
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })





  const url2 = `http://localhost:5000/microbusbookings?email=${user?.email}`;

  const {data: microbusbookings = [] } = useQuery({
    queryKey: ['microbusbookings', user?.email],
    queryFn: async () =>{
      const res = await fetch(url2,{
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })


    return (
        <div>
            <h1 className='text-3xl font-bold mb-5'>My Orders</h1>


            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <th>Car Name</th>
        <th>Price</th>
        <th>Payment</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      



      {
        electricbookings.map((electricbooking, i) => <tr
        key={electricbooking._id}
        >
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
               
                <img src={electricbooking.productImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{electricbooking.productName}</div>
              
            </div>
          </div>
        </td>
        <td>
         {electricbooking.price}
          
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
      }



      {/* second Map for Luxury car____________________________________________________________ */}



      {


          luxurybookings.map((luxurybooking, i) => <tr
          key={luxurybooking._id}
          >
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={luxurybooking.productImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              
            </div>
          </div>
        </td>
        <td>
         {luxurybooking.price}
         
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)


      }





      {/* 3rd map for microBusCar_______________________________________________________________________ */}


      {
        microbusbookings.map((microbusbooking, i) => <tr
        key={microbusbooking._id}
        >
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={microbusbooking.productImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              
            </div>
          </div>
        </td>
        <td>
          {microbusbooking.price}
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
      }



    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyOrders;