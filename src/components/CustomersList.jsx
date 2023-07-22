/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import useProject from '../hooks/useProject'
import { Link } from 'react-router-dom';

function CustomersList({customers}) {

  const{handleSelectCustomer,handleDeleteCustomer}=useProject();
  

  return (
    <div  className=' p-4 bg-green-500 shadow-2xl border-spacing-1 mb-10 mt-10 rounded-2xl flex justify-between items-center'>
      <div>
      <p className='text-4xl mt-10 font-bold'>Name: {customers.name} {' '} {customers.lastName}</p>
      <p className='text-4xl mt-10'>NID: {customers.nid}</p>
      <p className='text-4xl mt-10'>Email: {customers.email}</p>
      <p className='text-4xl mt-10'>State: {customers.State===true?<span className="font-bold">{'Active'}</span>:
      <span className="font-bold">{'Inactive'}</span>}</p>

      </div>
      <div>
        <Link className='p-3 bg-gray-400 rounded-xl font-bold text-xl hover:bg-gray-600 hover:text-white'
        to={'customerRegister'}
        onClick={()=>handleSelectCustomer(customers)}
        >Update</Link>
        <button className='p-3 bg-gray-400 rounded-xl font-bold text-xl
         hover:bg-gray-600 hover:text-white
         ml-5
         '
         onClick={()=>handleDeleteCustomer(customers.id)}
         >Delete</button>
      </div>   
   
      
    </div>
  )
}

export default CustomersList