import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AddProductBySeller = () => {
  useTitle('AddProduct');

    const {register, formState: { errors }, handleSubmit} = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();
   

    const handleAddProducts = data =>{
       
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(imgData => {
         if(imgData.success){
          console.log(imgData.data.url);

          const addProduct ={

            productName: data.carName,
            mainPrice: data.originalPrice,
            productCondition: data.conditionType,
            phone: data.mobileNumber,
            area: data.location,
            productsCategory: data.productCategory,
            yearOfPurchase: data.year,
            sellingPrice: data.price,
            addPhoto: imgData.data.url

          }

          // save addProducts information in database
          fetch('https://b612-used-products-resale-server-side-mdyiaz.vercel.app/addproducts', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addProduct)
          })
          .then(res => res.json())
          .then(result => {
            console.log(result); 
            toast.success(`${data.carName} is added successfully`);
            navigate('/dashboard/myproducts')
          })

         }
        })



    }

    return (
        <div className=' p-7 gap-5'>
            <h2  className='text-3xl font-bold mb-5'>Add Product</h2>




            <form  onSubmit={handleSubmit(handleAddProducts)}  className='grid lg:grid-cols-2 sm:grid-cols-1'>
      


        <div>





        <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Car Name</span>
  </label>
  <input type="text" {...register("carName", {required: "Car Name is required"})} placeholder="Enter Your Car Name" className="input input-bordered w-full " />
  {errors.carName && <p className='text-red-500' role="alert"> {errors.carName?.message}</p>}
 
</div>




<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Original Price</span>
  </label>
  <input type="number" {...register("originalPrice", {required: "Price is required"})} placeholder="Enter Your Car Price" className="input input-bordered w-full " />
  {errors.originalPrice && <p className='text-red-500' role="alert"> {errors.originalPrice?.message}</p>}
 
</div>







<div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Condition Type</span>
                        </label>
                        <select
                            {...register("conditionType", {
                                required: true
                            })}
                            className="select select-bordered w-full ">
                            <option disabled selected>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                       
</div>






<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Mobile Number</span>
  </label>
  <input type="number" {...register("mobileNumber", {required: "Mobile Number is required"})} placeholder="Enter Your Mobile Number" className="input input-bordered w-full " />
  {errors.mobileNumber && <p className='text-red-500' role="alert"> {errors.mobileNumber?.message}</p>}
 
</div>




<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Location</span>
  </label>
  <input type="text" {...register("location", {required: "location is required"})} placeholder="Enter Your location" className="input input-bordered w-full " />
  {errors.location && <p className='text-red-500' role="alert"> {errors.location?.message}</p>}
 
</div>






        </div>












<div>

<div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <select
                            {...register("productCategory", {
                                required: true
                            })}
                            className="select select-bordered w-full ">
                            <option disabled selected>Electric Car</option>
                            <option>Luxury Car</option>
                            <option>MicroBus Car</option>
                        </select>
                       
</div>





<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Year of Purchase</span>
  </label>
  <input type="number" {...register("year", {required: "Year of purchase  is required"})} placeholder="Year Of Purchase" className="input input-bordered w-full " />
  {errors.year && <p className='text-red-500' role="alert"> {errors.year?.message}</p>}
 
</div>






  <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
 
  <input type="number" {...register("price", {required: "Price is required"})} placeholder="Enter Price" className="input input-bordered w-full " />
  {errors.price && <p className='text-red-500' role="alert"> {errors.price?.message}</p>}
</div>








<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Add Photo</span>
  </label>
 
  <input type="file" {...register("image", {required: "Image is required"})}  className="input input-bordered w-full " />
  {errors.image && <p className='text-red-500' role="alert"> {errors.image?.message}</p>}
</div>



</div>


     
     
      
<button className="btn btn-active btn-primary w-full mt-10" type='submit'>Add Product</button>

{/* {signUpError && <p className='text-red-500'>{signUpError}</p>} */}
    </form>
        </div>
    );
};

export default AddProductBySeller;