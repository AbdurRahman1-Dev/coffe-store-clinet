import React, { useEffect, useState } from 'react';
import { FaCoffee, FaEye, FaEdit, FaTrashAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import bgIMg from '../../assets/images/more/1.png'
import Swal from 'sweetalert2';

const Products = () => {

  const [coffees, setCoffees] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/addcoffee')
    .then(res => res.json())
    .then(data => setCoffees(data))
  },[])

  const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          
          // delete from ui
          const updatedCoffee = coffees.filter(coffee => coffee._id !== id)
          setCoffees(updatedCoffee)

          // delete from database
          fetch(`http://localhost:5000/addcoffee/${id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0) {
                Swal.fire(
                'Deleted!',
                'Your Coffee has been deleted.',
                'success'
              )
            }
            console.log(data);
          })
        }
      })
  }
  return (
   <div className='bg-cover bg-top object-cover' style={{ backgroundImage: `url(${bgIMg})` }}>
     <div className='my-20 w-10/12 mx-auto'>
      <div className="flex flex-col w-full border-opacity-50 text-center">
        <div className="divider md:w-2/12 mx-auto"> Sip & Savor </div>
      </div>
      <div className='w-full text-center'>
      <h3 className='text-4xl drop-shadow-lg shadow-black text-[#331A15]'>Our Popular Products</h3>
        <Link to='/addcoffe' className="px-3 py-2 hover:bg-amber-600 mx-auto w-44 rounded-lg  mt-3 border-0 text-black bg-[#E3B577] inline-block">Add New Coffee <FaCoffee className='inline-block'></FaCoffee></Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
        {
          coffees.map(coffee => {
          const {name, chef, _id, Photo, Taste} = coffee
  
            return (
              <div key={coffee._id}>
                <div className="card flex-col md:flex-row card-side bg-[#F5F4F1] opacity-90 ">
                  <figure><img className='max-w-fit' src={Photo} alt="Movie"/></figure>
                  <div className="card-body flex flex-row justify-between items-center">
                    <div className='space-y-4'>
                    <p><strong>Name:</strong> {name} </p>
                    <p><strong>Chef:</strong> {chef} </p>
                    <p><strong>Taste:</strong> {Taste} </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                    <Link to={'/view'}> <button className='bg-[#D2B48C] p-3 rounded-sm'><FaEye className='text-white'></FaEye></button> </Link> 

                    <Link to={`/edit/${_id}`}> <button className='bg-[#3C393B] p-3 rounded-sm'><FaEdit className='text-white'></FaEdit></button> </Link>

                   <button onClick={()=> handleDelete(_id)} className='bg-[#EA4744] p-3 rounded-sm'><FaTrashAlt className='text-white'></FaTrashAlt></button>
                  </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
   </div>
  );
};

export default Products;