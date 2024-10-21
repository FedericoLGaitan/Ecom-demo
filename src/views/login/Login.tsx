"use client";

import { ILoginProps, ILoginErrors } from "@/interfaces/ILoginProps";
import React, { useEffect, useState } from "react";
import validateLoginForm from "@/helpers/validateLoginForm";
import { login } from "@/helpers/auth.helper";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

function Login() {
  const { setUserData } = useAuth();
  const router = useRouter();
   
  const [dataUser, setDataUser] = useState<ILoginProps>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ILoginErrors>({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>(
    {
      email: false,
      password: false,
    }
  );

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
    const errors = validateLoginForm(dataUser);
    setError(errors);
  
    // Comprobación si hay errores, incluyendo un mensaje si los campos están vacíos
    if (Object.values(errors).some(error => error !== "")) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos antes de continuar.",
        icon: "warning",
        customClass: {
          popup: 'bg-white shadow-lg rounded-lg p-6',
          title: 'text-2xl font-semibold text-gray-800',
          confirmButton: 'bg-[#D9534F] hover:bg-[#C9302C] text-white font-bold py-2 px-4 rounded',
        },
        buttonsStyling: false,
      });
      return;
    }
  
    try {
      const response = await login(dataUser);
      const { token, user } = response;
      setUserData({ token, user });
      Cookies.set("cookieToken", token);
  
      // Pop-up de éxito
      Swal.fire({
        title: "¡Éxito!",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
        customClass: {
          popup: 'bg-white shadow-lg rounded-lg p-6',
          title: 'text-2xl font-semibold text-gray-800',
          confirmButton: 'bg-[#164E78] hover:bg-[#169978] text-white font-bold py-2 px-4 rounded',
        },
        buttonsStyling: false,
      });
  
      router.push("/");
    } catch (error) {
      setError({ email: "Email o contraseña incorrectos.", password: "" });
  
      // Pop-up de error
      Swal.fire({
        title: "Error",
        text: "No se pudo iniciar sesión. Por favor verifica tus credenciales.",
        icon: "error",
        customClass: {
          popup: 'bg-white shadow-lg rounded-lg p-6',
          title: 'text-2xl font-semibold text-gray-800',
          confirmButton: 'bg-[#D9534F] hover:bg-[#C9302C] text-white font-bold py-2 px-4 rounded',
        },
        buttonsStyling: false,
      });
    }
  };

  useEffect(() => {
    const errors = validateLoginForm(dataUser);
    setError(errors);
  }, [dataUser]);

  return (
    <section className="max-w-md lg:w-1/4 mx-auto bg-[#eee] shadow-lg rounded-lg p-8 font-poppins transition-shadow duration-300 hover:shadow-xl">
    <div className="mb-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Iniciar Sesión</h1>
    </div>
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-base font-medium text-gray-700"
        >
          Correo Electrónico:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={dataUser.email}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          placeholder="user@mail.com"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm hover:shadow-md focus:shadow-md"
        />
        {touched.email && error.email && (
          <span className="text-red-500 text-sm">{error.email}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="text-base font-medium text-gray-700"
        >
          Contraseña:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={dataUser.password}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          placeholder="********"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm hover:shadow-md focus:shadow-md"
        />
        {touched.password && error.password && (
          <span className="text-red-500 text-sm">{error.password}</span>
        )}
      </div>
      <div className="text-center">
        <Button
          type="submit"
          className="w-full text-slate-200 font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Iniciar Sesión
        </Button>
      </div>
    </form>
  </section>
  );
}

export default Login;
