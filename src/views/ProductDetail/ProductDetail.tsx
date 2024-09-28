"use client"

import IProduct from "@/interfaces/IProduct";
import IUserSession from "@/interfaces/IUserSession";
import React, { useEffect, useState } from "react";

const ProductDetail: React.FC<IProduct> = ({
  id,
  name,
  description,
  categoryId,
  image,
  stock,
  price,
}) => {
 
  const [userData, setUserData] = useState<IUserSession | null>(null);
  
  useEffect(() => {
    if (typeof window != "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);

   const handleClick = () => {
     if(userData?.token) {
      // logica carrito compra
      alert("agregado al carrito")
     }
      else {
        alert("inicia sesion para creatr tu carrito")
      }
   }
  return (
    <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Imagen del producto */}
        <div className="flex-1">
          <img
            className="w-full h-96 object-contain rounded-lg shadow-md"
            src={image}
            alt={`Imagen del producto ${name}`}
          />
        </div>

        {/* Detalles del producto */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
          <p className="text-2xl text-green-600 font-semibold mb-4">${price}</p>
          <p className="text-sm text-gray-600 mb-6">{description}</p>

          {/* Botón de agregar al carrito */}
          <button  onClick={handleClick} className="w-full p-3 bg-blue-600 text-white font-bold text-sm rounded-md hover:bg-blue-700 transition-colors duration-200">
            Add to cart
          </button>

          {/* Stock del producto */}
          <p className="text-gray-500 mt-4">{stock > 0 ? `In stock: ${stock}` : "Out of stock"}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
