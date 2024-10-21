import React from 'react';
import CardProduct from '../cardProduct/Card';
import { getProductsDB } from '@/helpers/products.fetch';
import IProduct from '@/interfaces/IProduct';

async function CardList() {
  const products: IProduct[] = await getProductsDB();

  return (
    <section className='flex flex-col items-center justify-center mx-auto my-4 p-4 w-full'>
      <h3 className='font-poppins text-2xl lg:text-4xl font-extrabold mb-6 text-center'>
        Productos más vendidos
      </h3>
      <div className="flex flex-wrap justify-center gap-4 mx-auto w-full sm:w-3/4 lg:w-2/3">
        {products && products.map((product) => (
          <div key={product.id} className="flex-shrink-0">
            <CardProduct {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardList;
