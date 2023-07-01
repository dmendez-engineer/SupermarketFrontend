/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState,useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import useProject from "../hooks/useProject";
import { toast } from "react-toastify";


const ProjectContext=createContext();

    
    

const ProjectProvider=({children})=>{
    const [proof,setProof]=useState('Proof AGAIN');


    const[customers,setCustomers]=useState([]);
    const url=`https://localhost:7066/api/Customer`;

    useEffect(()=>{
        const getCustomers=async()=>{

            try{
                const{data}=await axios.get(`${url}/getCustomers`);
               
                setCustomers(data.genericObject);
    
            }catch(err){
                console.log("ERROR GETCUSTOMERS: ",err);
            }
        }
        getCustomers();
    },[]);


    const handleSubmitCreateUser=(user)=>{
        console.log("Receiving the user in the provider: ",user);
    }
    const handlePostCustomer=async(customer)=>{

        console.log(customer);
        try {
            const urlPost='https://localhost:7066/api/Customer/postCustomer';
            const {data}=await axios.post(urlPost,customer);
            console.log(data);
            if(data.sucess==="200"){
                alert(data.text);
            }else{
                alert(data.text);
            }

        } catch (error) {
            console.log("Error: ",error);
        }

    }
    return(
        <ProjectContext.Provider
        value={
            {
                proof:proof,
                handleSubmitCreateUser:handleSubmitCreateUser,
                customers:customers,
                handlePostCustomer:handlePostCustomer
            }
        }
        >
        {children}
        </ProjectContext.Provider>
        
    )
}
export{
    ProjectProvider
}
export default ProjectContext