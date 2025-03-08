import React from 'react';
import Interior2 from "../assets/img/interior2.jpg";

const BespokeFurniture = ({setBespokeMenu}) => {
    return (
        <>
            <section className='bg-white z-10 p-10 h-full w-full flex justify-center items-center gap-5'
        
            >
                <div className='relative'>
                    <img src={Interior2} alt="" className='h-full object-cover'/>
                    <div className='absolute inset-0 flex items-center justify-center text-white text-lg font-semibold cursor-pointer'>indoor</div>
                </div>
                <div className='relative'>
                    <img src={Interior2} alt="" className='h-full object-cover'/>
                    <div className='absolute inset-0 flex items-center justify-center text-white text-lg font-semibold cursor-pointer'>outdoor</div>
                </div>
            </section>
        </>
    )
}

export default BespokeFurniture