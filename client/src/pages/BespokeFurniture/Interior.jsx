import React from 'react';
import Interior2 from "../../assets/img/interior2.jpg";

const Interior = () => {
    return (
        <section>
            <div className="relative">
                <img src={Interior2} alt="" className="w-full h-[560px] object-cover" />
                <p className="absolute inset-0 flex items-center justify-center text-white text-4xl bg-transparent">
                    Indoor furniture
                </p>
            </div>
            <header className='my-16'>
                <div className="text-center">
                    <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                        indoor bespoke furniture: elegant & custom-crafted pieces
                    </p>
                </div>
            </header>
            <main className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
                <p className='my-8'>
                    essentia environments creates unique <strong>bespoke furniture</strong> that captures the essence of indoor elegance. our painstakingly curated selection is the result of extensive research and a commitment to excellence, guaranteeing that each piece is a marvel of craftsmanship. our exquisite furniture and finishes collection, which includes exotic textiles and wallpapers, takes every project to new levels of luxury.
                </p>
                <p className='my-8'>
                    our <strong>bespoke luxury furniture</strong> collections, which include essentia signature, premium, exotic, and luxury, appeal to a wide range of preferences and budgets. each piece is created to blend smoothly with our clients’ distinct styles, resulting in harmonious and efficient settings.
                </p>

                <p className='my-8'>
                    whether it’s a statement piece or a subtle accent, our bespoke interior designers create furniture that is designed to improve the beauty and utility of any space.
                </p>
            </main>
        </section>
    )
}

export default Interior
