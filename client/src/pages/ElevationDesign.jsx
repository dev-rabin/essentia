import React from 'react';
import ElevationPic from "../assets/img/exterior2.jpg"
import { Link } from 'react-router-dom';

const ElevationDesign = () => {
    return (
        <>
            <section>
                <div>
                    <img src={ElevationPic} alt="" className='w-full h-[500px] object-cover mt-20' />
                </div>
                <header className='my-16'>
                    <div className="text-center">
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                            About Essentia Environments: Crafting Timeless Luxury Spaces
                        </p>
                    </div>
                </header>
                <main className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
                    <p className='my-8'>
                        Essentia Environments, an acclaimed <strong>residential interior designer in Gurgaon</strong>, specializes in creating stunning rooms that not only enhance the <strong>beauty</strong> of your space but also reflect your unique personality. Our dedicated team of talented designers and craftsmen work tirelessly to merge innovative <strong>designs</strong> with precise architectural blueprints, resulting in <strong>iconic</strong> elevations that truly express your individuality. We believe that every space should be a canvas, showcasing your tastes and lifestyle through thoughtful detailing and exceptional craftsmanship.
                    </p>
                    <p className='my-8'>
                        From the moment we engage with you, our focus is on understanding your vision and aspirations. At Essentia Environments, we take the time to immerse ourselves in your ideas, ensuring that we grasp your style preferences, functional needs, and overall aesthetic. This comprehensive approach allows us to deliver customized design solutions that resonate deeply with our clients, solidifying our reputation as one of the <strong>best interior designers in Gurgaon</strong>.
                    </p>

                    <p className='my-8'>
                        Utilizing only state-of-the-art materials and selections, we transform your vision into a tangible masterpiece. Every detail is meticulously considered, from the color palette to the choice of furnishings, creating a harmonious blend that is both visually <strong>stunning</strong> and pragmatically excellent. We recognize that the finest designs must also serve a purpose; hence, functionality is at the forefront of our design process. Our team integrates smart storage solutions and user-friendly layouts that enhance your living experience.
                    </p>

                    <p className='my-8'>
                        Keeping abreast of the latest design trends, we continue to evolve in our approach, introducing innovative ideas that challenge traditional notions of interior design. Our commitment to excellence and client satisfaction has positioned Essentia Environments as a leader in the industry. We understand the beauty of <strong>enhancing</strong> spaces sustainably, which is why we work to incorporate eco-friendly materials and practices into our designs.
                    </p>

                    <p className='my-8'>
                        In every sense, our mission revolves around craftsmanship and enhancing your surroundings through refinement and opulence. At Essentia Environments, we transform interiors into living expressions of sophisticated taste and personality. Our dedication to providing an exceptional design experience ensures that we are not merely creating spaces; we are crafting environments that feel truly yours.
                    </p>
                </main>

                <main className="my-10 m-auto w-[80%]">
                    <div className="flex justify-between items-center flex-wrap gap-5">
                        {[...Array(7)].map((_, index) => (
                            <div key={index} className="relative w-[590px] h-96 overflow-hidden group">
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