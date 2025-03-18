import React from 'react';
import Interior3 from "../assets/img/interior3.jpg";
import Interior2 from "../assets/img/interior2.jpg";
import ImageCard from '../components/ImageCard';

const InteriorDesign = () => {
    return (
        <>
            <section>
                <div>
                    <img src={Interior3} alt="" className='w-full h-[560px] object-cover' />
                </div>
                <div className='my-10'>
                    <div className="text-center">
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                        Timeless Interiors: Elevating Spaces with Elegance & Functionality
                        </p>
                    </div>
                </div>

                <div className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
                    <p className='my-8'>
                    At <strong>Shub Shiv Living</strong>, we craft interiors that exude elegance, comfort, and sophistication. Every space we design is a reflection of artistry and functionality, seamlessly blending aesthetics with practicality. We believe that a well-designed home is more than just beautiful—it enhances the way you live, making every moment more comfortable, inspiring, and fulfilling. Our approach is deeply rooted in creating personalized experiences that cater to your unique lifestyle, ensuring that your space is both visually stunning and effortlessly functional.
                    </p>

                    <p className='my-8'>
                    At <strong>Shub Shiv Living</strong>, we specialize in crafting timeless and elegant interiors that blend style with functionality. As one of the <strong>premier interior design firms in Gurugram</strong>, we curate <strong>sophisticated spaces</strong> that exude charm and character. Every element—from handpicked furniture pieces to carefully selected artworks and sculptures—is chosen to add depth and personality while maintaining a refined and versatile aesthetic. Our neutral base palettes provide a canvas for creative expression, ensuring that each space remains <strong>adaptable</strong> and <strong>enduringly beautiful</strong>. Beyond interiors, we extend our expertise to <strong>holistic indoor-outdoor</strong> living experiences, seamlessly merging nature with design. Our approach incorporates lush green pockets, vertical gardens, landscaped lawns, and natural elements that elevate the ambiance while fostering tranquility and well-being. Whether it's a serene retreat within your home or an expansive outdoor extension, we believe in creating environments that not only look stunning but also enhance the way you live. At Shub Shiv Living, we redefine luxury by blending <strong>innovation, elegance</strong>, and <strong>comfort</strong> into every space we design.
                    </p>

                    <p>
                    At Shub Shiv Living, we craft indoor-outdoor spaces that seamlessly blend nature with luxury, offering a tranquil retreat from the hustle and bustle of daily life. A well-designed environment enhances mood, experience, and overall well-being, which is why we focus on seamless flow, functionality, and aesthetic brilliance in every project. Whether it’s a cozy seating nook embraced by lush greenery or a sprawling patio that extends your living space, every detail is thoughtfully curated to reflect your lifestyle. Our expert designers are dedicated to innovation, creativity, and personalized elegance, ensuring that each space is an <strong>extraordinary experience</strong> tailored to your vision. At Shub Shiv Living, we don’t just design interiors—we create <strong>timeless masterpieces</strong> that transform the way you live.
                    </p>
                </div>

                <div className='my-5 p-5'>
                    <div className='flex justify-center items-center gap-10 mt-8 flex-wrap'>
                    <ImageCard title="residential" imageSrc={Interior3} imageHeight="h-[500px] w-[590px]" imageWidth="w-[590px]" 
                    titleWidth="md:w-[500px] sm:w-[450px] w-[350px]"/>
                    <ImageCard title="commercial" imageSrc={Interior2} imageHeight="h-[500px] w-[590px]" imageWidth="w-[590px]" 
                    titleWidth="md:w-[500px] sm:w-[450px] w-[350px]"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InteriorDesign
