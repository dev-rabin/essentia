import React, { useState } from 'react';
import Interior3 from "../assets/img/interior3.jpg";
import Interior2 from "../assets/img/interior2.jpg";
import ImageCard from '../components/ImageCard';
import { FaBuilding, FaMinus, FaPlus } from 'react-icons/fa6';
import { FaDoorOpen } from 'react-icons/fa';
import { IoMdBulb } from 'react-icons/io';
import { IoAdd, IoPeople } from 'react-icons/io5';
import { MdInterests } from 'react-icons/md';
import { motion } from 'framer-motion';

const InteriorDesign = () => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <>
            <section>
                <div>
                    <img src={Interior3} alt="" className='w-full h-[560px] object-cover' />
                </div>
                <div className='my-10'>
                    <div className="text-center">
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                            Services
                        </p>
                    </div>
                </div>

                <div className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                        className='my-5 bg-gray-100 p-5'>
                        <div className='flex items-center justify-center gap-3'>
                            <FaBuilding size={30} color='#000000d4' />
                            <h1 className='text-2xl font-semibold text-[#000000d4]'>Civil Works</h1>
                        </div>
                        <p className='my-5'>
                            We undertake civil works such as renovation and construction according to the requirements of the clients at corporate offices, Showrooms, and residences. Our team of professionals ensures quality work with the latest technology. We offer customized services according to the needs of the customers. Our experts also initiate the process using advanced machinery, expertise and knowledge. Our services are prompt and hassle free.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                        className='my-5 p-5'>
                        <div className='flex items-center justify-center gap-3'>
                            <FaDoorOpen size={30} color='#000000d4' />
                            <h1 className='text-2xl font-semibold text-[#000000d4]'>Interior Fit-Out</h1>
                        </div>
                        <p className='my-5'>
                            We are the leading Interior Decoration and Designing Service provider. Interior designing is an art or process of designing the interior of a room or building. Realize the latest design trends, ideas, and contemporary architectural design and give it a structural mould. It gives you a platform to express the visual art, draw to convey information, express ideas and outline structural possibilities for a better, prosperous and delightful life.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                        className='my-5 bg-gray-100 p-5'>
                        <div className='flex items-center justify-center gap-3'>
                            <IoMdBulb size={30} color='#000000d4' />
                            <h1 className='text-2xl font-semibold text-[#000000d4]'>
                                Turnkey Solutions</h1>
                        </div>
                        <p className='my-5'>
                            We provide our clients reliable and cost-effective Turnkey Interior Designing Solutions as per their diversified needs. Our interior turnkey solutions are ideal for commercial and residential establishments, which include offices, factories, restaurants, showrooms and villas. Right from visualization to detailed designing, we ensure to maintain the highest standards.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                        className='my-5 p-5'>
                        <div className='flex items-center justify-center gap-3'>
                            <IoPeople size={30} color='#000000d4' />
                            <h1 className='text-2xl font-semibold text-[#000000d4]'>
                                Communications</h1>
                        </div>
                        <p className='my-5'>
                            Our comprehensive service to telecommunication network providers, encompasses the initial planning right through to a full time support structure.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                        className='my-5 bg-gray-100 p-5'>
                        <div className='flex items-center justify-center gap-3'>
                            <IoAdd size={30} color='#000000d4' />
                            <h1 className='text-2xl font-semibold text-[#000000d4]'>
                                Creating Concept</h1>
                        </div>
                        <p className='my-5'>
                            The interior design of your dream begins with a concept that is reflected in the blueprints, project plans, in 3D visualizations. It is possible to make any place more interesting, attractive and functional, for this it is worth to trust the real professionals and then the money will not be spent in a vain.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                        className='my-5 p-5'>
                        <div className='flex items-center justify-center gap-3'>
                            <MdInterests size={30} color='#000000d4' />
                            <h1 className='text-2xl font-semibold text-[#000000d4]'>
                                Custom Solutions</h1>
                        </div>
                        <p className='my-5'>
                            At Custom Solutions.ca we review your business needs and develop practical, reliable engineered solutions to solve your ground lavel challenges.
                        </p>
                    </motion.div>
                </div>

                <div className='my-16 w-[80%] mx-auto flex justify-between items-start flex-wrap gap-2'>
                    <div className='overflow-hidden'>
                        <img src={Interior2} alt="" className='h-full lg:w-[550px] w-full transform transition-transform duration-400 ease-in-out hover:scale-125 cursor-pointer object-cover' />
                    </div>
                    <div className="lg:w-1/2 md:w-full sm:w-full w-full flex justify-start items-start flex-col">
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                            Why Choose Us
                        </p>
                        <div className='font-light my-5'>
                            We believe that every client has unique requirements and taste. In order to support that we add up the best and most creative designs in order to make your dream become reality. Having endless ideas in mind that can impress you at every step. You are always welcomed to discuss the ideas.
                        </div>
                        <ol className='list-disc list-inside font-light'>
                            <li>Practice</li>
                            <li>Talent</li>
                            <li>Fresh Minds</li>
                            <li>Experience</li>
                            <li>Guaranteed Clients Satisfaction</li>
                        </ol>
                    </div>
                </div>

                <div className="my-16 w-[80%] mx-auto">
                    <div className="text-center">
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block 
                    after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black 
                    after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                            We Offer Our Clients
                        </p>
                    </div>

                    {/* Premium Interior */}
                    <div className='shadow-xl'>
                        <div className='flex justify-between items-center bg-[#000000f0] mt-5 p-3 text-white font-semibold cursor-pointer' onClick={() => toggleSection("premium")}>
                            <div>Premium Interior</div>
                                {expandedSections["premium"] ? <FaMinus /> : <FaPlus />}
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections["premium"] ? "max-h-[200px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}>
                            <p className="p-2">
                                Premium Office is the personification of excellence and is a celebration of the Company’s pinnacle of success. It is distinctive and exclusive in its style and is modelled as a masterpiece bordering on the realm of luxury.
                            </p>
                        </div>
                    </div>

                    {/* Concept Interior */}
                    <div className='shadow-xl'>
                        <div className='flex justify-between items-center bg-[#000000f0] mt-5 p-3 text-white font-semibold cursor-pointer' onClick={() => toggleSection("concept")}>
                            <div>Concept Interior</div>
                                {expandedSections["concept"] ? <FaMinus /> : <FaPlus />}
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections["concept"] ? "max-h-[200px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}>
                            <p className="p-2">
                                Concept Office is a perfect blend of the complexity of functions and the expression of the Company’s brand. It is delivered in response to the unique client requirements and is elegantly designed with high quality finishes.
                            </p>
                        </div>
                    </div>

                    {/* Contemporary Interior */}
                    <div className='shadow-xl'>
                        <div className='flex justify-between items-center bg-[#000000f0] mt-5 p-3 text-white font-semibold cursor-pointer' onClick={() => toggleSection("contemporary")}>
                            <div>Contemporary Interior</div>
                                {expandedSections["contemporary"] ? <FaMinus /> : <FaPlus />}
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections["contemporary"] ? "max-h-[200px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}>
                            <p className="p-2">
                                Contemporary office is a modern, trendy and transparent office, that is highly efficient in its working and is tastefully designed, keeping with a minimalistic approach. It is delivered within a given time frame and on a specified budget.
                            </p>
                        </div>
                    </div>
                </div>


                <div className='my-5 p-5'>
                    <div className='flex justify-center items-center gap-10 mt-8 flex-wrap'>
                        <ImageCard title="residential" imageSrc={Interior3} imageHeight="h-[500px] w-[590px]" imageWidth="w-[590px]"
                            titleWidth="md:w-[500px] sm:w-[450px] w-[350px]" />
                        <ImageCard title="commercial" imageSrc={Interior2} imageHeight="h-[500px] w-[590px]" imageWidth="w-[590px]"
                            titleWidth="md:w-[500px] sm:w-[450px] w-[350px]" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default InteriorDesign
