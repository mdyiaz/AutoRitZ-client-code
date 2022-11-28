import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Spinner from '../../Shared/Spinner/Spinner';
import AdvertisedProducts from './AdvertisedProducts';


const MyProducts = () => {

  const [deleteProduct, setDeleteProduct] = useState(null);

  useTitle('MyProducts');


  


  const closeModal = () =>{
    setDeleteProduct(null);
  }






    const {data:addProducts, isLoading, refetch } = useQuery({
        queryKey: ['addproducts'],
        queryFn: async () => {
            try{
                const res = await fetch('https://b612-used-products-resale-server-side-mdyiaz.vercel.app/addproducts', {
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        }
                });
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        }
    });






    // advertized product_____________________

const advataize = (id) => {
    const agree = window.confirm('Are you sure you want to Advertized_?');
    if(agree){
      fetch(`https://b612-used-products-resale-server-side-mdyiaz.vercel.app/addproducts/${id}`,{
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

        // advertized product_____________________

    






    const handleDeleteProduct = product => {
      fetch(`https://b612-used-products-resale-server-side-mdyiaz.vercel.app/addproducts/${product._id}`,{
            method: 'DELETE',
            headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          refetch();
          toast.success('Product Deleted Successfully')
        }


      })
  }



if(isLoading){
    return <Spinner></Spinner>
}





    return (
        <div>
             <h2  className='text-3xl font-bold mb-5'>My Product: {addProducts?.length}</h2>



             <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Sales Status</th>
        <th>Advertise Product</th>
        <th>Delete Product</th>
      </tr>
    </thead>
    <tbody>
    
      

      {
        addProducts.map((addProduct, i) => <tr>
        <th>{i+1}</th>
        <td>{addProduct.productName}</td>
        <td>Quality Control Speciali</td>
        
        <td>{ addProduct?.advrtized ?(

          <button className='btn btn-success'>Success</button>
        ) 
        
        : 
        
        <button onClick={() => advataize(addProduct?._id)} className="btn btn-active btn-primary">Advertise</button>}</td>



        <td><label onClick={() => setDeleteProduct(addProduct)} htmlFor="confirmation-modal" className="btn btn-accent">Delete</label></td>
      </tr>)
      }
      
      
      
    </tbody>
  </table>
</div>


{/* <h2>{getProducts.name}</h2> */}


{/* {
  getProducts.map(getProduct => <AdvertisedProducts
  key={getProduct._id}
  getProduct = {getProduct}
  >

  </AdvertisedProducts>)
} */}




{
  deleteProduct && 
  <ConfirmationModal
    title = {`Are you sure you want to Delete_?`}
    closeModal = {closeModal}
    successAction = {handleDeleteProduct}
    successButtonName = "Delete"
    modalData = {deleteProduct}

  ></ConfirmationModal>
}
        </div>
    );
};

export default MyProducts;