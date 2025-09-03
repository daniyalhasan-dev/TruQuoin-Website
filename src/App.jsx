import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
