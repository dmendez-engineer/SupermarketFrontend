/* eslint-disable no-empty */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import useProject from '../hooks/useProject'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


function NewUser() {
  const {handleSubmitCreateUser}=useProject();
  const[name,setName]=useState('');
  const[lastName,setLastName]=useState('');
  const[email,setEmail]=useState('');
  const[nid,setNid]=useState('');
  const[password,setPassword]=useState('');
  const[passwordConfirm,setPasswordConfirm]=useState('');
  const[user,setUser]=useState({});

  
  const handleSubmit=async (e)=>{
    const url=`https://localhost:7066/api/User/registerUser`;
    e.preventDefault();
    if([name,lastName,email,nid,password,passwordConfirm].includes('')){
      toast("All the fields are required");
      return;
    }
    if(password.trim().toLowerCase() !== passwordConfirm.trim().toLowerCase()){
      toast("The passwords must be the same");
      return;
    }
    const userRegiser={
      name:name,
      lastName:lastName,
      email:email,
      nid:nid,
      password:password,
      passwordConfirm:passwordConfirm
    };
    try {
      const {data}=await axios.post(url,userRegiser);
     
     
     
      if(data.sucess==="200"){
        toast(`${data.text}: Welcome ${data.genericObject.name}`);
      }else{
        toast(data.text);
      }

    } catch (error) {
        console.log("ERRO: ",error);     
    }
    
  }
  
  
  return (
    <div>
    <form className='bg-fuchsia-100 shadow-xl rounded-lg py-44  px-6' onSubmit={handleSubmit}>
    <h1 className='mt-0 mb-10 text-4xl font-bold '>Fill out the Form</h1>  
        
      
      
        <div className='my-5'>
         
        <input type='text' className='bg-white shadow-lg placeholder:italic placeholder:text-slate-400 rounded-lg p-2 w-full'
        placeholder='Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
          </div>

          
          <div className='my-5'>
          
            <input type='text' className='bg-white shadow-lg placeholder:italic placeholder:text-slate-400 rounded-lg p-2 w-full'
            placeholder='LastName'
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            />
          </div>
          <div className='my-5'>
          
            <input type='email' className='bg-white shadow-lg placeholder:italic placeholder:text-slate-400 rounded-lg p-2 w-full'
            placeholder='Email Address'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='my-5'>
          
            <input type='text' className='bg-white shadow-lg placeholder:italic placeholder:text-slate-400 rounded-lg p-2 w-full'
            placeholder='NID'
            value={nid}
            onChange={(e)=>setNid(e.target.value)}
            />
          </div>
          <div className='my-5'>
          
            <input type='password' className='bg-white shadow-lg placeholder:italic placeholder:text-slate-400 rounded-lg p-2 w-full'
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className='my-5'>
          
            <input type='password' className='bg-white shadow-lg placeholder:italic placeholder:text-slate-400 rounded-lg p-2 w-full'
            placeholder='Confirm Password'
            value={passwordConfirm}
            onChange={(e)=>setPasswordConfirm(e.target.value)}
            />
          </div>
          
          <div className='mb-10'>
          <input 
          type='submit'
          className='p-5 rounded-lg shadow-xl text-white 
          font-bold text-2xl w-full bg-green-400 cursor-pointer hover:bg-green-700' 
          value='Create'
          />
          </div>
   
          <Link 
          to="/"
          className='text-xl text-gray-500 cursor-pointer font-bold mt-5
          hover:text-gray-700
          '>Do you already have an account? Login</Link>
    </form>
    <ToastContainer/>
    
    </div>
  )
}

export default NewUser