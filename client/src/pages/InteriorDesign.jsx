import React from 'react';
import Interior3 from "../assets/img/interior3.jpg";
import Interior1 from "../assets/img/interior1.jpg";
import Interior2 from "../assets/img/interior2.jpg";
import Contact from '../components/Contact';

const InteriorDesign = () => {
    return (
        <>
            <div>
                <div>
                    <img src={Interior3} alt="" className='w-full h-[550px] object-cover' />
                </div>
                <div className='my-16'>
                    <div className="text-center">
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                            Exquisite Interior Design: Creating Elegant & Functional Spaces
                        </p>
                    </div>
                </div>

                <div className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
                    <p className='my-8'>
                        At Essentia Environments, we take great pride in our ability to design exquisite spaces that perfectly capture every detail of your brief. Our mission is not only to ensure functionality in our designs but also to elevate your experience to new heights. We believe that interior design should be a harmonious blend of art and practicality, which is why our approach is nothing short of artful. Each design concept we create is enriched by bold artwork, carefully selected styling components, and distinctive lighting fixtures—elements that have become our signature in the industry. These components are thoughtfully complemented by accent furniture pieces that further enhance the overall aesthetic of your space.
                    </p>

                    <p className='my-8'>
                        Being one of the <strong>best interior design firms in Gurgaon</strong>, our design spaces alluring appeal. This is achieved through our meticulous selection of styling products, furniture pieces, artworks, and sculptures. Every item is intentionally chosen to add a dynamic touch to our designs while maintaining a base palette that is elegantly neutral. This sophisticated backdrop not only highlights our creative vision but also allows for versatility, enabling the space to adapt to different moods and occasions. Our designs are crafted to be both visually striking and practical, ensuring that they serve the needs of those who inhabit them. In addition to our focus on interiors, our commitment to enhancing the quality of living extends beyond four walls. At Essentia, we are equally dedicated to crafting unique indoor-outdoor living experiences that transform the way we interact with our environments. This holistic approach to the <strong>best design for home</strong> is realized through the incorporation of elements such as in-built green pockets, vertical gardens, meticulously landscaped lawns, and an abundance of lush greenery. By seamlessly integrating nature into our designs, we create spaces that not only look beautiful but also promote well-being and a deep connection to the outdoors.
                    </p>

                    <p>
                        Our indoor-outdoor spaces are designed to invite the outside in while providing a peaceful retreat from the hustle and bustle of everyday life. We understand that a well-designed environment can significantly impact your mood and overall experience, which is why we pay close attention to the flow and functionality of each area. Whether it’s a cozy seating nook surrounded by plants or an expansive patio that serves as an extension of your living space, we ensure that every detail is thoughtfully considered. At Essentia Environments, we blend functionality with aesthetic brilliance, creating exquisite spaces that reflect our dedication to design excellence and innovation. Our talented team of designers is committed to pushing the boundaries of creativity while remaining attuned to your unique vision. We work closely with our clients, guiding them through the design process and offering insights that help to crystallize their ideas into reality.
                    </p>
                </div>

                <div className='my-5 p-5'>
                    <div className='flex justify-center items-center gap-10 mt-8'>

                        {/* Residential */}
                        <div className='relative overflow-hidden'>
                            <div className='overflow-hidden rounded-lg'>
                                <img
                                    src={Interior2}
                                    alt=""
                                    className='h-[500px] w-[590px] transform transition-transform duration-400 ease-in-out hover:scale-125 cursor-pointer'
                                />
                            </div>
                            <p className='text-center my-4 text-lg font-light shadow-xl px-5 py-10 w-[500px] mx-auto bg-white opacity-90 -mt-5 text-gray-900 rounded-xl'>
                                residential
                            </p>
                        </div>

                        {/* Commercial */}
                        <div className='relative overflow-hidden'>
                            <div className='overflow-hidden rounded-lg'>
                                <img
                                    src={Interior1}
                                    alt=""
                                    className='h-[500px] w-[590px] transform transition-transform duration-400 ease-in-out hover:scale-125 cursor-pointer'
                                />
                            </div>
                            <p className='text-center my-4 text-lg font-light shadow-xl px-5 py-10 w-[500px] mx-auto bg-white opacity-90 -mt-5 text-gray-900 rounded-xl'>
                                commercial
                            </p>
                        </div>

                    </div>
                </div>

            </div>
            <Contact />
        </>
    )
}

export default InteriorDesign
