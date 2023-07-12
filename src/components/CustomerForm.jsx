/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react'
import Menu from '../pages/Menu';
import useProject from '../hooks/useProject';
import { ToastContainer, toast } from 'react-toastify';

function CustomerForm() {

    const {handlePostCustomer,customerSelected}=useProject();
    
    const[name,setName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[nid,setNid]=useState('');


    useEffect(()=>{
        if(customerSelected.id!==undefined){
            setName(customerSelected.name);
            setLastName(customerSelected.lastName);
            setEmail(customerSelected.email);
            setNid(customerSelected.nid);
        }
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault();

        if([name,lastName,email,nid].includes('')){
            toast('All the fields are required');
            return;
        }
        handlePostCustomer({
            name:name,
            lastName:lastName,
            email:email,
            nid:nid
        });

    }
  return (
    <Fragment>
    <Menu/>

        <ToastContainer/>
    <div className='mt-10 w-full  h-screen flex justify-center '>
        <form onSubmit={handleSubmit} className='bg-slate-500 flex gap-5 flex-col justify-center items-center
        rounded-xl shadow-2xl w-2/3 h-1/2
        '>
            
            <div className='w-1/3  mt-10'>
                <input type='text' className='w-full p-4 rounded-lg' placeholder='Name' 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>

            <div className='w-1/3'>
                <input type='text' className='w-full p-4 rounded-lg' placeholder='Last Name'
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                />
            </div>

            <div className='w-1/3'>
                <input type='email' className='w-full p-4 rounded-lg' placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>

            <div className='w-1/3'>
                <input type='text' className='w-full p-4 rounded-lg' placeholder='NID'
                value={nid}
                onChange={(e)=>setNid(e.target.value)}
                />
            </div>

            <button type='submit' className='p-3 bg-green-500 text-yellow-800 text-xl
            w-1/3 mb-5 rounded-lg
            uppercase font-bold'>Add User</button>
        </form>
    
    </div>
    </Fragment>
  )
}

export default CustomerForm