import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import About from './components/Trade';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/trade' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
