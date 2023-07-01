/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function CustomersList({customers}) {
  console.log(customers);
  return (
    <div  className=' p-4 bg-green-500 shadow-2xl border-spacing-1 mb-10 mt-10 rounded-2xl'>
      <p className='text-4xl mt-10 font-bold'>Name: {customers.name} {' '} {customers.lastName}</p>
      <p className='text-4xl mt-10'>NID: {customers.nid}</p>
      <p className='text-4xl mt-10'>Email: {customers.email}</p>
      <p className='text-4xl mt-10'>State: {customers.State===true?<span className="font-bold">{'Active'}</span>:
      <span className="font-bold">{'Inactive'}</span>}</p>

      
    </div>
  )
}

export default CustomersList