import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdClose, MdMailOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../api/index";

const Contact = () => {
    const [showContact, setShowContact] = useState(false);
    const [loading, setLoading] = useState(false);
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const handleChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        if (!contactForm.name || !contactForm.email || !contactForm.mobile || !contactForm.message) {
            toast.warn("Please fill in all fields", { position: "top-right" });
            return;
        }

        setLoading(true);
        try {
            const response = await api.post("/add-contact", contactForm);
            toast.success("Message sent successfully!", { position: "top-right" });
            setContactForm({ name: "", email: "", mobile: "", message: "" });
        } catch (error) {
            toast.error("Failed to send message. Try again!", { position: "top-right" });
            console.error("Contact form error:", error);
        }
        setLoading(false);
    };

    return (
        <div className="fixed top-58 right-0 z-50 flex flex-col items-end shadow-lg">
            <ToastContainer />

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
                    <MdMailOutline className="rotate-270 ml-0.5" />
                </div>
            </div>

            {/* Contact Form */}
            <div
                onMouseOver={() => setShowContact(true)}
                onMouseLeave={() => setShowContact(false)}
                className={`max-w-96 min-w-80 rounded-xl bg-white text-black p-5 shadow-2xl fixed top-58 transition-transform duration-100 ease-in-out ${
                    showContact ? "transform origin-right rotate-y-0 opacity-100 right-12" : "transform origin-right rotate-y-90 opacity-0 right-12 delay-200"
                }`}
                style={{
                    transformStyle: "preserve-3d",
                    perspective: "1200px",
                    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
            >
                <div className="flex justify-between items-center my-5 w-full">
                    <h1 className="text-lg font-semibold">book an appointment</h1>
                    <MdClose className="cursor-pointer text-xl" onClick={() => setShowContact(false)} />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-2 border border-gray-400 rounded-3xl mb-4 w-full outline-none"
                        name="name"
                        value={contactForm.name}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="p-2 border border-gray-400 rounded-3xl mb-4 w-full outline-none"
                        name="mobile"
                        value={contactForm.mobile}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 border border-gray-400 rounded-3xl mb-4 w-full outline-none"
                        name="email"
                        value={contactForm.email}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="Message"
                        className="p-2 border border-gray-400 rounded-3xl mb-4 w-full outline-none h-20 resize-none"
                        name="message"
                        value={contactForm.message}
                        onChange={handleChange}
                    ></textarea>

                    <button
                        className="bg-black text-white p-2 w-full rounded-2xl font-bold disabled:opacity-50 cursor-pointer"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
