"use client";

import { useAuth } from "@/context/AuthContext";
import { Heart, ShoppingCartIcon, Search } from "lucide-react"; // Asegúrate de importar el icono de búsqueda
import Link from "next/link";
import React, { useState } from "react";
import { DropdownMenuUser } from "../dropdown/dropdown";
import { Button } from "../ui/button";
import Swal from "sweetalert2";

function NavBar() {
  const { userData } = useAuth();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      Swal.fire("Please enter a search term.");
    } else {
      // Lógica de búsqueda aquí
      console.log("Searching for:", searchTerm);
      setSearchVisible(false);
    }
  };

  return (
    <nav className="flex justify-around items-center w-[95%] md:w-5/6 lg:w-4/6 mx-auto mt-10 mb-5 p-3 bg-[#EEE] rounded-lg shadow-md">
      {/* Logo */}
      <Link href={"/"}>
        <h3 className="text-center sm:text-start font-poppins font-extrabold text-[#030608] p-2 text-lg sm:text-2xl">
          Ecommerce
        </h3>
      </Link>

       {/* Icono de búsqueda */}
       <div className="relative w-1/3">
        <button onClick={() => setSearchVisible(!searchVisible)} className="p-2">
          <Search size={24} className="text-gray-600 hover:text-gray-800 transition" />
        </button>

        {searchVisible && (
          <div className="absolute z-10 bg-white border rounded-lg p-4 w-[300px] md:w-full shadow-md">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex justify-between mt-2">
              <button onClick={handleSearch} className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-700 transition">
                Search
              </button>
              <button onClick={() => setSearchVisible(false)} className="text-gray-500 hover:underline">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>


      {/* Menú de usuario */}
      {userData?.token ? (
        <ul className="flex flex-row justify-center gap-2 mt-4 sm:mt-0">
          <li>
            <Link href={"/cart"}>
              <ShoppingCartIcon strokeWidth="1" size="28" className="hover:text-gray-700 transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href={"/favorites"}>
              <Heart strokeWidth="1" size="28" className="hover:text-gray-700 transition duration-300" />
            </Link>
          </li>
          <li>
            <DropdownMenuUser />
          </li>
        </ul>
      ) : (
        <ul className="flex flex-row gap-2 mt-4 sm:mt-0 mx-2">
          <li>
            <Link href={"/register"}>
              <Button className="font-poppins text-[#EEE] bg-blue-500 hover:bg-blue-700 transition duration-300 p-2 text-[0.7rem] sm:text-sm ">
                Register
              </Button>
            </Link>
          </li>
          <li>
            <Link href={"/login"}>
              <Button className="font-poppins text-[#EEE] bg-blue-500 hover:bg-blue-700 transition duration-300  p-2 text-[0.7rem] sm:text-sm">
                Sign in
              </Button>
            </Link>
          </li>
        </ul>
      )}

     
    </nav>
  );
}

export default NavBar;
