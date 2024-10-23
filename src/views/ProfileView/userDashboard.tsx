"use client"

import React from "react";
import Orders from "../Order/Orders";
import { useAuth } from "@/context/AuthContext";

function Dashboard() {
  const { userData } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    window.location.href = "/"; // Cambia esta ruta según sea necesario
  };

  if (!userData) {
    return <div className="text-center mt-10">Loading user data...</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full max-w-lg mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">User Dashboard</h1>

        <div className="mb-4">
          <span className="font-bold">Name:</span> {userData.user.name}
        </div>
        <div className="mb-4">
          <span className="font-bold">Address:</span> {userData.user.address}
        </div>
        <div className="mb-4">
          <span className="font-bold">Email:</span> {userData.user.email}
        </div>
        <div className="mb-4">
          <span className="font-bold">Phone:</span> {userData.user.phone}
        </div>
        <div className="mb-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Log out
          </button>
        </div>
        <Orders />
      </div>
    </div>
  );
}

export default Dashboard;
