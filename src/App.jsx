import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './Components/HomePage';
import QrCode from './Components/QrCode';


const App = () => {
   
  return (
    <>
      <Routes>
         <Route path={"/"} element={<Navigate to={'/homepage'}/>}/>
         <Route path={"/homepage"} element={<HomePage/>} />
         <Route path={"/qrcode"} element={<QrCode/>} />
      </Routes>
      
    </>
  )
}

export default App
