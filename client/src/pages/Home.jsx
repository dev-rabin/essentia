import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Interior1 from "../assets/img/interior1.jpg";
import Interior2 from "../assets/img/interior2.jpg";
import Interior3 from "../assets/img/interior3.jpg";
import Exterior1 from "../assets/img/exterior1.jpg";
import Exterior2 from "../assets/img/exterior2.jpg";
import DecorIcon from "../assets/img/decorIcon.png";
import ElevationIcon from "../assets/img/elevationIcon.png";
import FurnitureIcon from "../assets/img/furnitureIcon.png";
import InteriorIcon from "../assets/img/interiorIcon.png";
import Milestones from '../components/Milestones';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [Interior1, Interior2, Interior3, Exterior1, Exterior2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <div className='w-full'>
        <div className="relative w-full h-[800px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={` absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>


          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full text-2xl cursor-pointer"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full text-2xl cursor-pointer"
          >
            &#10095;
          </button>
        </div>

        {/* Links Icons with subtitles */}
        <div className='py-8'>
          <div className=' mx-auto flex justify-around items-center flex-wrap'>
            <div className='flex md:justify-center justify-between items-center flex-col gap-2 h-36 w-42'>
              <div><img src={InteriorIcon} alt="" className='h-14 w-14 opacity-80' /></div>
              <div className='text-lg font-semibold'>interior design</div>
            </div>
            <div className='flex md:justify-center justify-between items-center flex-col gap-2 h-36 w-42'>
              <div><img src={ElevationIcon} alt="" className='h-14 w-14 opacity-80' /></div>
              <div className='text-lg font-semibold'>elevation design</div>
            </div>
            <div className='flex md:justify-center justify-between items-center flex-col gap-2 h-36 w-42'>
              <div><img src={FurnitureIcon} alt="" className='h-14 w-14 opacity-80' /></div>
              <div className='text-lg font-semibold'>bespoke furniture</div>
            </div>
            <div className='flex md:justify-center justify-between items-center flex-col gap-2 h-36 w-42'>
              <div><img src={DecorIcon} alt="" className='h-14 w-14 opacity-80' /></div>
              <div className='text-lg font-semibold'>decor</div>
            </div>
          </div>
        </div>

        {/* Essentia Environments */}
        <div className='py-5'>
          <p className='text-4xl text-center font-light w-[75%] mx-auto'>Essentia Environments – India’s Premier Interior Design & Furniture Craftsmanship</p>
          <div className='w-[80%] mx-auto text-center my-10 text-gray-700 text-lg font-light'>
            <p className='mb-8'>Essentia Environments reimagines luxurious living in India. As the <strong>best interior design company in India</strong>, we transform your vision from a basic concept into a spectacular reality. We stand out in India in that we provide a full design-to-build service, guaranteeing that every detail is completed properly. Imagine a home that represents your <strong>
              unique craftsmanship
            </strong> and taste, constructed with outstanding precision and creativity – that is the Essentia difference.</p>

            <p className='mb-8'>
              We strongly believe your house should be a personal haven. That’s why we provide the <strong>best interior design for home</strong> – mindfully curating a selection of high-end furnishings, beautiful décor, and custom-made pieces, all tailored by our manufacturer to your specific preferences. Whether you want a modern minimalist style or a classic, sumptuous design, our team combines sophistication and functionality to create all the spaces.
            </p>

            <p> At Essentia Environments, we’re not just designing rooms; we’re crafting premier experiences.</p>
          </div>
        </div>

        {/* Features  */}

        <div className='my-10'>
          <div className="text-center">
            <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-full after:h-[1px] after:bg-black after:absolute after:left-0 after:bottom-[-8px]'>
              features
            </p>
          </div>

          {/* Animated Feature Cards */}
          <div className='flex justify-center items-center flex-wrap gap-5 my-5'>
            {/* Left Div - Slides from Left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className='flex justify-between flex-col items-center gap-2'
            >
              <div><img src={Interior1} alt="" className='h-48 w-96 object-cover' /></div>
              <div>Interior design</div>
              <p className='text-center w-96 text-gray-600 font-light'>we are a multi-disciplinary team with a vast suite of capabilities.</p>
            </motion.div>

            {/* Center Div - Slides from Bottom */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className='flex justify-between flex-col items-center gap-2'
            >
              <div><img src={Interior2} alt="" className='h-48 w-96 object-cover' /></div>
              <div>bespoke furniture</div>
              <p className='text-center w-96 text-gray-600 font-light'>indigenous design sense reflective of the contemporary and classic mores is our philosophy.</p>
            </motion.div>

            {/* Right Div - Slides from Right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className='flex justify-between flex-col items-center gap-2'
            >
              <div><img src={Interior3} alt="" className='h-48 w-96 object-cover' /></div>
              <div>decor</div>
              <p className='text-center w-96 text-gray-600 font-light'>we create spaces that enhance the sense of being to bring joy and beauty to our patrons’ lives.</p>
            </motion.div>
          </div>
        </div>

        {/* Presence  */}
        <Milestones title="presence"/>

        {/* Latest Creations  */}
        <div className='my-5 p-5'>
          <div className="text-center">
            <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-full after:h-[1px] after:bg-black after:absolute after:left-0 after:bottom-[-8px]'>
              latest creations
            </p>
          </div>
          <div className='flex justify-center items-center gap-10 mt-8 flex-wrap'>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div><img src={Exterior2} alt="" className=' h-72 w-[550px]' /></div>
              <p className='text-center my-4 text-lg font-light'>trends fade. it is the style that speaks for itself and stays</p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div><img src={Exterior2} alt="" className=' h-72 w-[550px]' /></div>
              <p className='text-center my-4 text-lg font-light'>trends fade. it is the style that speaks for itself and stays</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;