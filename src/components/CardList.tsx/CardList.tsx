

import React, { useState } from 'react'
import CardProduct from '../cardProduct/Card'
import { getProductsDB } from '@/helpers/products.fetch'
import IProduct from '@/interfaces/IProduct';
import Link from 'next/link';

async function CardList() {
    
    const products: IProduct[] = await getProductsDB()
    
  return (
    <section className='flex flex-col items-center justify-around mx-0 my-4 p-4'>
      <h3 className='font-poppins text-4xl font-extrabold p-4'>Productos mas vendidos</h3>
    <div className="flex flex-row w-full h-2/3 p-4 items-center justify-center flex-wrap gap-4 mx-auto my-7">
  
       {products && products.map( (product) => 
        {  return <Link href={`product/${product.id}`} key={product.id}>
        <CardProduct key={product.id} {...product} /> 
        </Link>}) }
     </div>
     </section>
  )
}

export default CardList