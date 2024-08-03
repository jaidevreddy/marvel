import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Options from './Components/Options';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
          <Navbar/>
           <Landing/>
           <Options/>
          </>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App