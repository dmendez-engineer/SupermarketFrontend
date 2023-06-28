/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import useProject from '../hooks/useProject'
import { Link, Route, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios';

function Login() {
    const url=`https://localhost:7066/api/User/login`;
    const {proof}=useProject();
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    
    if([username,password].includes('')){
      toast("The fields are required");
      return;
    }
    try{
        const userCredentiales={
          username:username,
          password:password
        };
        const {data}=await axios.post(url,userCredentiales);
        console.log("Res Login: ",data);
        if(data.sucess==="200"){
         
          toast(`${data.text}: ${data.genericObject.salesPerson.name}`);
          navigate("/admin");
          
        }else{
          toast(`${data.text}`);
        }
    }catch(err){
      console.log("Error Login: ",err);
    }

  }
    
  return (
    <div>
    <ToastContainer/>
    <form className='bg-fuchsia-100 shadow-xl rounded-lg py-44  px-6' onSubmit={handleSubmit}>
    <h1 className='mt-0 mb-10 text-4xl font-bold '>Type your credentials</h1>  
        
      
      
        <div className='my-5'>
         
        <input type='text' className='bg-white shadow-lg placeholder:italic placeholder:text-slate-400 rounded-lg p-2 w-full'
        placeholder='Username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
          </div>

          <div className='my-5'>
          
            <input type='password' className='bg-white shadow-lg placeholder:italic placeholder:text-slate-400 rounded-lg p-2 w-full'
            placeholder='Password'
            value={password}
           onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className='mb-10'>
          <button className='p-5 rounded-lg shadow-xl text-white font-bold text-2xl w-full bg-green-400'>Login</button>
          </div>
   
        
    
      <Link 
      to="register"
      className='text-xl text-gray-500 cursor-pointer font-bold mt-5
      hover:text-gray-700
      '>Does not have an account yet? Create one</Link>
    </form>
    
    </div>
  )
}

export default Login