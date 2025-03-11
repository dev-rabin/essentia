import React from 'react';


const ImageCard = ({title,subtitle, imageSrc, imageWidth, imageHeight, titleWidth}) => {
    return (
        <div className='relative overflow-hidden'>
            <div className='overflow-hidden'>
                <img
                    src={imageSrc}
                    alt=""
                    className={`${imageHeight} ${imageWidth} transform transition-transform duration-400 ease-in-out hover:scale-125 cursor-pointer object-cover`}
                />
            </div>
            <div className={`mx-auto my-4 text-lg font-light shadow-xl px-5 py-8 ${titleWidth} bg-white opacity-90 -mt-5 text-gray-900 rounded-xl`}>
                <p className='text-center'>{title}</p>
                <p className='mt-3 text-black text-center'>{subtitle}</p>
            </div>
        </div>
    )
}

export default ImageCard
