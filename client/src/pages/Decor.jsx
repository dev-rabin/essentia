import React from 'react';
import Interior2 from "../assets/img/interior2.jpg";

const Decor = () => {
    return (
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
                    To truly personalize your space and transform it into a home, Essentia Environments, recognized among the <strong>best interior designers in Gurgaon</strong>, offers a meticulously curated selection of décor pieces.
                </p>
                <p className='my-8'>
                    As leading <strong>home interior designers in Gurgaon</strong>, we prioritize enduring style, understated luxury, and authentic expression. Our minimalist approach achieves maximal allure through clever design and diverse, high-quality materials, creating timeless spaces that reflect your aspirations.
                </p>

                <p className='my-8'>
                    From custom curtains and fine linens to commissioned artworks and unique fragrances, every detail is meticulously chosen. We ensure a perfectly finished home with exquisite final touches, creating unparalleled living experiences.
                </p>
            </main>
        </section>
    )
}

export default Decor