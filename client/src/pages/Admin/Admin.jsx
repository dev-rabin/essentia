import { useState } from "react";
import { FaBars, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export default function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"
          } bg-gradient-to-b from-black to-gray-800 p-4 shadow-xl text-white transition-all duration-300 flex flex-col border-r border-gray-700`}
      >
        <button className="w-full flex items-center gap-3 p-3 text-lg font-semibold hover:bg-white/10 rounded-lg transition-all overflow-hidden cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars className="text-2xl flex-shrink-0" />
          <span className={`${sidebarOpen ? "opacity-100" : "opacity-0 w-0"} transition-all duration-300 whitespace-nowrap`}>Admin Panel</span>
        </button>
        <div className="mt-6 space-y-4 w-full">
          <Link to={"/admin/requests"} className="block">
            <button className="cursor-pointer w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all backdrop-blur-lg">
              <FaTachometerAlt className="text-xl flex-shrink-0" />
              <span className={`${sidebarOpen ? "opacity-100" : "opacity-0 w-0"} transition-all duration-300 whitespace-nowrap`}>Requests</span>
            </button>
          </Link>
          <Link to={"/admin/users"} className="block">
            <button className="cursor-pointer w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all backdrop-blur-lg">
              <FaUsers className="text-xl flex-shrink-0" />
              <span className={`${sidebarOpen ? "opacity-100" : "opacity-0 w-0"} transition-all duration-300 whitespace-nowrap`}>Users</span>
            </button>
          </Link>
        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-black to-gray-800 p-5">Shub Shiv Living</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[640px] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
