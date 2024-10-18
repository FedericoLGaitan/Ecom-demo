
import {getProductsDB } from '@/helpers/products.fetch'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { Card } from '../ui/card'
import categoriesArr from '@/helpers/categoriesArr'



 async function Categories() {

  const categories = categoriesArr

  return (
    <section className='w-full my-6'>
      <Carousel className='w-1/2 mx-auto'>
           <CarouselContent>
         <CarouselItem className='flex flex-row justify-evenly'>
           {categories.map(category => {return <Card key={category.id}>
              <p>{category.name}</p>
           </Card>})}
         </CarouselItem>
         </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Categories