"use client"

import { createOrder } from '@/helpers/orders.helper';
import IProductCart from '@/interfaces/IProduct';
import IUserSession from '@/interfaces/IUserSession';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

function CartView() {

  const [cartproducts, setCartproducts] = useState<IProductCart[]>([]);
  const [userData, setUserData] = useState<IUserSession | null>(null);

  
  useEffect(() => {
    // Obtener el carrito del localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartproducts(cart);
  }, []);

  
  useEffect(() => {
    if (typeof window != "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);
  
  const handleClick = async () => {
    const idProducts = cartproducts.map(product => product.id)
    await createOrder(idProducts, userData?.token!)
      Swal.fire({
        title: "Order created succesfully",
        icon: "success",
        customClass: {
          popup: "bg-white shadow-lg rounded-lg p-6",
          title: "text-2xl font-semibold text-gray-800",
          confirmButton:
            "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded",
        },
      });
      setCartproducts([])
      localStorage.setItem("cart", "[]")
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cartproducts.map((product, index) => (
          <li key={index} className="flex products-center border-b border-gray-200 pb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover mr-6"
            />
            <div className="flex-1">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500">In stock: {product.stock}</p>
              <p className="text-sm text-gray-700">Price: ${product.price}</p>
              <p className="text-sm text-gray-700">Quantity: {product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <p>Total: </p>
        <button onClick={handleClick}>Checkout</button>
      </div>
    </div>
  );
}

export default CartView;
