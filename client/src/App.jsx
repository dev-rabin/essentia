import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InteriorDesign from './pages/InteriorDesign'
import About from './pages/About'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/interiors-and-designs' element={<InteriorDesign/>}/>
          <Route path="/about-us" element={<About/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App