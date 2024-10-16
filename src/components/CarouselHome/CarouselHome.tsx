import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImgCarousel } from "@/helpers/carruselArray";

export function CarouselHome() {
  return (
    
    <Carousel>
      <CarouselContent>
        {ImgCarousel.map((index) => (
          <CarouselItem key={index}>
            <div className="w-[70vw] h-[50vh] mx-auto rounded-lg">
              <img
              className="w-full h-full object-fill rounded-lg"
              alt="img home"
              src={index}/> 
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
