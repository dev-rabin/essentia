import React from 'react';
import Interior2 from "../assets/img/interior3.jpg";
import Interior1 from "../assets/img/interior1.jpg";

const Projects = () => {
    return (
        <section className='bg-white z-10 p-10 h-full w-full flex flex-col md:flex-row justify-center items-center gap-8'>
            <div className='relative cursor-pointer group'>
                <img src={Interior2} alt="" className='h-80 object-cover hover:scale-105 transition-all duration-300' />
                <div className='text-center text-lg font-light my-5 relative'>
                    residential
                </div>
                <div className='text-center'>
                    <button className='border py-2 px-4 bg-transparent cursor-pointer mb-5'>know more</button>
                </div>
                     <span className='absolute left-1/2 bottom-0 h-[2px] bg-[#A87B4F] w-0 transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
            </div>
            <div className='relative cursor-pointer group'>
                <img src={Interior1} alt="" className='h-80 object-cover hover:scale-105 transition-all duration-300' />
                <div className='text-center text-lg font-light my-5 relative'>
                    commercial
                </div>
                <div className='text-center'>
                    <button className='border py-2 px-4 bg-transparent cursor-pointer mb-5'>know more</button>
                </div>
                     <span className='absolute left-1/2 bottom-0 h-[2px] bg-[#A87B4F] w-0 transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
            </div>
        </section>
    )
}

export default Projects;
