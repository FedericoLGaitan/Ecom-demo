import CardProduct from '@/components/cardProduct/Card'

import { getProductsByCategory } from '@/helpers/products.fetch'
import IProduct from '@/interfaces/IProduct'
import React from 'react'

async function CategoryDetail({categoryId}: {categoryId: string}) {
   
  const products: IProduct[] = await getProductsByCategory(categoryId)
   

  return ( 
      <>
      <div className="flex flex-row w-1/2 mx-auto p-4 my-7 gap-4">
        {
          products && products.map((product) => {return <CardProduct key={product.id} {...product}/>})
        }
        </div>
      </>
  )
      
}

export default CategoryDetail