"use client"

import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { Card } from '../ui/card'
import Autoplay from 'embla-carousel-autoplay'


const sliderInfo = [
    {
        id: 1,
        title: "Las mejores ofertas en la zona",
        description: "Compra con nostros y llevate un 10% de descuento en tu segunto item, ademas en compras mayores a 'xxx' conta con el envio 100% bonificado " ,
        link: "#"
    },
    {
        id: 2,
        title: "Descubre nuestros productos exclusivos",
        description: "Solo por tiempo limitado, encuentra artículos seleccionados con un 20% de descuento. ¡Aprovecha antes de que se agoten!",
        link: "#"
    },
    {
        id: 3,
        title: "Envíos gratis a todo el país",
        description: "En todas tus compras superiores a 'xxx', disfruta del envío gratuito a cualquier destino. ¡No dejes pasar esta oportunidad!",
        link: "#"
    }
]    



function SliderInfo() {
  return (
    <div className='bg-gray-200 my-4'>
    <Carousel plugins={[
        Autoplay({
            delay: 3000,
        })
    ]}>
        <CarouselContent>
            {sliderInfo.map((info) => {
                return <CarouselItem key={info.id} className='cursor-pointer'>
                    <div>
                        <Card className='shadow-none border-none bg-transparent'>
                            <CarouselContent className='flex flex-col justify-center p-2 items-center font-poppins'>
                                <h5 className='sm:text-lg text-wrap font-bold'>{info.title}</h5>
                                <p className='text-xs text-wrap'>{info.description}</p>
                            </CarouselContent>
                        </Card>
                    </div>
                       
                </CarouselItem>
            })}
        </CarouselContent>
    </Carousel>
    </div>
  )
}

export default SliderInfo