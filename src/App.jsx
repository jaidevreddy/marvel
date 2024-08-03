import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './Components/Navbar';
import Landing from './Components/Landing';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
           <Landing/>
          </>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App