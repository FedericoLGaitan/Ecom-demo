"use client";

import { Separator } from "../ui/separator";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full mt-16 bg-[#eee] py-6">
      <div className="flex flex-col sm:flex-row justify-around items-center w-full">
        <h4 className="font-poppins font-bold text-xl text-[#030608] mb-4 sm:mb-0">
          Ecommerce Footer
        </h4>
        <ul className="flex justify-center items-center gap-4 text-2xl">
          <li className="hover:cursor-pointer">
            <Linkedin onClick={() => { window.open('https://www.linkedin.com/in/federico-lopez-gait%C3%A1n-02b444217/', '_blank'); }} />
          </li>
          <li className="hover:cursor-pointer">
            <Instagram onClick={() => { window.open('https://www.instagram.com/fedelopezgaitan/', '_blank'); }} />
          </li>
          <li className="hover:cursor-pointer">
            <Github onClick={() => { window.open('https://github.com/FedericoLGaitan', '_blank'); }} />
          </li>
        </ul>
      </div>
      <Separator className="w-4/6 my-3 border-gray-200 mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 text-center">
        &copy; 2024 <Link href="#">Fede Lopez Gaitan</Link>
      </span>
    </footer>
  );
}

export default Footer;
