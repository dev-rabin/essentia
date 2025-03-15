import React, { useState } from 'react';
import Interior2 from "../../assets/img/interior2.jpg";
import Sofa from "../../assets/img/sofa.png";
import Table from "../../assets/img/outdoor_furniture.png";

const Outdoor = () => {
    // Sample product data
    const products = [
        { id: 1, name: "AC2037", image: Sofa },
        { id: 2, name: "AC2038", image: Table },
        { id: 3, name: "AC2039", image: Sofa },
        { id: 4, name: "AC2040", image: Table },
    ];

    return (
        <section>
            <div className="relative">
                <img src={Interior2} alt="" className="w-full h-[550px] object-cover" />
                <p className="absolute inset-0 flex items-center justify-center text-white text-4xl bg-transparent">
                    outdoor furniture
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
                    Essentia Environments stands as a pinnacle of excellence in <strong>luxury residential interior design</strong>, transforming ordinary houses into extraordinary homes. We believe that a home should be a sanctuary, a reflection of the homeowner’s personality and lifestyle. As one of the <strong>best residential interior designers in Gurgaon</strong>, we possess a unique ability to translate our clients’ visions into tangible realities, creating <strong>interiors</strong> that exude elegance and sophistication.
                </p>
                <p className='my-8'>
                    Our extensive portfolio showcases our mastery in designing luxurious apartments and sprawling farmhouses. We understand that each project is unique, requiring a tailored approach that considers the client’s individual needs and preferences. As a leading name among <strong>residential interior designers in Gurgaon</strong>, we take pride in our ability to infuse a distinct blend of elegance, refinement, and vibrant originality into every space we create.
                </p>
                <p className='my-8'>
                    Our approach to <strong>residential interior design</strong> is rooted in collaboration and communication. We work closely with our clients to understand their aspirations, ensuring that every design element reflects their personal style. From the initial concept development to the final installation, we maintain a transparent and collaborative process, keeping our clients informed and involved at every stage.
                </p>
                <p className='my-8'>
                    We believe that true <strong>luxury</strong> lies in the details. That’s why we meticulously select only the finest materials, finishes, and furnishings, ensuring that every element contributes to the overall aesthetic of the space. Our team of skilled artisans and craftsmen bring our designs to life, creating bespoke pieces that are both beautiful and functional.
                </p>
                <p className='my-8'>
                    As a prominent <strong>residential interior designer Gurgaon</strong>, we understand the importance of creating spaces that are not only visually stunning but also conducive to comfortable living. We consider the flow of traffic, the interplay of light and shadow, and the functionality of each space, ensuring that our interiors are both practical and aesthetically pleasing.
                </p>
                <p className='my-8'>
                    Our reputation as a top interior design firm is built on our commitment to excellence and our unwavering dedication to client satisfaction. We strive to exceed expectations, transforming homes into stunning <strong>living</strong> reflections of elegance, flair, and <strong>luxury</strong>. We are dedicated to consistently delivering the <strong>best</strong> interior solutions.
                </p>
                <p className='my-8'>
                    We recognize that a home is more than just a place to live; it’s a reflection of one’s identity. Our expertise as <strong>residential interior designers in Gurgaon</strong> allows us to create spaces that resonate with our clients on a personal level, spaces that evoke a sense of belonging and comfort. Our aim is to create homes that are not only beautiful but also functional and inviting, spaces that enhance the quality of life for our clients. We strive to be the <strong>best</strong> in the field.
                </p>
            </main>
            <div className='flex justify-around items-center gap-3 flex-wrap p-2 my-5'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
        </section>
    );
};

// ProductCard Component
const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        padding: "8px 30px",
        background: "transparent",
        border: "1px solid black",
        borderRadius: "30px",
        cursor: "pointer",
        transition: "all 0.5s ease-in-out",
        color: isHovered ? "white" : "#2A2A2A",
        backgroundColor: isHovered ? "#2A2A2A" : "transparent",
        animation: isHovered ? "popAnimation 0.8s infinite ease-in-out" : "none",
    };

    return (
        <div className='flex flex-col items-center gap-2'>
            <img src={product.image} alt="" className='h-68 w-80 object-cover' />
            <p>{product.name}</p>
            <div>
                <style>
                    {`
                        @keyframes popAnimation {
                            0% { transform: scale(1); }
                            50% { transform: scale(1.1); }
                            100% { transform: scale(1); }
                        }
                    `}
                </style>
                <button
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Enquiry Now
                </button>
            </div>
        </div>
    );
};

export default Outdoor;