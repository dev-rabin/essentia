import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdClose, MdMailOutline } from "react-icons/md";

const Contact = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="fixed top-58 right-0 z-50 flex flex-col items-end shadow-lg">
            {/* Contact Button */}
            <div
                className="bg-black text-white rounded-l-xl overflow-hidden shadow-lg cursor-pointer"
                onMouseOver={() => setShowContact(true)}
                onMouseLeave={() => setShowContact(false)}
            >
                <div className="p-3 flex justify-center">
                    <FaArrowRightLong className="ml-1.5" />
                </div>
                <div className="[writing-mode:vertical-rl] bg-white text-black p-3 flex justify-center items-center gap-1">
                    <div className="rotate-180">contact us</div>
                    <MdMailOutline className="rotate-270 ml-1" />
                </div>
            </div>

            {/* Contact Form with Smooth Open & Close Animation */}
            <div onMouseOver={() => setShowContact(true)} onMouseLeave={() => setShowContact(false)}
                className={`w-96 rounded-xl bg-white text-black p-5 shadow-lg fixed top-58 transition-transform duration-100 ease-in-out ${
                    showContact
                        ? "transform origin-right rotate-y-0 opacity-100 right-12"
                        : "transform origin-right rotate-y-90 opacity-0 right-12 delay-200"
                }`}
                style={{
                    transformStyle: "preserve-3d",
                    perspective: "1200px",
                    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
            >
                <div className="flex justify-between items-center my-5 w-full">
                    <h1 className="text-lg font-semibold">book an appointment</h1>
                    <MdClose
                        className="cursor-pointer text-xl"
                        onClick={() => setShowContact(false)}
                    />
                </div>

                <div>
                    <input type="text" placeholder="name" className="p-2 border border-gray-400 rounded-3xl mb-4 w-full outline-none" />
                    <input type="tel" placeholder="phone" className="p-2 border border-gray-400 rounded-3xl mb-4 w-full outline-none" />
                    <input type="email" placeholder="email" className="p-2 border border-gray-400 rounded-3xl mb-4 w-full outline-none" />
                    <textarea placeholder="message" className="p-2 border border-gray-400 rounded-3xl mb-4 w-full outline-none h-20 resize-none"></textarea>
                    <button className="bg-black text-white p-2 w-full rounded-2xl font-bold">submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
