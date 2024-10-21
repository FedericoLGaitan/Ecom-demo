"use client"

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card } from '../ui/card';
import categoriesArr from '@/helpers/categoriesArr';
import Link from 'next/link';

 function ChooseCategory() {

  const categories = categoriesArr;

  return (
    <section className="w-full my-6">
      <Carousel className="w-2/3 sm:w-3/4 lg:w-3/4 mx-auto">
        <CarouselContent>
          
            {categories.map((category) => {
              return (
                <CarouselItem  key={category.id} className="flex flex-nowrap sm:basis-1/4 lg:basis-1/6 basis-1/3 items-center justify-center  gap-4">
                <Link href={`/categories/${category.id}`} key={category.id} className="w-full sm:w-[200px] lg:w-[250px]">
                  <Card className="p-4 h-24 sm:h-32 lg:h-40 flex justify-center items-center text-center bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all duration-300 ease-in-out">
                    <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 hover:text-gray-900">
                      {category.name}
                    </p>
                  </Card>
                </Link>
                </CarouselItem>
              );
            })}
          
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </section>
  );
}

export default ChooseCategory;
