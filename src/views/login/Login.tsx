"use client";

import { ILoginProps, ILoginErrors } from "@/interfaces/ILoginProps";
import React, { useEffect, useState } from "react";
import validateLoginForm from "@/helpers/validateLoginForm";

function Login( {token, setToken} ) {
  const [dataUser, setDataUser] = useState<ILoginProps>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ILoginErrors>({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("http://localhost:3000",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser)

    })
    .then((res)=> res.json())
    .then ((json) => {console.log(json)
    localStorage.setItem("userToken", json.token) })
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    const errors = validateLoginForm(dataUser);
    setError(errors);
  }, [dataUser]);

  return (
    <section className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Iniciar Sesión</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-base font-medium text-gray-700">
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
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          {touched.email && error.email && (
            <span className="text-red-500 text-sm">{error.email}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-base font-medium text-gray-700">
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
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          {touched.password && error.password && (
            <span className="text-red-500 text-sm">{error.password}</span>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
