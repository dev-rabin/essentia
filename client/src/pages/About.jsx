import React from 'react'
import Contact from '../components/Contact';
import Interior2 from "../assets/img/interior2.jpg";
import Milestones from '../components/Milestones';
import ImageCard from '../components/ImageCard';

const About = () => {
    return (
        <>
            <Contact />
            <section>
                <div>
                    <img src={Interior2} alt="" className='w-full h-[550px] object-cover ' />
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
                        At Essentia Environments, we believe that beauty is not a luxury reserved for the privileged, but a basic necessity for all. Grace and elegance should be inherent in our surroundings, reflecting our desire to live artistically in spaces that enhance our sense of being.
                    </p>
                    <p className='my-8'>
                        <strong>Essentia Environments</strong> embodies global refinement and indigenous design sensibilities, merging contemporary and classic styles to prioritize the preferences of our client’s interiors. As India’s premier design and build company, we offer innovative, full-service solutions, from interior architectural services to the manufacturing of bespoke pieces. Established in 1999, our mission is to deliver comprehensive design, turnkey build solutions, and top-quality furniture, wardrobes, millwork, and decor accessories to our discerning clientele.
                    </p>

                    <p className='my-8'>
                        <strong> For the past 25 years</strong>, we have been crafting dream spaces, redefining elegant luxury, and fostering lifelong relationships that are the cornerstone of our firm. Our brand is characterized by an original and personal signature, synonymous with innovation, style, and sophistication.
                    </p>

                    <p className='my-8'>
                        “We consciously design spaces that are clean and clutter-free, enhancing the positives of a site, and camouflaging the negatives. Above all, we strive for simplicity, adding sophistication to our work,” says Monica, Creative Head and Co-Founder of Essentia.
                    </p>

                    <p className='my-8'>
                        At Essentia Environments, our goal is to transform the lives of our patrons by creating wondrous, comfortable, and practical spaces, where luxury and elegance are ever-present. Our complete in-house capability to execute designs from our creative team sets us apart, and our large team of professionals, coupled with unparalleled manufacturing support, enables us to handle multiple projects across various locations, with both skill and confidence.
                    </p>

                    <p className='my-8'>
                        Having designed and executed over <strong>1,000 projects</strong>, we continue to evolve and eagerly embrace new challenges, always striving for excellence in every endeavor.
                    </p>
                </main>
                <header className='my-16'>
                    <div className="text-center">
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                            vision
                        </p>
                    </div>
                    <p className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
                        To make the lives of our customers better through elevating their lifestyle and filling their lives with joy by making their living and work spaces functional, timeless, and above all luxurious
                    </p>
                </header>
                <Milestones title="milestones" />

                <article>
                    <header className='my-16 text-center'>
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                            mission
                        </p>
                    </header>
                    <main className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
                        <ul className="list-disc pl-5">
                            <li>to Build lifelong relationships with our customers by providing them with VALUE-oriented services and products for their living and work spaces.</li>
                            <li>to Provide our employees with a safe and friendly work environment with unwavering focus on their career growth, continuous learning, fun, and stability.</li>
                            <li>to build partnerships with our suppliers, vendors & partners based upon trust, respect, and mutual benefit.</li>
                            <li>
                                to Contribute positively to the community by embodying goodness, productivity, and focus on growth.
                                Our designs prioritize sustainability, Make in India & fostering environmental well-being.
                                Having global and refined sensibilities yet Proudly Swadeshi and indigenous, we intend to make a positive and meaningful impact locally and beyond.
                            </li>
                        </ul>
                    </main>
                </article>

                {/* leadership  */}
                <article>
                    <header className='my-16 text-center'>
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                            leadership
                        </p>
                    </header>
                    <main className='bg-[#F7F9FB] py-18 flex justify-center items-center gap-5 flex-wrap'>
                        <ImageCard imageSrc={Interior2} imageWidth="w-96" imageHeight="h-[450px]" title="hardesh chawla" subtitle="director" titleWidth="w-82" />
                        <ImageCard imageSrc={Interior2} imageWidth="w-96" imageHeight="h-[450px]" title="monica chawla" subtitle="creative head" titleWidth="w-82" />
                        <ImageCard imageSrc={Interior2} imageWidth="w-96" imageHeight="h-[450px]" title="h.s chawla" subtitle="chairman" titleWidth="w-82" />
                    </main>
                </article>

                {/* team */}
                <div>
                    <header className='my-16 text-center'>
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                            team
                        </p>
                    </header>
                    <p className='text-center text-4xl font-light'>management</p>
                    <main className='flex justify-center items-center gap-5 my-8 flex-wrap'>
                        <div className='border border-gray-400 px-24 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>deepak</p>
                        </div>

                        <div className='border border-gray-400 px-24 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>preeti</p>
                        </div>

                        <div className='border border-gray-400 px-24 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>surbhi</p>
                        </div>
                    </main>

                    <p className='text-center text-4xl font-light'>deepartment head</p>
                    <main className='flex justify-center items-center gap-5 my-8 flex-wrap'>
                        <div className='border border-gray-400 px-12 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>deepak</p>
                        </div>

                        <div className='border border-gray-400 px-12 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>preeti</p>
                        </div>

                        <div className='border border-gray-400 px-12 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>surbhi</p>
                        </div>
                        <div className='border border-gray-400 px-12 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>surbhi</p>
                        </div>
                        <div className='border border-gray-400 px-12 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>deepak</p>
                        </div>

                        <div className='border border-gray-400 px-12 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>preeti</p>
                        </div>

                        <div className='border border-gray-400 px-12 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>surbhi</p>
                        </div>
                        <div className='border border-gray-400 px-12 py-10 rounded shadow'>
                            <img src={Interior2} alt="" className='w-64 h-72 object-cover border border-r-2 shadow' />
                            <p className='text-center font-light text-xl'>surbhi</p>
                        </div>
                    </main>

                    <main className='w-[80%] mx-auto my-14'>
                    <p className='text-center text-4xl font-light my-5'>Essentia team</p>
                    <img src={Interior2} alt="" className='h-[500px] w-full object-cover'/>
                    </main>
                </div>
            </section>
        </>
    )
}

export default About
