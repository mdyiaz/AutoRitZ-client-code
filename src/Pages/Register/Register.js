import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import signUpImg from '../../assets/register.jpg'
import { AuthContext } from '../../Contexts/Authprovider';

const Register = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const {createUser, updateUser} = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('');

    const handleRegister = (data) =>{

      setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('User created successfully');
            const userInfo = {
              displayName: data.name
            }

            updateUser(userInfo)
            .then(() => {})
            .catch(err => console.error (err));
        })
        .catch(error => {
          
          console.error(error)
          setSignUpError(error.message)
        });
    }
    return (
        <div className="hero w-full mb-10 my-20">
        <div className="hero-content grid md:grid-cols-2 flex-col gap-20 lg:flex-row">
          <div className="text-center lg:text-left">
           

            <img className='rounded-xl' src={signUpImg} alt="" />


          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Register now !</h1>


<div className='px-8 py-12'>


<form onSubmit={handleSubmit(handleRegister)}>
      


<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input type="text" {...register("name", {required: "Name is required"})} placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />
  {errors.name && <p className='text-red-500' role="alert"> {errors.name?.message}</p>}
 
</div>



      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
 
  <input type="email" {...register("email", {required: "Email address is required"})} placeholder="Enter email" className="input input-bordered w-full max-w-xs" />
  {errors.email && <p className='text-red-500' role="alert"> {errors.email?.message}</p>}
</div>



<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
 
  <input type="password" {...register("password", {required: "Password is required",
  minLength: { value: 6, message: "password must be 6 characters long" },
  pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have upperCase LowerCase number and special Characters"}
})} placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
  {errors.password && <p className='text-red-500' role="alert"> {errors.password?.message}</p>}
  
</div>


     
     
      
<button className="btn btn-active btn-primary w-full mt-10" type='submit'>Register !</button>

{signUpError && <p className='text-red-500'>{signUpError}</p>}
    </form>


</div>



            <p className=' text-sm text-center mb-5'>Already have an Account ? <Link to ="/login" className='text-orange-600 font-semibold'> Login</Link></p>

          


            
           

          </div>
        </div>
      </div>
    );
};

export default Register;