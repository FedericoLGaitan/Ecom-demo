

import IProduct from '@/interfaces/IProduct';
import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';
import { Expand, Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';


const CardProduct: React.FC<IProduct> = ({ name, price, description, image, stock, categoryId, id }) => {


  return (
    
    <Card className="w-52 h-82 mx-auto bg-white rounded-lg shadow-md hover:scale-110 transition-shadow duration-300 flex flex-col justify-between">
      
      <CardContent className="p-2">
      <Link href={`product/${id}`}>
        <img
          className="w-full h-52 object-contain"
          src={image}
          alt={`Imagen de ${name}`}
        />
        </Link>
      </CardContent>
      <CardContent className="p-2 flex flex-col items-center text-center">
        <CardTitle className="text-lg font-bold text-gray-800 mb-1 truncate"><Link href={`product/${id}`}>{name}</Link></CardTitle>
        <p className="text-lg font-semibold text-green-600 mb-1">${price}</p>
        <div className='flex flex-row justify-evenly w-full mt-2'>
        <Expand></Expand>
        <ShoppingCart></ShoppingCart>
        <Heart></Heart>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
