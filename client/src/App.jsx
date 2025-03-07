import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InteriorDesign from './pages/InteriorDesign'
import About from './pages/About'
import ElevationDesign from './pages/ElevationDesign'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path='/interiors-and-designs' element={<InteriorDesign/>}/>
          <Route path='/elevation-design' element={<ElevationDesign/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App