"use client";

import React from "react";
import Orders from "../Order/Orders";
import { useAuth } from "@/context/AuthContext";

function Dashboard() {
  const {userData} = useAuth()


  const handleLogout = () => {
    // Eliminar datos de la sesión del localStorage
    localStorage.removeItem('userSession');
  
    // Redireccionar a la página de inicio o login
    window.location.href = '/'; // Cambia esta ruta según sea necesario
  };

  if (!userData) {
    return <div className="text-center mt-10">Loading user data...</div>;
  }

  return (
    <div className="container w-full p-6 items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-3/5 mx-auto">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

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
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          >
            Log out
          </button>
        </div>
         <Orders/>
      </div>
    </div>
  );
}

export default Dashboard;
