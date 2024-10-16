"use client";

import { useAuth } from "@/context/AuthContext";
import { Heart, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DropdownMenuUser } from "../dropdown/dropdown";
import { Button } from "../ui/button";

function NavBar() {
  const {userData} = useAuth()


  return (
      <nav className="flex flex-row justify-around items-center w-4/6 mx-auto mt-14 mb-7 p-2 bg-[#EEE] rounded-lg shadow-md">
        <Link href={"/"}>
          <h3 className="text-start font-poppins font-extrabold text-[#030608]">
            Ecommerce
          </h3>
        </Link>
        <div className="w-3/5">
          <input
            type="text"
            name="search"
            className="w-full h-10 rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-[#030608] transition"
            placeholder="Search..."
          />
        </div>

        {userData?.token ? (
          <ul className="flex flex-row justify-center gap-1">
            <li>
              <Link href={"/cart"}>
               <ShoppingCartIcon  strokeWidth="1" size="32"/>
              </Link>
            </li>
            <li>
              <Link href={"/favorites"}>
               <Heart strokeWidth="1" size="32"/>
              </Link>
            </li>
            <li>
               <DropdownMenuUser/>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-row gap-3">
            <li>
              <Link href={"/register"}>
                <Button className="font-poppins text-[#EEE]  hover:bg-blue-700 transition duration-300">register</Button>
              </Link>
            </li>
            <li>
              <Link href={"/login"}>
                <Button className="font-poppins text-[#EEE]  hover:bg-blue-700 transition duration-300 ">sing in</Button>
              </Link>
            </li>
          </ul>
        )}
      </nav>
  );
}

export default NavBar;
