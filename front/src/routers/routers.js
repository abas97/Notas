import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Archived } from '../Components/Archived/archived';
import { BrowserRouter } from "react-router-dom";
import { Notes } from '../Components/Notes/Notes';
import { Navbar } from '../Components/Navbar/navbar';
export const AppRouters = () => {
  
  const [modal,setModale]=React.useState(false)
  
  const openModal = ()=>{
    setModale(true)
  }
  const closeModal = ()=>{
    setModale(false)
  }
  return (
    <BrowserRouter>
      <Navbar modal={openModal} valor={modal}/>
      <Routes>
        <Route path="/" element={<Notes modal={modal} closeModal={closeModal} />} />
        <Route path="archived" element={<Archived />} />
      </Routes>
     
    </BrowserRouter>
  )
}
