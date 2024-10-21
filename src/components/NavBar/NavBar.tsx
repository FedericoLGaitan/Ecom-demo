"use client";

import { useAuth } from "@/context/AuthContext";
import { Heart, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DropdownMenuUser } from "../dropdown/dropdown";
import { Button } from "../ui/button";

function NavBar() {
  const { userData } = useAuth();

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center w-11/12 lg:w-4/6 mx-auto mt-10 mb-5 p-3 bg-[#EEE] rounded-lg shadow-md">
      {/* Logo */}
      <Link href={"/"}>
        <h3 className="text-center sm:text-start font-poppins font-extrabold text-[#030608] p-2 text-xl sm:text-2xl">
          Ecommerce
        </h3>
      </Link>

      {/* Input de búsqueda */}
      <div className="w-full sm:w-3/5 mt-4 sm:mt-0">
        <input
          type="text"
          name="search"
          className="w-full h-10 rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-[#030608] transition"
          placeholder="Search..."
        />
      </div>

      {/* Menú de usuario */}
      {userData?.token ? (
        <ul className="flex flex-row justify-center gap-3 mt-4 sm:mt-0">
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
              <Button className="font-poppins text-[#EEE] bg-blue-500 hover:bg-blue-700 transition duration-300">
                Register
              </Button>
            </Link>
          </li>
          <li>
            <Link href={"/login"}>
              <Button className="font-poppins text-[#EEE] bg-blue-500 hover:bg-blue-700 transition duration-300">
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
