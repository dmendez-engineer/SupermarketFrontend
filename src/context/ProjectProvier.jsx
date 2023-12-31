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
    const [customerSelected,setCustomerSelected]=useState({});

    const[customers,setCustomers]=useState([]);
    const url=`https://localhost:7066/api/Customer`;
    const navigate=useNavigate();

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
    const handleSelectCustomer=(customer)=>{
        
        setCustomerSelected(customer);

    }
    const handlePostCustomer=async(customer)=>{

        
        try {
            if(customer.id===null){
                const urlPost='https://localhost:7066/api/Customer/postCustomer';
                const {data}=await axios.post(urlPost,customer);
              
                if(data.sucess==="200"){
                    const customerUpdated=[...customers,data.genericObject];
                    setCustomers(customerUpdated);
                    navigate("customer");
                    
                    alert(data.text);



                }else{
                    alert(data.text);
                }
            }else{
                const urlPost=`https://localhost:7066/api/Customer/customerUpdate/${customer.id}`;
                const {data}=await axios.put(urlPost,customer);
               
                if(data.sucess==="200"){

                    alert(data.text);
                    console.log(customer);
                    const customersUpdated=customers.map(c=>c.id!==customer.id?c:data.genericObject);
                    console.log("After Update: ",customersUpdated);
                    setCustomers(customersUpdated);
                    navigate("customer");
                    
                }else{
                    alert(data.text);
                }
            }
            
            

        } catch (error) {
            console.log("Error: ",error);
        }

    }
    const handleDeleteCustomer=async (id)=>{
            try{
                const urlDelete=`https://localhost:7066/api/Customer/removeCustomer/${id}`;
                const {data}=await axios.delete(urlDelete);

                if(data.sucess==200){
                    
                    const customerUpdated=customers.filter(c=>c.id!==id);
                   
                    setCustomers(customerUpdated);
                    
                    
                    alert(data.text);
                    

                }else{
                    alert(data.text);
                }

            }catch(err){
                console.log("Error in the frontend Removing: ",err);
            }
    }
    return(
        <ProjectContext.Provider
        value={
            {
                proof:proof,
                handleSubmitCreateUser:handleSubmitCreateUser,
                customers:customers,
                handlePostCustomer:handlePostCustomer,
                handleSelectCustomer:handleSelectCustomer,
                customerSelected:customerSelected,
                setCustomerSelected:setCustomerSelected,
                handleDeleteCustomer:handleDeleteCustomer
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