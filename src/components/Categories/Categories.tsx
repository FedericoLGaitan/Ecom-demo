
import {getProductsDB } from '@/helpers/products.fetch'
import React from 'react'
import { Carousel, CarouselContent } from '../ui/carousel'
import { Card } from '../ui/card'



 async function Categories() {

  const products = await getProductsDB()

  return (
    <section>
      <Carousel>
         <CarouselContent>
           {products.map(product => {return <Card key={product.id}>
              <p>{product.categoryId}</p>
           </Card>})}
         </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Categories