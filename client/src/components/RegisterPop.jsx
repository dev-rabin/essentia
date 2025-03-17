import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import Logo from '../assets/img/ssl_logo.jpeg';
import api from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });


  useEffect(() => {
    const isRegistered = localStorage.getItem("registeredUserPopUp");
    if(!isRegistered){
      const timeOut = setTimeout(() => {
        setIsOpen(true);
      },15000);
      return () => clearTimeout(timeOut);
    }
  })

  const handleChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!registerForm.name || !registerForm.email || !registerForm.mobile) {
      toast.warn("Please fill in all fields", {
        position: "top-right",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/add-user", registerForm);
      if (response.data.success) {
        localStorage.setItem("registeredUserPopUp", JSON.stringify(registerForm))
      }
      toast.success("Registration successful!", {
        position: "top-right",
      });

      setRegisterForm({ name: "", email: "", mobile: "" });
      setIsOpen(false);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong. Please try again!", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 backdrop-brightness-50 flex justify-center items-center z-50">

          <div className="bg-white text-black w-[600px] md:w-[700px] h-[400px] flex rounded-xl shadow-xl relative">
            
            {/* Left Side: Logo & Welcome Text */}
            <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-black text-white p-6 rounded-l-xl">
              <img src={Logo} alt="Logo" className="w-28 h-28 mb-4" />
              <h2 className="text-2xl font-semibold">Welcome!</h2>
              <p className="text-gray-300 text-center">
                Stunning interiors & exteriors, designed to inspire and impress.
              </p>
            </div>

            {/* Right Side: Registration Form */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center rounded-r-xl">
              <button
                className="absolute top-4 right-4 text-gray-700 hover:text-black transition duration-200"
                onClick={() => setIsOpen(false)}
                disabled={loading}
              >
                <MdClose size={24} />
              </button>

              <h2 className="text-3xl font-semibold mb-4 text-center logo-heading">
                Shub Shiv Living
              </h2>

              <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border border-gray-400 rounded-3xl focus:outline-none focus:ring focus:ring-black"
                  name="name"
                  value={registerForm.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-400 rounded-3xl focus:outline-none focus:ring focus:ring-black"
                  name="email"
                  value={registerForm.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Mobile"
                  className="w-full p-2 border border-gray-400 rounded-3xl focus:outline-none focus:ring focus:ring-black"
                  name="mobile"
                  value={registerForm.mobile}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className={`w-full bg-black text-white py-2 rounded-3xl font-semibold transition duration-300 cursor-pointer ${
                    loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterPop;
