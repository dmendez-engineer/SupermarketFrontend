/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <Fragment>
      <div className='p-10 bg-gray-400 rounded-lg shadow-2xl flex justify-between items-center'>
        <div className='flex gap-5'>
          <Link to={'/customer'}  className=' uppercase p-4 bg-green-400 shadow-lg rounded-lg text-yellow-700 font-bold text-2xl hover:bg-green-700 hover:text-white '>Customers</Link>
          <Link className=' uppercase p-4 bg-green-400 shadow-lg rounded-lg text-yellow-700 font-bold text-2xl hover:bg-green-700  hover:text-white  '>Products</Link>
          <Link className='uppercase p-4 bg-green-400 shadow-lg rounded-lg text-yellow-700 font-bold text-2xl hover:bg-green-700  hover:text-white  '>Salesperson</Link>
        </div>
        <div>
          <Link className='uppercase p-4 bg-green-400 shadow-lg rounded-lg text-yellow-700 font-bold text-2xl hover:bg-green-700  hover:text-white  '>Customers</Link>
        </div>
      </div>
    
    </Fragment>
  )
}

export default Menu