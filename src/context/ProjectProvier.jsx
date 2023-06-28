/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import useProject from "../hooks/useProject";

const ProjectContext=createContext();



const ProjectProvider=({children})=>{
    const [proof,setProof]=useState('Proof AGAIN');

    const handleSubmitCreateUser=(user)=>{
        console.log("Receiving the user in the provider: ",user);
    }
    return(
        <ProjectContext.Provider
        value={
            {
                proof:proof,
                handleSubmitCreateUser:handleSubmitCreateUser
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