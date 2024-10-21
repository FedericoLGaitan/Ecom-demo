"use client";

import IProduct from '@/interfaces/IProduct';
import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';
import { Expand, Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import IconButton from '../IconButton/IconButton';
import { useRouter } from 'next/navigation';

const CardProduct: React.FC<IProduct> = ({ name, price, description, image, stock, categoryId, id }) => {
  const router = useRouter();

  return (
    <Card className="w-[150px] sm:w-56 lg:w-64 h-auto bg-slate-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col justify-between">
      
      {/* Imagen del producto */}
      <CardContent className="p-2">
        <Link href={`/product/${id}`}>
          <img
            className="w-full h-48 sm:h-52 object-contain rounded-md"
            src={image}
            alt={`Imagen de ${name}`}
          />
        </Link>
      </CardContent>

      {/* Detalles del producto */}
      <CardContent className="p-3 flex flex-col items-center text-center">
        <CardTitle className="text-md sm:text-lg font-bold text-gray-800 mb-1 truncate">
          <Link href={`/product/${id}`}>
            {name}
          </Link>
        </CardTitle>
        <p className="text-base sm:text-lg font-semibold text-green-600 mb-2">${price}</p>

        {/* Iconos de acciones */}
        <div className="flex flex-row justify-between w-full mt-2 space-x-2">
          <IconButton onClick={() => router.push(`/product/${id}`)} icon={<Expand size={20} />} />
          <IconButton onClick={() => console.log("added to cart")} icon={<ShoppingCart size={20} />} />
          <IconButton onClick={() => console.log("added to favorites")} icon={<Heart size={20} />} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
