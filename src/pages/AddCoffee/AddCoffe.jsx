import React from 'react';
import { useForm } from "react-hook-form";
import bgImg from '../../assets/images/more/1.png'
import Swal from 'sweetalert2'
import { FaChevronLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AddCoffe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    // console.log(data);

    fetch('http://localhost:5000/addcoffee', 
    {
      method: "POST",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId) {
        Swal.fire({
          title: 'Added!',
          text: 'Your Coffee Has been Added',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
   <div className='bg-center bg-cover object-cover' style={{ backgroundImage: `url(${bgImg})` }}>
     <div className='w-10/12 mx-auto my-20 rounded-2xl'>
     <Link to={'/'}><h3 className='text-2xl font-semibold mb-10 hover:-translate-x-3'><FaChevronLeft className='inline-block' ></FaChevronLeft> Back to Home Page</h3></Link>
      <div className='bg-[#F4F3F0] p-3 md:p-20'>
      <div className='text-center space-y-5'>
      <h1 className='text-4xl font-semibold '>Add Coffie</h1>
      <p className='md:px-10 text-gray-700 pb-12'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='md:flex justify-between gap-5'>
          <div className='w-full space-y-2'>
          <label className='text-md font-semibold'>Name</label>
         
        <input type="text" placeholder="name" 
         {...register("name")} 
        className="input input-bordered w-full" />  
        </div>

        <div className='w-full space-y-2'>
          <label className='text-md font-semibold'>Chef</label>
         
        <input type="text" placeholder="chef" 
         {...register("chef")} 
        className="input input-bordered w-full" />  
        </div>
        </div> 

        <div className='md:flex justify-between gap-5 mt-3'>
          <div className='w-full space-y-2'>
          <label className='text-md font-semibold'>Supplier</label>
         
        <input type="text" placeholder="Supplier" 
         {...register("Supplier")} 
        className="input input-bordered w-full" />  
        </div>

        <div className='w-full space-y-2'>
          <label className='text-md font-semibold'>Taste</label>
         
        <input type="text" placeholder="Taste" 
         {...register("Taste")} 
        className="input input-bordered w-full" />  
        </div>
        </div> 

        <div className='md:flex justify-between gap-5 mt-3'>
          <div className='w-full space-y-2'>
          <label className='text-md font-semibold'>Category</label>
         
        <input type="text" placeholder="Category" 
         {...register("Category")} 
        className="input input-bordered w-full" />  
        </div>

        <div className='w-full space-y-2'>
          <label className='text-md font-semibold'>Details</label>
         
        <input type="text" placeholder="Details" 
         {...register("Details")} 
        className="input input-bordered w-full" />  
        </div>
        </div> 

        <div className='w-full space-y-2 mt-3'>
          <label className='text-md font-semibold'>Photo</label>
         
        <input type="text" placeholder="Photo URL" 
         {...register("Photo")} 
        className="input input-bordered w-full" />  
        </div>


        <input type="submit" className="input input-bordered w-full mt-5 bg-[#D2B48C] text-black font-bold"  value='Add coffee'/>
        </form>
      </div>
    </div>
   </div>
  );
};

export default AddCoffe;