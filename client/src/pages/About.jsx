import React from 'react'
import Interior2 from "../assets/img/interior2.jpg";
import Milestones from '../components/Milestones';
import ImageCard from '../components/ImageCard';

const About = () => {
    return (
        <>
            <section>
                <div>
                    <img src={Interior2} alt="" className='w-full h-[560px] object-cover ' />
                </div>
                <header className='my-10'>
                    <div className="text-center">
                        <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                        About Shub Shiv Living: Elevating Luxury & Timeless Design
                        </p>
                    </div>
                </header>
                <main className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
                    <p className='my-8'>
                    At <strong>Shub Shiv Living</strong>, we believe that beautifully designed spaces are not just about aesthetics—they are essential for a fulfilling life. True elegance is a seamless blend of artistry and functionality, creating environments that inspire and enrich daily living.
                    </p>
                    <p className='my-8'>
                    Merging contemporary sophistication with classic craftsmanship, <strong>Shub Shiv Living</strong> is a leading design and build company offering bespoke solutions for interiors, architecture, and furniture manufacturing. With a keen eye for detail and a passion for innovation, we create exquisite spaces that reflect the unique personalities of our clients.
                    </p>

                    <p className='my-8'>
                    <strong>For over a decade</strong>, we have redefined luxury by delivering fully customized, high-end interiors that balance comfort and style. From conceptualization to execution, our in-house team ensures every project meets the highest standards of craftsmanship and excellence.
                    </p>

                    <p className='my-8'>
                    "We believe in designing spaces that are not only visually stunning but also deeply functional—enhancing the positives of every site while seamlessly integrating elegance and practicality."
                    </p>

                    <p className='my-8'>
                    At <strong>Shub Shiv Living</strong>, we don’t just create interiors—we craft experiences that transform everyday living. With an unwavering commitment to quality, creativity, and precision, we continue to design and execute spaces that stand the test of time.
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
                    <p className='w-[80%] mx-auto text-center my-10 text-gray-700 text-lg font-light'>
                    Our mission is to enrich our customers' lives by designing living and workspaces that are not only functional but also exude timeless luxury. We strive to elevate lifestyles by crafting elegant, sophisticated environments that inspire joy, comfort, and a true sense of belonging.
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
                            <li><strong>Fostering Lasting Relationships</strong> – We prioritize building lifelong connections with our customers by delivering exceptional value-driven services and products that enhance their living and workspaces.</li>
                            <li><strong>Empowering Our Team</strong> – We cultivate a safe, inclusive, and dynamic workplace where employees thrive through continuous learning, career growth, and a balance of productivity and enjoyment.</li>
                            <li><strong>Strengthening Partnerships</strong> – We collaborate with suppliers, vendors, and partners based on a foundation of trust, integrity, and shared success, ensuring mutual growth and innovation.</li>
                            <li>
                            <strong>Creating a Positive Impact</strong> – Committed to sustainability and the "Make in India" initiative, we blend global sophistication with indigenous craftsmanship to contribute meaningfully to the environment, community, and beyond.
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
