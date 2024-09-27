import React from 'react'
import CardProduct from '../cardProduct/Card'
import { getProductsDB } from '@/helpers/products.fetch'
import IProduct from '@/interfaces/IProduct';
import Link from 'next/link';

async function CardList() {

    const products: IProduct[] = await getProductsDB();

  return (
    <div className="flex flex-row w-2/3 h-2/3 p-9 items-center justify-center flex-wrap gap-[40px] flex-shrink-0 mx-auto">
        {products && products.map( (product) => 
        { return <Link href={`product/${product.id}`} key={product.id}>
        <CardProduct key={product.id} {...product} /> 
        </Link>})}
     </div>
  )
}

export default CardList