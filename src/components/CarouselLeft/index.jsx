import React from 'react';
import { CarouselLeftIcon } from './style';

const CarouselLeft = ({type, onClick}) => {
  return (
    <CarouselLeftIcon 
      type={type} 
      onClick={onClick}
    >
      ❮
    </CarouselLeftIcon>
  );
};

export default CarouselLeft;
