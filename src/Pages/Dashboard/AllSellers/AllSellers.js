import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Spinner from '../../Shared/Spinner/Spinner'

const AllSellers = () => {

    const [deleteSeller, setDeleteSeller] = useState(null);

    useTitle('AllSellers');

    const closeModal = () => {

      setDeleteSeller(null);

    }


    

    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://b612-used-products-resale-server-side-mdyiaz.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    })




    const handleDeleteSeller = seller => {
      fetch(`https://b612-used-products-resale-server-side-mdyiaz.vercel.app/users/${seller._id}` , {
           method: 'DELETE',
           headers: {
               authorization: `bearer ${localStorage.getItem('accessToken')}`
           }
      })
      .then(res => res.json())
      .then(data => {
       
        if(data.deletedCount > 0){
          refetch();
          toast.success('Delete Successfull');
        }
      
      })
   }




   const handleVerifySeller = (id) => {
    const agree = window.confirm('Are you sure you want to Advertized_?');
    if(agree){
      fetch(`https://b612-used-products-resale-server-side-mdyiaz.vercel.app/users/${id}`,{
        method: 'PUT'
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          console.log(data);
          toast.success('Successfull');
          refetch();
        }
      })
      .catch(err => console.error(err));
    }
}









   if(isLoading){
      return <Spinner></Spinner>
   }



    return (
        <div>
            <h2 className='text-2xl font-bold mb-3 text-orange-700'>All sellers</h2>


            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th className='font-bold text-orange-700 text-sm'>Serial</th>
        <th className='font-bold text-orange-700 text-sm'>Name</th>
        <th className='font-bold text-orange-700 text-sm'>Email</th>

        <th className='font-bold text-orange-700 text-sm'>Verify Seller</th>

        <th className='font-bold text-orange-700 text-sm'>Delete</th>
       
      </tr>
    </thead>
    <tbody>
      
      {
        users.map((user, i) => <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ user?.verify ?(

              <button className='btn btn-success'>Verify</button>
            )

            :
              <button onClick={() => handleVerifySeller(user._id)} className="btn btn-active btn-primary mt-2">UnVerified</button>
              }</td>

            <td><label onClick={() => setDeleteSeller(user)} htmlFor="confirmation-modal" className="btn btn-error">Delete User</label></td>
           

           
          </tr>
          
          )
      }
    </tbody>
  </table>
</div>

{

deleteSeller && 
<ConfirmationModal

 title={`Are you Sure You Want to Delete_?`}
 closeModal = {closeModal}
 successAction = {handleDeleteSeller}
 modalData = {deleteSeller}


>

</ConfirmationModal>

}
        </div>
    );
};

export default AllSellers;