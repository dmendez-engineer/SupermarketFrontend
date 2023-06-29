/* eslint-disable no-unused-vars */
import React from 'react'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-black font-bold text-4xl'>CRM - Supermarket</h1>
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
            <div className="md:w-2/3 lg:w-full">
                <Outlet/>
            </div>
     </main>
    </div>
  )
}

export default Layout