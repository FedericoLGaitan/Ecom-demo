

import IProduct from '@/interfaces/IProduct';
import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';
import { Button } from '../ui/button';


const CardProduct: React.FC<IProduct> = ({ name, price, description, image, stock, categoryId, id }) => {


  return (
    
    <Card className="w-52 h-82 mx-auto bg-white rounded-lg shadow-md hover:scale-110 transition-shadow duration-300 flex flex-col justify-between">
      <CardContent className="p-2">
        <img
          className="w-full h-52 object-contain"
          src={image}
          alt={`Imagen de ${name}`}
        />
      </CardContent>
      <CardContent className="p-2 flex flex-col items-center text-center">
        <CardTitle className="text-lg font-bold text-gray-800 mb-1 truncate">{name}</CardTitle>
        <p className="text-lg font-semibold text-green-600 mb-1">${price}</p>
        <Button className="w-full p-6 text-slate-200 font-bold text-sm rounded-md hover:bg-blue-700 transition-colors duration-200">
          See detail
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
