import React from 'react';
import ElevationPic from "../assets/img/exterior2.jpg"
import { Link } from 'react-router-dom';

const ElevationDesign = () => {
    return (
        <>
            <section>
                <div>
                    <img src={ElevationPic} alt="" className='w-full h-[560px] object-cover' />
                </div>
                <header className='my-10'>
                    <div className="text-center">
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                            About Shub Shiv Living: Designing Elegant and Timeless Spaces
                        </p>
                    </div>
                </header>
                <main className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
                    <p className='my-8'>
                        <strong>Shub Shiv Living</strong>, a renowned residential interior designer in Gurgaon, excels in crafting exquisite spaces that not only elevate the <strong>aesthetic appeal</strong> of your home but also embody your distinct personality. Our passionate team of <strong>skilled designers and artisans</strong> seamlessly blend innovative design concepts with meticulous architectural planning, delivering iconic interiors that reflect your unique style. We believe that every home should be a masterpiece, narrating your story through intricate <strong>detailing</strong> and <strong>exceptional craftsmanship</strong>.
                    </p>
                    <p className='my-8'>
                        From the very first interaction, Shub Shiv Living is dedicated to understanding your vision and aspirations. We take the time to <strong>immerse ourselves</strong> in your ideas, carefully considering your style preferences, functional needs, and overall aesthetic sensibilities. This <strong>client-centric</strong> approach enables us to craft personalized design solutions that truly reflect your essence, reinforcing our position as a <strong>leading interior designer in Gurgaon</strong>.
                    </p>

                    <p className='my-8'>
                        At Shub Shiv Living, we bring your vision to life using only the <strong>finest materials and selections</strong>. Every element is carefully curated, from the <strong>color palette</strong> to the furnishings, ensuring a seamless fusion of aesthetic appeal and functionality. We believe that exceptional design is not just about beauty—it must also serve a purpose. That’s why our team incorporates smart storage solutions and intuitive layouts, enhancing both the <strong>visual elegance</strong> and the <strong>practicality</strong> of your space.
                    </p>

                    <p className='my-8'>
                    At Shub Shiv Living, we continuously evolve our approach, incorporating <strong>innovative ideas</strong> that redefine interior design. Our commitment to excellence and client satisfaction has made us a trusted name in the industry. We also prioritize sustainability, integrating <strong>eco-friendly materials</strong> and mindful practices to create spaces that are both elegant and responsible.
                    </p>

                    <p className='my-8'>
                    At Shub Shiv Living, our mission is rooted in craftsmanship, transforming interiors into refined and luxurious spaces. We believe in designing environments that are a true reflection of <strong>sophisticated taste and individual personality</strong>. With an unwavering commitment to exceptional design, we go beyond aesthetics, ensuring that every space we create is not just visually stunning but also feels uniquely yours.
                    </p>
                </main>

                <main className="my-10 m-auto w-[80%]">
                    <div className="flex justify-between items-center flex-wrap gap-5">
                        {[...Array(7)].map((_, index) => (
                            <div key={index} className="relative xl:w-[590px] lg:w-[390px] h-96 overflow-hidden group">
                                {/* Image */}
                                <img
                                    src={ElevationPic}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                {/* Water Filling Effect */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-black opacity-40 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out"></div>
                                </div>

                                {/* Overlay Text */}
                                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-white text-xl translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                        View Project
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>



                <main className='text-center my-10'>
                    <Link to="/interiors-and-designs">
                        <button className='bg-black p-4 text-white rounded transition-all duration-300 hover:bg-[#DBDBDB] hover:text-black cursor-pointer'>back to interior designs</button>
                    </Link>
                </main>
            </section>
        </>
    )
}

export default ElevationDesign