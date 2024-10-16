
import React from 'react';
import CardList from '@/components/CardList.tsx/CardList';
import {CarouselHome} from '@/components/CarouselHome/CarouselHome';
import SliderInfo from '@/components/SliderInfo/SliderInfo';
import Categories from '@/components/Categories/Categories';


export default function Home() {
   

  return (
    <main>
    <CarouselHome/>
    <SliderInfo/>
    <Categories/>
    <CardList/>
   </main>
  )
}
