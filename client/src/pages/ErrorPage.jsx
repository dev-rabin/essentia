import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! Page not found{dots}</p>
        <Link
          to="/"
          className="px-6 py-3 bg-black hover:bg-blue-700 text-white text-lg rounded-lg shadow-lg transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
