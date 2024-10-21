"use client";

import { IRegisterProps, IRegisterErrors } from "@/interfaces/IRegisterProps";
import React, { useEffect, useState } from "react";
import validateRegisterForm from "@/helpers/validateRegisterForm";
import { register } from "@/helpers/auth.helper";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";

function Register() {
  const router = useRouter();

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
  }>({
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
  
  if (Object.values(dataUser).some(value => value.trim() === "")) {
    Swal.fire({
      title: "Error",
      text: "Por favor, completa todos los campos.",
      icon: "error",
      customClass: {
        popup: 'bg-white shadow-lg rounded-lg p-6',
        title: 'text-2xl font-semibold text-gray-800',
        confirmButton: 'bg-[#164E78] hover:bg-[#169978] text-white font-bold py-2 px-4 rounded',
      },
      buttonsStyling: false,
    });
    return;
  }
  // Verifica si hay errores antes de proceder
  const errors = validateRegisterForm(dataUser);
  setError(errors);
  
  // Si hay errores, no se envía el formulario
  if (Object.values(errors).some(error => error !== "")) {
    return;
  }
  console.log(dataUser)
  await register(dataUser);
  Swal.fire({
    title: "Registro exitoso",
    text: "Gracias por unirte a nosotros",
    icon: "success",
    customClass: {
      popup: 'bg-white shadow-lg rounded-lg p-6',
      title: 'text-2xl font-semibold text-gray-800',
      confirmButton: 'bg-[#164E78] hover:bg-[#169978] text-white font-bold py-2 px-4 rounded',
    },
    buttonsStyling: false,
  });
  setDataUser({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  })
  router.push("/login");
};

  useEffect(() => {
    const errors = validateRegisterForm(dataUser);
    setError(errors);
  }, [dataUser]);

  return (
    <section className="min-h-1/2 flex justify-center font-poppins">
      <div className="w-full max-w-md bg-[#EEE] p-8 rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Register</h1>
        </div>
        <form onSubmit={handleSubmit} >
          {["name", "email", "password", "address", "phone"].map((field) => (
            <div key={field} className="flex flex-col gap-2">
              <label htmlFor={field} className="text-sm font-medium text-gray-700 capitalize">
                {field}:
              </label>
              <input
                type={field === "password" ? "password" : field === "email" ? "email" : "text"}
                name={field}
                id={field}
                value={dataUser[field as keyof IRegisterProps]}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
              {touched[field as keyof typeof touched] && error[field as keyof IRegisterErrors] && (
                <span className="text-red-500 text-sm">{error[field as keyof IRegisterErrors]}</span>
              )}
            </div>
          ))}
          <div className="text-center">
            <Button
              type="submit"
              className="w-full text-slate-200 font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-2"
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
