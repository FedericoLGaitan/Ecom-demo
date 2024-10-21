"use client";

import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/helpers/orders.helper';
import IProductCart from '@/interfaces/IProduct';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

function CartView() {
  const [cartProducts, setCartProducts] = useState<IProductCart[]>([]);
  const { userData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Obtener el carrito del localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartProducts(cart);
  }, []);

  const handleCheckout = async () => {
    if (!userData?.token) {
      // Mostrar popup para redirigir al login
      Swal.fire({
        title: "You need to be logged in to checkout",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Go to Login",
        cancelButtonText: "Cancel",
        customClass: {
          popup: "bg-white shadow-lg rounded-lg p-6",
          title: "text-2xl font-semibold text-gray-800",
          confirmButton: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded", 
          cancelButton: "bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded", 
        },
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/login'); // Redirigir a la página de login
        }
      });
      return;
    }

    const idProducts = cartProducts.map(product => product.id);
    await createOrder(idProducts, userData?.token!);

    // Vaciar el carrito y el local storage
    Swal.fire({
      title: "Order created successfully",
      icon: "success",
      customClass: {
        popup: "bg-white shadow-lg rounded-lg p-6",
        title: "text-2xl font-semibold text-gray-800",
        confirmButton:
          "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded",
      },
    });

    setCartProducts([]);
    localStorage.setItem("cart", "[]");
  }


  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cartProducts.map((product, index) => (
          <li key={index} className="flex flex-col md:flex-row products-center border-b border-gray-200 pb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 md:w-32 md:h-32 object-contain mr-6"
            />
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500">In stock: {product.stock}</p>
              <p className="text-sm text-gray-700">Price: ${product.price}</p>
              <p className="text-sm text-gray-700">Quantity: {product.quantity}</p>
            </div>
            <div>
              <button className="text-red-500 hover:text-red-600">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className='font-poppins font-bold m-2'>Total: ${cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0).toFixed(2)}</p>
        <Button onClick={handleCheckout} className="p-2 rounded-md font-poppins font-bold text-[#EEE] hover:bg-blue-600 transition duration-300">Checkout</Button>
      </div>
    </div>
  );
}

export default CartView;
