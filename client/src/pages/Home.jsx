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
import { Link } from 'react-router-dom';

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
          <div className="flex transition-transform duration-500 ease-in-out">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
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
          <div className='mx-auto flex justify-around items-center flex-wrap'>
           <Link to="/interiors-and-designs">
           <div className='flex md:justify-center justify-between items-center flex-col gap-2 h-36 w-42'>
              <div><img src={InteriorIcon} alt="" className='h-14 w-14 opacity-80' /></div>
              <div className='text-lg font-semibold'>interior design</div>
            </div>
           </Link>
          <Link to='/elevation-design'>
          <div className='flex md:justify-center justify-between items-center flex-col gap-2 h-36 w-42'>
              <div><img src={ElevationIcon} alt="" className='h-14 w-14 opacity-80' /></div>
              <div className='text-lg font-semibold'>elevation design</div>
            </div>
          </Link>
          <Link to='/bespoke-furniture'>
          <div className='flex md:justify-center justify-between items-center flex-col gap-2 h-36 w-42'>
              <div><img src={FurnitureIcon} alt="" className='h-14 w-14 opacity-80' /></div>
              <div className='text-lg font-semibold'>bespoke furniture</div>
            </div>
          </Link>
          <Link to='/decor'>
          <div className='flex md:justify-center justify-between items-center flex-col gap-2 h-36 w-42'>
              <div><img src={DecorIcon} alt="" className='h-14 w-14 opacity-80' /></div>
              <div className='text-lg font-semibold'>decor</div>
            </div>
          </Link>
          </div>
        </div>

        {/* Essentia Environments */}
        <div className='py-5'>
          <p className='text-4xl text-center font-light w-[75%] mx-auto'>Shub Shiv Living – Redefining Luxury Interiors & Bespoke Furniture</p>
          <div className='w-[80%] mx-auto text-center my-10 text-gray-700 text-lg font-light'>
            <p className='mb-8'>At <strong>Shub Shiv Living</strong>, we bring your dream home to life with impeccable interior design and exquisite furniture craftsmanship. As one of India's finest interior design firms, we go beyond aesthetics to create spaces that reflect elegance, functionality, and your unique personality.</p>
            <p className='mb-8'>
            What sets us apart is our <strong>end-to-end design and execution</strong> approach. From concept to completion, we ensure every detail is meticulously crafted, offering a seamless experience that transforms your vision into reality. Imagine a home that embodies luxury, sophistication, and timeless beauty – that’s the essence of <strong>Shub Shiv Living</strong>.   We believe that every home should be a <strong>personal sanctuary</strong>. That’s why we offer <strong>bespoke interior solutions</strong>, carefully curating high-end furniture, statement décor, and custom-designed pieces that align with your style and preferences. Whether you desire a sleek contemporary aesthetic or a grand classical ambiance, our team masterfully blends innovation with craftsmanship to create breathtaking interiors.
            </p>
            <p> At <strong>Shub Shiv Living</strong>, we don’t just design spaces – we create extraordinary living experiences.</p>
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
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className='flex justify-between flex-col items-center gap-2'
            >
              <div><img src={Interior1} alt="" className='h-48 w-96 object-cover' /></div>
              <div>Interior design</div>
              <p className='text-center w-96 text-gray-600 font-light'>We are a diverse team of experts, bringing a wealth of skills and creativity across multiple disciplines.</p>
            </motion.div>

            {/* Center Div - Slides from Bottom */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className='flex justify-between flex-col items-center gap-2'
            >
              <div><img src={Interior2} alt="" className='h-48 w-96 object-cover' /></div>
              <div>bespoke furniture</div>
              <p className='text-center w-96 text-gray-600 font-light'>Our design philosophy merges contemporary trends with classic elegance for timeless, sophisticated spaces.</p>
            </motion.div>

            {/* Right Div - Slides from Right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className='flex justify-between flex-col items-center gap-2'
            >
              <div><img src={Interior3} alt="" className='h-48 w-96 object-cover' /></div>
              <div>decor</div>
              <p className='text-center w-96 text-gray-600 font-light'>We design spaces that inspire joy, beauty, and a deep sense of belonging.</p>
            </motion.div>
          </div>
        </div>

        {/* Presence  */}
        <Milestones title="presence" />

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
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div><img src={Exterior2} alt="" className='h-72 w-[550px]' /></div>
              <p className='text-center my-4 text-lg font-light'>Trends come and go, but true style remains timeless and speaks for itself.</p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div><img src={Exterior2} alt="" className='h-72 w-[550px]' /></div>
              <p className='text-center my-4 text-lg font-light'>Design isn’t just about appearance; it’s about functionality and purpose.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;