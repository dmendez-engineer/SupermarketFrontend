/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProjectProvider } from './context/ProjectProvier'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
import NewUser from './pages/NewUser'
import 'react-toastify/dist/ReactToastify.css';
import Admin from './pages/Admin';
import Customer from './pages/Customer';



function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <ProjectProvider>
    
  

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path='register' element={<NewUser/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='customer' element={<Customer/>}/>
        
        </Route>
       
    </Routes>
   
 
    
     </ProjectProvider>
     </BrowserRouter>
  )
}

export default App
