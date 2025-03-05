import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InteriorDesign from './pages/InteriorDesign'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/interiors-and-designs' element={<InteriorDesign/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App