"use client";

import { IRegisterProps, IRegisterErrors } from "@/interfaces/IRegisterProps";
import React, { useEffect, useState } from "react";
import validateRegisterForm from "@/helpers/validateRegisterForm";
import { register } from "@/helpers/auth.helper";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";


function Register() {
  const router = useRouter()
  const [dataUser, setDataUser] = useState<IRegisterProps>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState<IRegisterErrors>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [touched, setTouched] = useState<{
    name: boolean;
    email: boolean;
    password: boolean;
    address: boolean;
    phone: boolean;
  }>( {
    name: false,
    email: false,
    password: false,
    address: false,
    phone: false,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDataUser({
      ...dataUser,
      [name]: value,
    });
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;

    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     await register(dataUser)    
      Swal.fire({
        title: "Registro exitoso",
        text: "Gracias por unirte a nosotros",
        icon: "success",
        customClass: {
          popup: 'bg-white shadow-lg rounded-lg p-6',
          title: 'text-2xl font-semibold text-gray-800',
          confirmButton: 'bg-[#164E78] hover:bg-[#169978] text-white font-bold py-2 px-4 rounded',
        },
        buttonsStyling: false, // Necesario para desactivar los estilos por defecto de los botones
      })
         router.push("/login")
      };

  useEffect(() => {
    const errors = validateRegisterForm(dataUser);
    setError(errors);
  }, [dataUser]);

  return (
    <section className="h-screen flex items-center justify-center font-poppins">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Register</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={dataUser.name}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              placeholder="Your Name"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            {touched.name && error.name && (
              <span className="text-red-500 text-sm">{error.name}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={dataUser.email}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              placeholder="user@mail.com"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            {touched.email && error.email && (
              <span className="text-red-500 text-sm">{error.email}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={dataUser.password}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              placeholder="********"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            {touched.password && error.password && (
              <span className="text-red-500 text-sm">{error.password}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm font-medium text-gray-700">
              Address:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={dataUser.address}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              placeholder="Your Address"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            {touched.address && error.address && (
              <span className="text-red-500 text-sm">{error.address}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={dataUser.phone}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              placeholder="Your Phone"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            {touched.phone && error.phone && (
              <span className="text-red-500 text-sm">{error.phone}</span>
            )}
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="w-full text-slate-200 font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
