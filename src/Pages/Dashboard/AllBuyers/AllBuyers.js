import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Spinner from '../../Shared/Spinner/Spinner'

const AllBuyers = () => {

  useTitle('AllBuyers');

  const [deleteBUyer, setDeleteBuyer] = useState(null);

  const closeModal = () => {
    setDeleteBuyer(null);
  }






 








    const {data: buyers = [], isLoading, refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    })








    const handleDeleteBuyer = buyer => {
      fetch(`http://localhost:5000/buyers/${buyer._id}` , {
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



   if(isLoading){
      return <Spinner></Spinner>
   }




    return (
        <div>
            <h2 className='text-2xl font-bold mb-3 text-orange-700'>All Buyers</h2>


            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th className='font-bold text-orange-700 text-sm'>Serial</th>
        <th className='font-bold text-orange-700 text-sm'>Name</th>
        <th className='font-bold text-orange-700 text-sm'>Email</th>
        <th className='font-bold text-orange-700 text-sm'>Delete</th>
       
      </tr>
    </thead>
    <tbody>
      
      {
        buyers.map((user, i) => <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            
            <td><label onClick={() => setDeleteBuyer(user)} htmlFor="confirmation-modal" className="btn btn-error">Delete User</label></td>
           
          </tr>)
      }
    </tbody>
  </table>
</div>

{
  deleteBUyer && 
  <ConfirmationModal

  title={`Are you Sure You Want to Delete_?`}
  closeModal= {closeModal}
  successAction = {handleDeleteBuyer}
  modalData = {deleteBUyer}


  >

  </ConfirmationModal>

}


        </div>
    );
};

export default AllBuyers;