import React from 'react';
import { CarouselRightIcon } from './style';

const CarouselRight = ({type, onClick}) => {
  return (
    <CarouselRightIcon 
      type={type}
      onClick={onClick}
    >
      ❯
    </CarouselRightIcon>
  );
};

export default CarouselRight;
