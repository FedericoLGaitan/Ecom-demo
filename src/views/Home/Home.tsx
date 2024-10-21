

import React from 'react';
import CardList from '@/components/CardList.tsx/CardList';
import {CarouselHome} from '@/components/CarouselHome/CarouselHome';
import SliderInfo from '@/components/SliderInfo/SliderInfo';
import ChooseCategory from '@/components/ChooseCategory/ChooseCategories';


export default function Home() {
   

  return (
    <main>
    <CarouselHome/>
    <SliderInfo/>
    <ChooseCategory/>
    <CardList/>
   </main>
  )
}
