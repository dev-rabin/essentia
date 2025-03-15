import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InteriorDesign from './pages/InteriorDesign'
import About from './pages/About'
import ElevationDesign from './pages/ElevationDesign'
import Contact from './components/Contact'
import LandscapeDesign from './pages/LandscapeDesign'
import TurnkeyExecution from './pages/TurnkeyExecution'
import './App.css';
import ErrorPage from './pages/ErrorPage'
import Decor from './pages/Decor'
import BespokeFurniture from './pages/BespokeFurniture/BespokeFurniture'
import Interior from './pages/BespokeFurniture/Interior'
import Outdoor from './pages/BespokeFurniture/Outdoor'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Contact/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path='/interiors-and-designs' element={<InteriorDesign/>}/>
          <Route path='/elevation-design' element={<ElevationDesign/>}/>
          <Route path="landscape-designing" element={<LandscapeDesign/>}/>
          <Route path='/turnkey-execution' element={<TurnkeyExecution/>}/>
          <Route path='/bespoke-furniture' element={<BespokeFurniture/>}/>
          <Route path='/bespoke-furniture-indoor' element={<Interior/>}/>
          <Route path='/bespoke-furniture-outdoor' element={<Outdoor/>}/>
          <Route path='/decor' element={<Decor/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App