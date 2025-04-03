import { useState } from "react";
import { FaSearch, FaUserCheck } from "react-icons/fa";

export default function Users() {
  const [search, setSearch] = useState("");
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaUserCheck className="text-blue-600" /> Registered Users
      </h1>
      
      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md border border-gray-200 w-full max-w-md mb-6">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search users..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      {/* Users Table */}
      <div className="bg-white shadow-md rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
              .map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-4">{user.id}</td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className={`p-4 font-semibold ${user.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                    {user.status}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
