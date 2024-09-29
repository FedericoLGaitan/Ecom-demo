"use client"

import  IProduct  from "@/interfaces/IProduct";
import IUserSession from "@/interfaces/IUserSession";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

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
    if (userData?.token) {
      // Lógica del carrito de compra
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExsist = cart.findIndex((item: IProduct) => item.id === id); // findeIndex devulve la posicon en el array
  
      if (productExsist !== -1) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        cart[productExsist].quantity = (cart[productExsist].quantity || 1) + 1;
      } else {
        // Si es un producto nuevo, lo agrega al carrito con cantidad 1
        cart.push({
          id,
          name,
          description,
          categoryId,
          image,
          stock,
          price,
          quantity: 1,  // Añadimos una propiedad 'cantidad'
        });
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
      Swal.fire({
        title: "Product added to your cart",
        width: 400,
        padding: "3em",
      });
    } else {
      Swal.fire({
        title: "You must have an account",
        width: 400,
        padding: "3em",
      });
    }
  };
  
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
