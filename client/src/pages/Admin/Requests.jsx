import { useState } from "react";
import { FaSearch, FaFilter, FaCheck, FaTimes } from "react-icons/fa";

export default function Requests() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  
  const requests = [
    { id: 1, name: "John Doe", email: "john@example.com", message: "Need help with a service.", status: "Pending" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", message: "Interested in your products.", status: "Resolved" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", message: "Want to collaborate.", status: "Pending" },
  ];

  const filteredRequests = requests.filter(request =>
    request.name.toLowerCase().includes(search.toLowerCase()) &&
    (statusFilter === "All" || request.status === statusFilter)
  );

  const fetchRequests = async () => {
    
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Requests</h1>
      
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div>
          <FaFilter className="inline-block mr-2 text-gray-600" />
          <select
            className="border py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request.id} className="border-t hover:bg-gray-100">
                <td className="p-3">{request.name}</td>
                <td className="p-3">{request.email}</td>
                <td className="p-3">{request.message}</td>
                <td className="p-3 flex items-center gap-2">
                  {request.status === "Resolved" ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                  {request.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
