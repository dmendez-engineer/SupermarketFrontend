/* eslint-disable no-unused-vars */
import { useContext } from "react";
import ProjectContext from "../context/ProjectProvier";


const useProject=()=>{
    return useContext(ProjectContext);
}
export default useProject;