"use client"

import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/helpers/orders.helper';
import IProductCart from '@/interfaces/IProduct';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

function CartView() {

  const [cartproducts, setCartproducts] = useState<IProductCart[]>([]);
  const {userData} = useAuth()

  
  useEffect(() => {
    // Obtener el carrito del localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartproducts(cart);
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
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cartproducts.map((product, index) => (
          <li key={index} className="flex products-center border-b border-gray-200 pb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-fit mr-6"
            />
            <div className="flex-1">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500">In stock: {product.stock}</p>
              <p className="text-sm text-gray-700">Price: ${product.price}</p>
              <p className="text-sm text-gray-700">Quantity: {product.quantity}</p>
            </div>
            <div><button>E</button></div>
          </li>
        ))}
      </ul>
      <div>
        <p className='font-poppins font-bold m-2'>Total: </p>
        <button onClick={handleClick} className="p-2 bg-[#164E78] rounded-md font-poppins font-bold text-[#EEE]">Checkout</button>
      </div>
    </div>
  );
}

export default CartView;
