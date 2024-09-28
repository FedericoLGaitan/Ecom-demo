

import IProduct from '@/interfaces/IProduct';
import React from 'react';


const CardProduct: React.FC<IProduct> = ({ name, price, description, image, stock, categoryId, id }) => {


  return (
    
    <div className="w-64 h-96 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <div className="p-4">
        <img
          className="w-full h-48 object-contain"
          src={image}
          alt={`Imagen de ${name}`}
        />
      </div>
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{name}</h3>
        <p className="text-lg font-semibold text-green-600 mb-4">${price}</p>
        <button className="w-full p-2 bg-blue-600 text-white font-bold text-sm rounded-md hover:bg-blue-700 transition-colors duration-200">
          See detail
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
