import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import About from './pages/About';
import ElevationDesign from './pages/ElevationDesign';
import Contact from './components/Contact';
import LandscapeDesign from './pages/LandscapeDesign';
import Portfolio from './pages/Portfolio';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import Decor from './pages/Decor';
import BespokeFurniture from './pages/BespokeFurniture/BespokeFurniture';
import Interior from './pages/BespokeFurniture/Interior';
import Outdoor from './pages/BespokeFurniture/Outdoor';
import RegisterPop from './components/RegisterPop';
import { ToastContainer } from 'react-toastify';
import AdminPanel from './pages/Admin/Admin';
import Requests from './pages/Admin/Requests';
import Users from './pages/Admin/Users';

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <RegisterPop />
      <ToastContainer />
      {!isAdminRoute && <Contact />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/elevation-design" element={<ElevationDesign />} />
        <Route path="landscape-designing" element={<LandscapeDesign />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/bespoke-furniture" element={<BespokeFurniture />} />
        <Route path="/bespoke-furniture-indoor" element={<Interior />} />
        <Route path="/bespoke-furniture-outdoor" element={<Outdoor />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/admin" element={<AdminPanel />}>
          <Route path='requests' element={<Requests/>} />
          <Route path='users' element={<Users/>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
