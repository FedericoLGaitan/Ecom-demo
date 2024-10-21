"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ImgCarousel } from "@/helpers/carruselArray";
import Autoplay from "embla-carousel-autoplay";

export function CarouselHome() {
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {ImgCarousel.map((item) => (
            <CarouselItem key={item.id}>
              <div className="w-[90vw] h-[40vh] sm:w-[80vw] sm:h-[50vh] lg:w-[70vw] lg:h-[60vh] mx-auto rounded-lg">
                <img
                  className="w-full h-full object-fit rounded-lg"
                  alt={item.description}
                  src={item.img}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
